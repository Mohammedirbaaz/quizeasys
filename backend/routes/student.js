const router=require('express').Router();
let Student=require('../models/studentdetail.model');
let MainQuiz=require('../models/mainquiz.model');
let Teacher=require('../models/teacherdetail.model');


const jwt=require('jsonwebtoken');
const auth=require('../middleware/auth');
const { find, findById } = require('../models/studentdetail.model');
const studentdetail = require('../models/studentdetail.model');
require('dotenv').config();


router.route('/mydetails').get(auth,async(req,res)=>{
    var infoss=await Student.findById(req.userid);
    res.json(infoss);


});

router.route('/updateteacherbyname').post(auth,async(req,res)=>{

    const username=req.body.username;
    const infos= await Student.findById(req.userid);

    const schlorinst=infos.schoolorinstname;
    // res.json(schlorinst);
//    await Teacher.find({ $and: [ {username:username}, { schoolorinstname:schlorinst} ] }).then((studentsg)=>{res.json(studentsg)}).catch(err=>{console.log(err);});
    

   await Teacher.find({ $and: [ {username:{$regex:'.*'+username+'.*'}}, { schoolorinstname:schlorinst} ] }).then((studentsg)=>{res.json(studentsg)}).catch(err=>{console.log(err);});
});
router.route('/updateteacherbystd').post(auth,async(req,res)=>{

    const standard=req.body.standard;
    const infos= await Student.findById(req.userid);

    const schlorinst=infos.schoolorinstname;

   await Teacher.find({ $and: [ {stdinschoolorinst:standard}, { schoolorinstname:schlorinst} ] }).then((studentsg)=>{console.log(studentsg);res.json(studentsg)}).catch(err=>{console.log(err);});
});

router.route('/studentquize').get(auth,async(req,res)=>{

   
    var studentinfo= await Student.findById(req.userid);
    var batchfinder=studentinfo.stdinschoolorinst;

    const quizfinder=await MainQuiz.find({batch:batchfinder});
    res.json(quizfinder);

});
router.route('/marksforstudent').get(auth,async(req,res)=>{
    const userids=await Student.findById(req.userid);
    const lengthsofquize=userids.attendedquiz.length;


    var arrs=[];
    const totaldetails=[]
    for(var i=0;i<lengthsofquize;i++){
        arrs[i]=userids.attendedquiz[i];
    }

    for(var i=0;i<lengthsofquize;i++){
        totaldetails[i]=await MainQuiz.findById(arrs[i]);
        
        
    }
    console.log(totaldetails);

    const objs={
        q1:totaldetails,
        q2:userids
    }
    res.json(objs);
});


router.route('/attendedquiz').post(auth,async(req,res)=>{
    const quizid=req.body.quizreq;
    const studentdetails=await Student.findById(req.userid);
    const finalmarks=req.body.earnedmarks;

    Student.updateOne({_id:studentdetails},{$push:{"attendedquiz":quizid,"earnedmarks":finalmarks}}).then(()=>{res.json("done")}).catch(err=>{res.json(err)});
});
router.route('/quizattendagain').post(auth,async(req,res)=>{
    const quizids2=req.body._id;
    const studentdetails=await Student.findById(req.userid);
    
    var finalans=false;

    var lengths=studentdetails.attendedquiz.length;
    
    for(var i=0;i<lengths;i++){
        if(studentdetails.attendedquiz[i]===quizids2){
            finalans=true;
            break;
        }else{
            finalans=false;
        }
    }
    res.json(finalans);
});

router.route('/studentquize/:id').get(auth,async(req,res)=>{
    var mainquiz=await MainQuiz.find({_id:req.params.id});
    res.json(mainquiz);
});

router.route('/lolstudent').get((req,res)=>{

try {

    const token=req.cookies.token;
    if (!token){ 
       res.json(false);
    }
    const verified= jwt.verify(token,process.env.SECRET_KEY)
    res.send(true);

  } catch (err) {
    // res.json(false);
}});

router.route('/logoutstudent').get((req,res)=>{
    
    res.cookie("token","",{
        httpOnly:true,
        expires:new Date(0)
    }).send("logged out");
})


