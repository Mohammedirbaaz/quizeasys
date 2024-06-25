const mongoose=require('mongoose');

const schema=mongoose.Schema;

const admindetailschema=new schema({
    username:{type:String},
    schoolorinst:{type:String},
    schoolorinstname:{type:String,required:true},
    positionname:{type:String,required:true},
    schoolinstmailid:{type:String,required:true},
    schoolinstphno:{type:Number,required:true,maxlength:10},
    schoolorinstcountry:{type:String,required:true},
    schoolorinststate:{type:String,required:true},
    schoolorinstdistrict:{type:String,required:true},
    schoolorinstaddress:{type:String,required:true},
    password:{type:String,required:true},
    mailid:{type:String,required:true},
    phno:{type:Number,required:true,maxlength:10},
},{ 
    timestamps:true,
});
const admindetails1=mongoose.model('admindetail',admindetailschema);
module.exports=admindetails1;