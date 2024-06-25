const mongoose=require("mongoose");

// const schema=mongoose.Schema;

const instorschooldetailschema=new mongoose.Schema({

    schoolorinstname:{type:String,required:true},
    schoolorinst:{type:String},
    schoolinstmailid:{type:String,required:true},
    schoolinstphno:{type:Number,required:true,maxlength:10},
    schoolorinstcountry:{type:String,required:true},
    schoolorinststate:{type:String,required:true},
    schoolorinstdistrict:{type:String,required:true},
    schoolorinstaddress:{type:String,required:true},
    department:{type:Array},
    totalyear:{type:Array}

},{ 
    timestamps:true,
});

const instorschooldetail1=mongoose.model('instorschool',instorschooldetailschema);

module.exports=instorschooldetail1;
