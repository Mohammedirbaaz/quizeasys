const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const nodemailer=require('nodemailer');


    /* "heroku-postbuild": "npm run install-client && npm run dev",*/


require('dotenv').config();

const app=express();
const port=process.env.PORT || 5000;



app.use(cors({origin:"https://quizeasys.netlify.app",credentials:true}));
// 
app.use(express.json());
app.use(cookieParser());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});


const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true}).then(()=>{console.log("database established");}).catch(()=>{console.log("not connected")});

const adminRouter=require('./routes/admin');
const teacherRouter=require('./routes/teacher');
const studentRouter=require('./routes/student');

app.use('/admin',adminRouter);
app.use('/teacher',teacherRouter);
app.use('/student',studentRouter);

// if(process.env.ATLAS_URI === 'production'){
//     app.use(express.static('client'));
// }

app.get('/',(req,res)=>{
    res.send("this is demo");
})



// const accountsid=process.env.ACCOUNT_SID;
// const authtoken=process.env.authtoken;
// const client=require('twilio')(accountsid,authtoken);
// client.messages.create({
//     body:"hey there there!!!",
//     from :"+12676425735",
//     to : "+91 8110031918"
// })
// .then(message=>{console.log(message);}).catch(err=>{console.log(err)});





app.listen(port,()=>{console.log(`server is running on port:${port}`);});