router.route('/').get((req,res)=>{
    Student.find().then(teacher=>res.json(teacher)).catch(err=>res.status(400).json("Error:"+err));

});
router.route('/:id').get((req,res)=>{
    Student.find({_id:req.params.id}).then(teacher=>res.json(teacher)).catch(err=>res.status(400).json("Error:"+err));

});
router.route('/add').post(async(req,res)=>{
    const username=req.body.username;
    const schoolorinst=req.body.schoolorinst;
    const schoolorinstname=req.body.schoolorinstname;
    const stdinschoolorinst=req.body.stdinschoolorinst;

    const age=Number(req.body.age);
    const fathername=req.body.fathername;
    const mothername=req.body.mothername;
    const fatherphno=Number(req.body.fatherphno);
    const motherphno=Number(req.body.motherphno);

    const address=req.body.address;
    const password=req.body.password;

    const mailid=req.body.mailid;
    const phno=Number(req.body.phno);
   

    var isexiststudent;

    isexiststudent  =  await Student.findOne({mailid:mailid});
    
    if(isexiststudent!=null){
        res.json(" student already exist");
    }else{


     const newstudent=new Student({username,schoolorinst,schoolorinstname,stdinschoolorinst,age,fathername,mothername,fatherphno,motherphno,address,password,mailid,phno});

     newstudent.save().then(()=>{res.json("student added to database");
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
        text:'Hey '+username+'!.Thank you for registering here.You have Options for Attend Quizes and View your Marks '
    };

    transporter.sendMail(mailOptions,(err,info)=>{if(err){console.log(err)}else console.log(info)})
    }
     ).catch(err=>{res.status(400).json("Error:"+err)});
     }
});


router.route('/loginstudent').post(async (req,res)=>{
    const mailid=req.body.mailid;
    const password=req.body.password;

    console.log("lololllll "+mailid +" "+password);
    const user=await Student.findOne({mailid:mailid,password:password});
   

    if(user!==null){
        console.log("lololllll "+mailid +" "+password+" "+user);

        const userids=user._id;
        const tokenf2=jwt.sign({id:userids},process.env.SECRET_KEY);
        res.cookie("token",tokenf2,{
            httpOnly:true,
            sameSite:'none',
            secure:true
        }).send(true);  
    }else{
        res.send(false);
    }

});
router.route('/loggedinstudent').get((req,res)=>{
    console.log("from backend  ");

    try {
    
        const token=req.cookies.token;
        if (!token){ 
           res.json(false);
        }
        const verified= jwt.verify(token,process.env.SECRET_KEY)
        res.send(true);

      } catch (err) {
        res.json(false);
      }
});



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


router.route('/createotp/:id').get((req,res)=>{
    Student.findById(req.params.id).then(result=>{
       const randomnum= Math.floor(Math.random() * (900000-100000))+100000;
        result.password=randomnum.toString();
        
        result.save().then(()=>{res.json("please enter otp")}).catch(err=>{res.status(200).json("error "+err)});
    }).catch(err=>{res.status(200).json("error "+err)});
})

router.route('/verifyotp/:id').post((req,res)=>{
    Student.findById(req.params.id).then(results=>{
        if(results.password==req.body.password){
            res.json("correct otp");   
        }
    }).catch(err=>{res.status(200).json("error "+err)});
})

router.route('/newpassword/:id').post((req,res)=>{
    Student.findById(req.params.id).then(results=>{

        var verifypaswd=req.body.password;
        if(verifypaswd.length > 4 && ( verifypaswd.match(/!/g) || verifypaswd.match(/@/g) || verifypaswd.match(/#/g) || verifypaswd.match(/$/g) || verifypaswd.match(/%/g) || verifypaswd.match(/^/g) || verifypaswd.match(/&/g) )){
            results.password=verifypaswd;
            
            results.save().then(()=>{res.json("New Password Updated")}).catch(err=>{res.status(200).json("error "+err)});
        }
    }).catch(err=>{res.status(200).json("error "+err)});
})
router.route("/deletestudent").get(async(req,res)=>{
    const mailid=req.body.mailid;
    const password=req.body.password;
    await Student.deleteOne({mailid:mailid,password:password}).then(()=>{res.json("deleted")}).catch(err=>{console.log("error :"+err)});
});






module.exports=router;