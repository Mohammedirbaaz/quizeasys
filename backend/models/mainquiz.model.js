const mongoose=require('mongoose');

const schemaquiz=mongoose.Schema;

const mainquizschema=new schemaquiz({
    name:{type:String},
    subject:{type:String},
    batch:{type:String,required:true},
    // filter:{type:String,required:true},
     date:{type:Date,required:true},
    // time:{type:Date,required:true},
    timelimit:{type:String,required:true},
    noofquestion:{type:String,required:true},
    content:{type:String},
    marks:{type:String,required:true},
    finishtext:{type:Boolean},
    institutenme:{type:String}

    
},{ 
    timestamps:true,
    strict:false
});

const mainquizdetails1=mongoose.model('mainquiz',mainquizschema);

module.exports=mainquizdetails1;