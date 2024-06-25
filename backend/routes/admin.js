const router=require('express').Router();
let Admin=require('../models/admin.model');
let InstorSchool=require('../models/instorschool.model');

let Student=require('../models/studentdetail.model');
let Teacher=require('../models/teacherdetail.model');
let MainQuiz=require('../models/mainquiz.model');
// const config=require('config');
const jwt= require('jsonwebtoken');
const { json } = require('body-parser');
const auth =require("../middleware/auth");
const { findById } = require('../models/admin.model');
require('dotenv').config();

router.route('/nn').get((req,res)=>{
    res.send("sdfdfdf");
})

router.route('/new').get(auth,async(req,res)=>{
    var userids=req.userid;
    await Admin.findById(userids).then(admins=>{res.json(admins)}).catch(err=>res.status(400).json("Error:"+err));
});
router.route("/mydetails").get(auth,async(req,res)=>{
    await Student.findById(req.userid).then(ress=>{console.log(ress);res.json(ress)}).catch(err=>{res.json(err)});
    
    })

router.route('/add').post((req,res)=>{
    const username=req.body.username;
    const schoolorinst=req.body.schoolorinst;
    const schoolorinstname=req.body.schoolorinstname;
    const positionname=req.body.positionname;
    const schoolinstmailid=req.body.schoolinstmailid;
    const schoolinstphno=Number(req.body.schoolinstphno);
    const schoolorinstcountry=req.body.schoolorinstcountry;
    const schoolorinststate=req.body.schoolorinststate;
    const schoolorinstdistrict=req.body.schoolorinstdistrict;
    const schoolorinstaddress=req.body.schoolorinstaddress;
    const password=req.body.password;
    const mailid=req.body.mailid;
    const phno=Number(req.body.phno);

    var isexistadmin1;
    isexistadmin1=Admin.findOne({schoolinstmailid:schoolinstmailid});
    if(isexistadmin1){console.log(isexistadmin1);}
    
    // if(!isexistadmin1){
        const newadmin=new Admin({username,schoolorinst,schoolorinstname,positionname,schoolinstmailid,schoolinstphno,schoolorinstcountry,schoolorinststate,schoolorinstdistrict,schoolorinstaddress,password,mailid,phno});
        newadmin.save().then((user)=>{
            // const tokenf=jwt.sign({_id:user.id},"quizee_secret",{expiresIn:3600})
            // res.cookie("token",tokenf,{
            //     httpOnly:true
            // }).send();
            
            var transporter=nodemailer.createTransport({
                service:'gmail',
                auth:{
                    user:'irbaaz000@gmail.com',
                    pass:process.env.MAIL_PASSWORD
                }
            });

            var mailOptions={
                from : 'irbaaz000@gmail.com',
                to:mailid,
                subject:'Quizeee',
                text:'Hey '+username+'!.Thank you for registering here.You have Options for creating student,Teacher account and Creating Quizes and adding Department for your '+schoolorinst
            };

            transporter.sendMail(mailOptions,(err,info)=>{if(err){console.log(err)}else console.log(info)})
            
            }).catch(err=>{res.status(400).json("Error:"+err)});
        
    // }else{ 
    //     res.json("Admin already exist");
    // }
});

router.route('/loginadmin').post(async (req,res)=>{
    const mailid=req.body.mailid;
    const password=req.body.password;
    

    const user = await Admin.findOne({schoolinstmailid:mailid,password:password});
    if(user!==null){
        var ids2=user._id;
        const tokenf=jwt.sign({id:ids2},process.env.SECRET_KEY);
       res.cookie("token",tokenf,{
            httpOnly:true,
            sameSite:'none',
            secure:true
       }).send(true);
    }else{
        res.send(false);
    }
     
    
    
    
});
router.route('/addstd').post((req,res)=>{
    const name=req.body.name;
    const Age=Number(req.body.Age);
    // const DOB=Date(req.body.DOB);
    const Instituename=req.body.Instituename;
    const standard=req.body.standard;
    const fathername=req.body.fathername;
    const mothername=req.body.mothername;
    const fatherphno=Number(req.body.fatherphno);
    const motherphno=Number(req.body.motherphno);
    const personalphno=Number(req.body.personalphno);
    const address=req.body.address;
    const mailid=req.body.mailid;
    const password=req.body.password;
    const attendedquiz="hellow";

    const newstudent=new Student({name,Age,Instituename,standard,fathername,mothername,fatherphno,motherphno,personalphno,address,mailid,password,attendedquiz});

    newstudent.save().then(()=>{res.json("student added to database")}).catch(err=>{res.status(400).json("Error:"+err)});

});
router.route('/mydetails').get(auth,async(req,res)=>{
    var studentinfos=await Student.findById(req.userid);
    res.json(studentinfos);
})
router.route('/loggedin').get((req,res)=>{
    try {
    
        const token=req.cookies.token;
        if (!token){ 
           res.json(false);
        }
        const verified= jwt.verify(token,process.env.SECRET_KEY)
        res.send(true);

      } catch (err) {
        // res.json(false);
      }
})


