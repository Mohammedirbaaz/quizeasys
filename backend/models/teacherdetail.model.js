const mongoose=require('mongoose');

const schema2=mongoose.Schema;

const teacherdetailschema=new schema2({
    username:{type:String},
    schoolorinst:{type:String},
    schoolorinstname:{type:String},
    positionname:{type:String},
    qualification:{type:String},
    age:{type:Number},
    address:{type:String},
    password:{type:String},
    mailid:{type:String},
    phno:{type:Number},
},{ 
    timestamps:true,
});

const teacherdetails=mongoose.model("teacherdetail",teacherdetailschema);

module.exports=teacherdetails;
