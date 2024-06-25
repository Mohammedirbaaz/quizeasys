const router=require('express').Router();
let Teacher=require('../models/teacherdetail.model');
let Student=require('../models/studentdetail.model');

let MainQuiz=require('../models/mainquiz.model');
const jwt=require('jsonwebtoken');
const auth=require('../middleware/auth');
require('dotenv').config();


//quiz
router.route('/quiznamefinder').post(auth,async(req,res)=>{

    const name=req.body.name;
    const infos= await Teacher.findById(req.userid);

    const schlorinst=infos.schoolorinstname;
    

   await MainQuiz.find({ $and: [ {name:{$regex:'.*'+name+'.*'}}, { institutenme:schlorinst} ] }).then((studentsg)=>{res.json(studentsg)}).catch(err=>{console.log(err);});
});
//student
router.route('/updatestudentbystd').post(auth,async(req,res)=>{

    const standard=req.body.standard;
    const infos= await Teacher.findById(req.userid);

    const schlorinst=infos.schoolorinstname;


    await Student.find({ $and: [ {stdinschoolorinst:standard}, { schoolorinstname:schlorinst} ] }).then((studentsg)=>{console.log(studentsg);res.json(studentsg)}).catch(err=>{console.log(err);});
});

router.route('/updateteacherbystd').post(auth,async(req,res)=>{

    const standard=req.body.standard;
    const infos= await Teacher.findById(req.userid);

    const schlorinst=infos.schoolorinstname;

   await Teacher.find({ $and: [ {stdinschoolorinst:standard}, { schoolorinstname:schlorinst} ] }).then((studentsg)=>{console.log(studentsg);res.json(studentsg)}).catch(err=>{console.log(err);});
});

router.route('/updateteacherbyname').post(auth,async(req,res)=>{

    const username=req.body.username;
    const infos= await Teacher.findById(req.userid);

    const schlorinst=infos.schoolorinstname;
    

   await Teacher.find({ $and: [ {username:{$regex:'.*'+username+'.*'}}, { schoolorinstname:schlorinst} ] }).then((studentsg)=>{res.json(studentsg)}).catch(err=>{console.log(err);});
});

router.route('/updatestudentbyname').post(auth,async(req,res)=>{

    const username=req.body.username;
    const infos= await Teacher.findById(req.userid);

    const schlorinst=infos.schoolorinstname;
    // res.json(schlorinst);
 

//    await Student.find({username:{$regex:'.*'+username+'.*'}}).then((studentsg)=>{res.json(studentsg)}).catch(err=>{console.log(err);});
    

    await Student.find({ $and: [ {username:{$regex:'.*'+username+'.*'}}, { schoolorinstname:schlorinst} ] }).then((studentsg)=>{res.json(studentsg)}).catch(err=>{console.log(err);});
});

router.route('/').get((req,res)=>{
    Teacher.find().then(teacher=>res.json(teacher)).catch(err=>res.status(400).json("Error:"+err));

});
router.route("/mydetails").get(auth,async(req,res)=>{
    var studentinfos=await Teacher.findById(req.userid);
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
router.route('/add').post(async(req,res)=>{
    const username=req.body.username;
    const schoolorinst=req.body.schoolorinst;
    const schoolorinstname=req.body.schoolorinstname;
    const positionname=req.body.positionname;
    const qualification=req.body.qualification;
    const age=Number(req.body.age);
    const address=req.body.address;
    const password=req.body.password;
    const mailid=req.body.mailid;
    const phno=Number(req.body.phno);

    var isexistteacher;
    isexistteacher=await Teacher.findOne({mailid:mailid});
    
    if(isexistteacher!=null){
        res.json("Teacher already exist");
    }else{ 

    const newteacher=new Teacher({username,schoolorinst,schoolorinstname,positionname,qualification,age,address,password,mailid,phno});
    newteacher.save().then(()=>{res.json("teacher added to database");
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
        text:'Hey '+username+'!.Thank you for registering here.You have Options for creating studentand Creating Quizes for your '+schoolorinst
    };

    transporter.sendMail(mailOptions,(err,info)=>{if(err){console.log(err)}else console.log(info)})
    }).catch(err=>{res.status(400).json("Error:"+err)});
    }
});

router.route('/loginteacher').post(async(req,res)=>{
    const mailid=req.body.mailid;
    const password=req.body.password;
    
    const user=await Teacher.findOne({mailid:mailid,password:password});
    if(user!==null){
        const userids=user._id;
        const tokenf2=jwt.sign({id:userids},process.env.SECRET_KEY);
        res.cookie("token",tokenf2,{
            httpOnly:true,
            sameSite:'none',
            secure:true
        }).send(true);  
    }else{
        // res.send(false);
    }
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

router.route('/createotp/:id').get((req,res)=>{
    Teacher.findById(req.params.id).then(result=>{
       const randomnum= Math.floor(Math.random() * (900000-100000))+100000;
        result.password=randomnum.toString();
        
        result.save().then(()=>{res.json("please enter otp")}).catch(err=>{res.status(200).json("error "+err)});
    }).catch(err=>{res.status(200).json("error "+err)});
})

router.route('/verifyotp/:id').post((req,res)=>{
    Teacher.findById(req.params.id).then(results=>{
        if(results.password==req.body.password){
            res.json("correct otp");   
        }
    }).catch(err=>{res.status(200).json("error "+err)});
})

router.route('/newpassword/:id').post((req,res)=>{
    Teacher.findById(req.params.id).then(results=>{

        var verifypaswd=req.body.password;
        if(verifypaswd.length > 4 && ( verifypaswd.match(/!/g) || verifypaswd.match(/@/g) || verifypaswd.match(/#/g) || verifypaswd.match(/$/g) || verifypaswd.match(/%/g) || verifypaswd.match(/^/g) || verifypaswd.match(/&/g) )){
            results.password=verifypaswd;
            
            results.save().then(()=>{res.json("New Password Updated")}).catch(err=>{res.status(200).json("error "+err)});
        }
    }).catch(err=>{res.status(200).json("error "+err)});
})


router.route('/deleteteacher').get(async(req,res)=>{
    const mailid =req.body.mailid;
    const password=req.body.password;

    const teacherdelete=await Teacher.deleteOne({mailid:mailid,password:password}).then(result=>{res.json("deleted")}).catch(err=>{console.log("error "+err);});
});



module.exports=router;