router.route('/logoutadmin').get((req,res)=>{
    
    
    res.cookie("token","",{
         httpOnly:true,
         expires:new Date(0)
    }).send("logged out");
});

router.route("/bruh").get(auth,async(req,res)=>{
    const userdetail=await Admin.findById(req.userid);
    res.json(userdetail.schoolorinst)
})

router.route('/createotp').get(auth,(req,res)=>{
    Admin.findById(req.userid).then(result=>{
       const randomnum= Math.floor(Math.random() * (900000-100000))+100000;
        result.password=randomnum.toString();
        
        result.save().then(()=>{res.json("please enter otp")}).catch(err=>{res.status(200).json("error "+err)});
    }).catch(err=>{res.status(200).json("error "+err)});
})

router.route('/verifyotp').post(auth,(req,res)=>{
    Admin.findById(req.userid).then(results=>{
        if(results.password==req.body.password){
            res.json("correct otp");   
        }
    }).catch(err=>{res.status(200).json("error "+err)});
})

router.route('/newpassword').post(auth,(req,res)=>{
    Admin.findById(req.userid).then(results=>{

        var verifypaswd=req.body.password;
        if(verifypaswd.length > 4 && ( verifypaswd.match(/!/g) || verifypaswd.match(/@/g) || verifypaswd.match(/#/g) || verifypaswd.match(/$/g) || verifypaswd.match(/%/g) || verifypaswd.match(/^/g) || verifypaswd.match(/&/g) )){
            results.password=verifypaswd;
            
            results.save().then(()=>{res.json("New Password Updated")}).catch(err=>{res.status(200).json("error "+err)});
        }
    }).catch(err=>{res.status(200).json("error "+err)});
})

router.route('/deleteadmin').get(auth ,async(req,res)=>{
    const userids=req.userid;

    const admindelete=await Admin.deleteOne({_id:userids}).then(result=>{res.json("deleted")}).catch(err=>{console.log("error "+err);});
    
    

});

//access schoolorinst

router.route('/schoolorinstinfo').get(auth,async(req,res)=>{
    const userinfo=await Admin.findById(req.userid);
    const schoolorinstinfo=await InstorSchool.find({schoolinstmailid:userinfo.schoolinstmailid});
    const finalresult=schoolorinstinfo[0];
    res.json(finalresult);
})



// access student db
// check all student
// check specific
// add student in db

router.route('/').get((req,res)=>{
    Student.find().then(teacher=>res.json(teacher)).catch(err=>res.status(400).json("Error:"+err));

});
router.route('/:id').get((req,res)=>{
    Student.find({_id:req.params.id}).then(teacher=>{console.log(teacher.name);res.json(teacher)}).catch(err=>res.status(400).json("Error:"+err));

});

router.route('/updatestudentbystd').post(auth,async(req,res)=>{

    const standard=req.body.standard;
    const infos= await Admin.findById(req.userid);

    const schlorinst=infos.schoolorinstname;


    await Student.find({ $and: [ {stdinschoolorinst:standard}, { schoolorinstname:schlorinst} ] }).then((studentsg)=>{console.log(studentsg);res.json(studentsg)}).catch(err=>{console.log(err);});
});
router.route('/updateteacherbystd').post(auth,async(req,res)=>{

    const standard=req.body.standard;
    const infos= await Admin.findById(req.userid);

    const schlorinst=infos.schoolorinstname;

   await Teacher.find({ $and: [ {stdinschoolorinst:standard}, { schoolorinstname:schlorinst} ] }).then((studentsg)=>{console.log(studentsg);res.json(studentsg)}).catch(err=>{console.log(err);});
});
router.route('/updatestudentf').post(async(req,res)=>{
    const idss=req.body.ids;
    await Student.find({_id:idss}).then((outputs)=>{res.json(outputs)}).catch(err=>{console.log(err)});
})
router.route('/updateteacherf').post(async(req,res)=>{
    const idss=req.body.ids;
    await Teacher.find({_id:idss}).then((outputs)=>{res.json(outputs)}).catch(err=>{console.log(err)});
})
router.route('/updatequizf').post(async(req,res)=>{
    const idss=req.body.ids;
    await MainQuiz.find({_id:idss}).then((outputs)=>{res.json(outputs)}).catch(err=>{console.log(err)});
})
router.route('/updatestudentbyname').post(auth,async(req,res)=>{

    const username=req.body.username;
    const infos= await Admin.findById(req.userid);

    const schlorinst=infos.schoolorinstname;
 

//    await Student.find({username:{$regex:'.*'+username+'.*'}}).then((studentsg)=>{res.json(studentsg)}).catch(err=>{console.log(err);});
    

   await Student.find({ $and: [ {username:{$regex:'.*'+username+'.*'}}, { schoolorinstname:schlorinst} ] }).then((studentsg)=>{res.json(studentsg)}).catch(err=>{console.log(err);});
});

//quiz

router.route('/quiznamefinder').post(auth,async(req,res)=>{

    const name=req.body.name;
    const infos= await Admin.findById(req.userid);

    const schlorinst=infos.schoolorinstname;
    

   await MainQuiz.find({ $and: [ {name:{$regex:'.*'+name+'.*'}}, { institutenme:schlorinst} ] }).then((studentsg)=>{res.json(studentsg)}).catch(err=>{console.log(err);});
});

router.route('/updateteacherbyname').post(auth,async(req,res)=>{

    const username=req.body.username;
    const infos= await Admin.findById(req.userid);

    const schlorinst=infos.schoolorinstname;
    

   await Teacher.find({ $and: [ {username:{$regex:'.*'+username+'.*'}}, { schoolorinstname:schlorinst} ] }).then((studentsg)=>{res.json(studentsg)}).catch(err=>{console.log(err);});
});

router.route('/finalupdatestudent').post(async(req,res)=>{
    const ids=req.body.usersid;

    await Student.find({_id:ids}).then((ops)=>{console.log("gotcha "+ops)}).catch(err=>{console.log(err)});

    const name=req.body.itemnewusername;
    const age=req.body.itemnewage;
    const std=req.body.itemnewstd;
    const fathername=req.body.itemnewfathername;
    const mothername=req.body.itemnewmothername;
    const fphno=req.body.itemnewfatherphno;
    const mphno=req.body.itemnewmotherphno;
    const address=req.body.itemnewaddress;
    const mailid=req.body.itemnewmailid;
    const phno=req.body.itemnewphno;

    await Student.updateOne({_id:ids},{$set:{username:name,age:age,stdinschoolorinst:std,fathername:fathername,mothername:mothername,fatherphno:fphno,motherphno:mphno,address:address,mailid:mailid,phno:phno}}).then(()=>{res.json("updated the details")}).catch(err=>{res.status(400).json("error "+ err)});
})

router.route('/finalupdateteacher').post(async(req,res)=>{
    const ids=req.body.usersid;

    await Teacher.find({_id:ids}).then((ops)=>{console.log("gotcha "+ops)}).catch(err=>{console.log(err)});

    const name=req.body.itemnewusername;
    const age=req.body.itemnewage;
    const isntname=req.body.itemnewschoolinstname;
    const position=req.body.itemnewaposition;
    const qualification=req.body.itemnewqualification;
    const address=req.body.itemnewaddress;
    const mailid=req.body.itemnewmailid;
    const phno=req.body.itemnewphno;

    await Teacher.updateOne({_id:ids},{$set:{username:name,age:age,schoolorinstname:isntname,positionname:position,qualification:qualification,address:address,mailid:mailid,phno:phno}}).then(()=>{res.json("updated the details")}).catch(err=>{res.status(400).json("error "+ err)});
})

router.route('/finaldeletestudent').post(async(req,res)=>{
    const ids=req.body.usersid;

    await Student.deleteOne({_id:ids}).then(()=>{res.json("deleted")}).catch(err=>{res.status(400).json(err)});

    

})
router.route('/finaldeletequizf').post(async(req,res)=>{
    const ids=req.body.idf;

    await MainQuiz.deleteOne({_id:ids}).then(()=>{res.json("deleted")}).catch(err=>{res.status(400).json(err)});

    

})
router.route('/finaldeleteteacher').post(async(req,res)=>{
    const ids=req.body.usersid;

    await Teacher.deleteOne({_id:ids}).then(()=>{res.json("deleted")}).catch(err=>{res.status(400).json(err)});

    

})
router.route('/editstudent/:id').post((req,res)=>{
    Student.findById(req.params.id).then(results=>{
                
        results.name=req.body.name;
        results.Age=req.body.Age;
        results.standard=req.body.standard;
        results.fathername=req.body.fathername;
        results.mothername=req.body.mothername;
        results.fatherphno=req.body.fatherphno;
        results.motherphno=req.body.motherphno;
        results.personalphno=req.body.personalphno;
        results.address=req.body.address;
        results.mailid=req.body.mailid;

        results.save().then(()=>{res.json('Updated')}).catch(err=>{res.status(200).json("error "+err)});
        
    }).catch(err=>{res.status(200).json("error "+err);});

});

router.route('/deletestudent').get(async(req,res)=>{
    const mailid=req.body.mailid;
    const password=req.body.password;
    await Student.deleteOne({mailid:mailid,password:password}).then(()=>{res.json("deleted")}).catch(err=>{console.log("error :"+err)});
});


 // teacher access in db
 // add teacher
 // check teacher
 // remove teacher
 // edit teacher details


 
router.route('/').get((req,res)=>{
    Teacher.find().then(teacher=>res.json(teacher)).catch(err=>res.status(400).json("Error:"+err));

});

router.route('/add').post((req,res)=>{
    const name=req.body.name;
    const Age=Number(req.body.Age);
    // const DOB=Date(req.body.DOB);
    const Qualification=req.body.Qualification;
    const Instituename=req.body.Instituename;
    const teaching=req.body.teaching;
    const mailid=req.body.mailid;
    const phno=Number(req.body.phno);
    const address=req.body.address;
    const password=req.body.password;
    

    const newteacher=new Teacher({name,Age,Qualification,Instituename,teaching,mailid,phno,address,password});
    newteacher.save().then(()=>{res.json("teacher added to database")}).catch(err=>{res.status(400).json("Error:"+err)});

});


router.route('/editteacher/:id').post((req,res)=>{
    Teacher.findById(req.params.id).then(results=>{
                
        results.name=req.body.name;
        results.Age=req.body.Age;
        results.Qualification=req.body.Qualification;
        results.Instituename=req.body.Instituename;
        results.teaching=req.body.teaching;
        results.phno=req.body.phno;
        results.address=req.body.address;
        results.mailid=req.body.mailid;

        results.save().then(()=>{res.json('Updated teacher')}).catch(err=>{res.status(200).json("error "+err)});
        
    }).catch(err=>{res.status(200).json("error "+err);});

});

router.route('/deleteteacher').get(async(req,res)=>{
    const mailid =req.body.mailid;
    const password=req.body.password;

    const teacherdelete=await Teacher.deleteOne({mailid:mailid,password:password}).then(result=>{res.json("deleted")}).catch(err=>{console.log("error "+err);});
});



//quiz


router.route('/quizadd').post(auth,async(req,res)=>{
    const name=req.body.name;
    const subject=req.body.subject;
    const batch=req.body.batch;
    // const filter=req.body.filter;
    const date=new Date(req.body.date+"T"+req.body.time+":00.000Z");
    const timelimit=req.body.timelimit;
    const noofquestion=req.body.noofquestion;
    const marks=req.body.marks;
    const contents=req.body.contents;
    const finishtext=false;
    const institutenme=await findById(req.userid);

    parseInt(noofquestion);
   

    console.log(date);
    var part=[];
    

    for(var k=0;k<4;k++){
        
        part[k]={
            "Q1":"how are hyou?",
            // "Opt1":"jacob",
            // "Opt2":"ibbu",
            // "Opt3":"james",
            // "Opt4":"none",
            "Ans":"none"
        }
    }
    
    var finals=[];
    for(var m=0;m<4;m++){
        finals.push(part[m]);
        
    }
    
    
    

    require('mongoose').model("mainquiz").schema.add({contents:[{Q1:String,Opt1:String,Opt2:String,Opt3:String,Opt4:String,Ans:String}]});
    
    // await MainQuiz.updateMany({name:"ibbu"},{$set:{"contents":finals}},{multi:true}).then(()=>{res.json("done work")}).catch(err=>{console.log("error")});
    
    // const contents=finals;

    const mainquizcreation=await new MainQuiz({name,subject,batch,timelimit,date,noofquestion,marks,contents,finishtext,institutenme});


    mainquizcreation.save().then((ress)=>{ress.json();}).catch(err=>{res.json(err)});

 
})

router.route('/finalupdatef').post(async(req,res)=>{
    const ids=req.body.fids;
    const name=req.body.fname;
    const subject=req.body.fsubject;
    const batch=req.body.fbatch;
    const date=req.body.fdate;
    const timelimit=req.body.ftimelimit;
    const noofquestion=req.body.fnoofq;
    const marks=req.body.fmarks;
    const contents=req.body.fcontents; 
    

    await MainQuiz.updateOne({_id:ids},{$set:{name:name,subject:subject,batch:batch,date:date,timelimit:timelimit,noofquestion:noofquestion,marks:marks,contents:contents}}).then(res.json("quiz updated")).catch(err=>{res.status(400).json(err)});

    

})
router.route('/addingdepartments').post(auth,async(req,res)=>{
    const departments=req.body.department;
    const finalyears=req.body.finalyear;

    const userdetail=await Admin.findById(req.userid);
    const schoolinstmailid=userdetail.schoolinstmailid;

    var schoolorinstrecord=null;
    schoolorinstrecord=await InstorSchool.find({schoolinstmailid:schoolinstmailid});

    // if(schoolorinstrecord===[]){ 



    const schoolorinstname=userdetail.schoolorinstname;
    const schoolorinst=userdetail.schoolorinst;
    const schoolinstphno=userdetail.schoolinstphno;
    const schoolorinstcountry=userdetail.schoolorinstcountry;
    const schoolorinststate=userdetail.schoolorinststate;
    const schoolorinstdistrict=userdetail.schoolorinstdistrict;
    const schoolorinstaddress=userdetail.schoolorinstaddress;
    const department=departments;
    const totalyear=finalyears;

    const uploader=new InstorSchool({schoolorinstname,schoolorinst,schoolinstmailid,schoolinstphno,schoolorinstcountry,schoolorinststate,schoolorinstdistrict,schoolorinstaddress,department,totalyear})
   
    uploader.save().then(res.json("Department Added")).catch(err=>{console.log(err)});
    // }else{
    //     // // if(schoolorinstrecord==[]){ 
    //     //     var tems=null;
    //     //     if(tems){ 
    //     //     console.log(schoolorinstrecord);
    //     //     console.log(tems);
    //     //     }
        
    //     res.json(userdetail.schoolorinstname+" have departments already!.please select update if you want to change any");
    // }

})
router.route('/updatedepartment').post(auth,async(req,res)=>{

    const departments=req.body.department;
    const finalyears=req.body.finalyear;

    const userdetail=await Admin.findById(req.userid);
    const schoolinstmailid=userdetail.schoolinstmailid;

    await InstorSchool.updateOne({schoolinstmailid:schoolinstmailid},{$push:{"department":departments,"totalyear":finalyears}}).then(()=>{res.json("updated");}).catch(err=>{res.json(err)});
    

})
router.route('/deletedepartment').post(auth,async(req,res)=>{

    const departments=req.body.department;


    const userdetail=await Admin.findById(req.userid);
    const schoolinstmailid=userdetail.schoolinstmailid;
    const finder=await InstorSchool.find({schoolinstmailid:schoolinstmailid});
    var totalyears=null;

    var lengths=finder[0].department.length;
    for(var i=0;i<lengths;i++){
        if(departments===finder[0].department[i]){
            totalyears=finder[0].totalyear[i];

        }
    }
    await InstorSchool.updateOne({schoolinstmailid:schoolinstmailid},{$pull:{"department":departments,"totalyear":totalyears}}).then(()=>{res.json("deleted");}).catch(err=>{res.json(err)});
    

})


module.exports=router;