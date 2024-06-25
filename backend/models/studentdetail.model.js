const mongoose=require('mongoose');

const schema3=mongoose.Schema;

const studentdetailschema=new schema3({
    username:{type:String},
    schoolorinst:{type:String},
    schoolorinstname:{type:String},
    stdinschoolorinst:{type:String},
    age:{type:Number},
    fathername:{type:String},
    mothername:{type:String},
    fatherphno:{type:Number},
    motherphno:{type:Number},
    address:{type:String},
    password:{type:String},
    mailid:{type:String},
    phno:{type:Number},
    attendedquiz:{type:Array},
    earnedmarks:{type:Array}
},{ 
    timestamps:true,
});

const studentdetail=mongoose.model("studentdetail",studentdetailschema);

module.exports=studentdetail;


