import React,{Component} from 'react';
import Headertemplate from "./headertemplate";
import './style.css';
import axios from 'axios';
import {UserConsumer} from '../context/authContext';


var countfun=0;
var countupdate=0;
var iddd=0;
parseInt(iddd);

class homeadminquiz extends Component{
    
    constructor(){
           super();
           var niss=0;
           this.state={
               countmaster:0,
               name:'',
               subject:'',
               batch:'',
               date:'',
               time:'',
               timelimit:'',
               noofquestion:'',
               content:'',
               marks:'',
               category:'',
               searchtext:'',
               listdata:[{}],
               beforelist:[{}],
               arrofquestion:[{}],
               counternew1:0,
               countupdate:0
               
              
        }
        



    }



    onchangename=(e)=>{
        this.setState({
            name:e.target.value
        });
    }
    onchangesubject=(e)=>{
        this.setState({
            subject:e.target.value
        });
    }
    onchangebatch=(e)=>{
        this.setState({
            batch:e.target.value
        });
    }
    onchangedate=(e)=>{
        this.setState({
            date:e.target.value
        });
    }
    onchangetime=(e)=>{
        this.setState({
            time:e.target.value
        });
    }
    onchangetimelimit=(e)=>{
        this.setState({
            timelimit:e.target.value
        });
    }
    onchangenoofquestion=(e)=>{
        this.setState({
            noofquestion:e.target.value
        });
    }
    onchangemarks=(e)=>{
        this.setState({
            marks:e.target.value
        });
    }
    onchangequestion=(e)=>{
        this.setState({
            question:e.target.value
        });
    }
    onupgrade(){
        console.log("before :"+countfun);
        countfun++;
        console.log("after :"+countfun);

    }


    // update block

    onChangecategory=(e)=>{
        this.setState({
            category:e.target.value
        })
    }
    onChnageseartext=(e)=>{
        this.setState({
            searchtext:e.target.value
        })
    }
    
    
    render(){
        var orglnoss=0;
        var noss=0;
        const {countmaster}=this.state;
        

        {
            // var noof=document.getElementById("noqsid").value;

            var nossf=0;
            var resultf;

            var arr=[200];
            var arropt1=[200];
            var arropt2=[200];
            var arropt3=[200];
            var arropt4=[200];
            var arrcorrect=[200];
            var arrmarks=[200];


            this.noofquestion=()=>{
                
                var no=document.getElementById("noqsid").value;
                
                if(no > noss){
//random number
                    this.onupgrade();

                    var random=Math.floor(Math.random()* (999 - 1))+1;
                    var randomass="questionid"+random;
                    
                    var randopt1="option1"+random;
                    var randopt2="option2"+random;
                    var randopt3="option3"+random;
                    var randopt4="option4"+random;
                    var correctopt="correct"+random;
                    var marksids="marksid"+random;
                    var parent=document.getElementById("fourth");


//question text                
                    var inputs=document.createElement("input");
                    inputs.setAttribute("type","text");
                    inputs.setAttribute("id",randomass);
                    parent.appendChild(inputs);
                    var subinputs=document.getElementById(randomass);
                    subinputs.style.display="block";
                    subinputs.style.width="100%";
                    subinputs.style.height="50px";
                    subinputs.style.margin="4%";
                    var tem=noss;    
                    tem++;
                    this.state={
                            ["qstn"+countfun]:''
                        }
                    subinputs.addEventListener("change",(e)=>{this.setState({["qstn"+countfun]:e.target.value});console.log("current value qstn"+this.state.timelimit["qstn"+countfun]);});
                   
                    arr[noss]=randomass;
                   

                    noss++;
                    
                    console.log("increment to "+noss);


                    subinputs.placeholder="Question no:"+ countfun;

//marksforeach
                    var inputqsno=document.createElement("input");
                    inputqsno.setAttribute("type","number");
                    inputqsno.setAttribute("id",marksids);
                    inputqsno.setAttribute("value","Marks:");
                    // var texts=document.createTextNode("Marks : ");
                    // inputqsno.appendChild(texts);
                    inputqsno.style.float="right";
                    inputqsno.style.width="20%";
                    inputqsno.style.margin="1%";
                    this.state={
                        ["marksforeach"+countfun]:''
                    }
                    inputqsno.addEventListener("change",(e)=>{this.setState({["marksforeach"+countfun]:e.target.value});console.log(this.state.timelimit['marksforeach'+countfun]);});

                    arrmarks[nossf]=marksids;
//option types
                    var inputqsno2=document.createElement("select");
                    var optionstext=document.createElement("option");
                    var optionstext2=document.createElement("option");
                    var optionstext3=document.createElement("option");
                    var optionstext4=document.createElement("option");

                    var t = document.createTextNode("4 Option");
                    var t2 = document.createTextNode("No Option");
                    var t3 = document.createTextNode("Radio option");
                    var t4 = document.createTextNode("2 Option");

                    optionstext.appendChild(t);
                    optionstext2.appendChild(t2);
                    optionstext3.appendChild(t3);
                    optionstext4.appendChild(t4);
                


                    inputqsno2.appendChild(optionstext);
                    inputqsno2.appendChild(optionstext2);
                    inputqsno2.appendChild(optionstext3);
                    inputqsno2.appendChild(optionstext4);

                

                
                    inputqsno2.style.float="right";
                    inputqsno2.style.width="20%";
                    inputqsno2.style.margin="1%";
                
                
//option1 text
                    var input2=document.createElement("input");
                    input2.setAttribute("id",randopt1);
                    input2.setAttribute("type","text");
                    input2.style.display="block";
                    input2.style.width="50%";
                    input2.style.margin="4%";
                    input2.placeholder="Option 1";
                    input2.style.height="30px";
                    this.state={
                        ["option1"+countfun]:''
                    }
                    input2.addEventListener("change",(e)=>{this.setState({["option1"+countfun]:e.target.value});console.log(this.state.timelimit["option1"+countfun]);});

                    arropt1[nossf]=randopt1;

//option2 text


                    var input3=document.createElement("input");
                    input3.setAttribute("type","text");
                    input3.setAttribute("id",randopt2);
                    arropt2[nossf]=randopt2;
                
                    input3.style.display="block";
                    input3.style.width="50%";
                    input3.style.margin="4%";
                    input3.placeholder="Option 2";
                    input3.style.height="30px";
                    this.state={
                        ["option2"+countfun]:''
                    }
                    input3.addEventListener("change",(e)=>{this.setState({["option2"+countfun]:e.target.value});console.log(this.state.timelimit["option2"+countfun]);});



//option3 text

                    var input4=document.createElement("input");
                    input4.setAttribute("type","text");
                    input4.setAttribute("id",randopt3);
                    arropt3[nossf]=randopt3;
                
                    input4.style.display="block";
                    input4.style.width="50%";
                    input4.style.margin="4%";
                    input4.placeholder="Option 3";
                    input4.style.height="30px";
                    this.state={
                        ["option3"+countfun]:''
                    }
                    input4.addEventListener("change",(e)=>{this.setState({["option3"+countfun]:e.target.value});console.log(this.state.timelimit["option3"+countfun]);});


//option4 text

                    var input5=document.createElement("input");
                    input5.setAttribute("type","text");
                    input5.setAttribute("id",randopt4);
                    arropt4[nossf]=randopt4;
                    input5.style.display="block";
                    input5.style.width="50%";
                    input5.style.height="30px";
                    input5.style.margin="4%";
                    input5.placeholder="Option 4";
                    this.state={
                        ["option4"+countfun]:''
                    }
                    input5.addEventListener("change",(e)=>{this.setState({["option4"+countfun]:e.target.value});console.log(this.state.timelimit["option4"+countfun]);});


//correct ans text
                    var correctans=document.createElement("input");
                    correctans.setAttribute("type","text");
                    correctans.setAttribute("id",correctopt);
                    correctans.style.display="block";
                    correctans.style.width="50%";
                    correctans.style.height="30px";
                    correctans.style.margin="4%";
                    correctans.placeholder="Correct answer";
                    correctans.style.backgroundColor="bisque";
                    arrcorrect[nossf]=correctopt;
                    this.state={
                        ["ans"+countfun]:''
                    }
                    correctans.addEventListener("change",(e)=>{this.setState({["ans"+countfun]:e.target.value});console.log(this.state.timelimit["ans"+countfun]);});


                    parent.appendChild(inputqsno);
                    parent.appendChild(inputqsno2);
                    parent.appendChild(input2);
                    parent.appendChild(input3);
                    parent.appendChild(input4);
                    parent.appendChild(input5);
                    parent.appendChild(correctans);
                    nossf++;
                    orglnoss=noss;

                }                     
            }

            this.validornot=()=>{

                 for(var j=0;j<noss;j++){

                    var totalmarks=document.getElementById("totalmarksid").value;
                    resultf=totalmarks/noss; 
                    
                    var inputssss=document.getElementById(arrmarks[j]);
                    console.log(arrmarks[0]);
                    inputssss.setAttribute("value",resultf);

                    var temps=document.getElementById(arrcorrect[j]).value;
                    var tempsitem=document.getElementById(arrcorrect[j]);

                    var tempsopts1=document.getElementById(arropt1[j]).value;
                    var tempsopts1item=document.getElementById(arropt1[j]);

                    var tempsopts2=document.getElementById(arropt2[j]).value;
                    var tempsopts2item=document.getElementById(arropt2[j]);

                    var tempsopts3=document.getElementById(arropt3[j]).value;
                    var tempsopts3item=document.getElementById(arropt3[j]);

                    var tempsopts4=document.getElementById(arropt4[j]).value;
                    var tempsopts4item=document.getElementById(arropt4[j]);



                    
                        if(temps==tempsopts1  && temps!=tempsopts2 && temps!=tempsopts3 && temps!=tempsopts4){
                            tempsopts1item.style.backgroundColor="green";
                            tempsopts2item.style.backgroundColor="white";
                            tempsopts3item.style.backgroundColor="white";
                            tempsopts4item.style.backgroundColor="white";
                        }
                        else if(temps==tempsopts2  && temps!=tempsopts1 && temps!=tempsopts3 && temps!=tempsopts4){
                            tempsopts1item.style.backgroundColor="white";
                            tempsopts2item.style.backgroundColor="green";
                            tempsopts3item.style.backgroundColor="white";
                            tempsopts4item.style.backgroundColor="white";
                        }
                        else if(temps==tempsopts3  && temps!=tempsopts2 && temps!=tempsopts2 && temps!=tempsopts4){
                            tempsopts1item.style.backgroundColor="white";
                            tempsopts2item.style.backgroundColor="white";
                            tempsopts3item.style.backgroundColor="green";
                            tempsopts4item.style.backgroundColor="white";
                        }
                        else if(temps==tempsopts4  && temps!=tempsopts2 && temps!=tempsopts3 && temps!=tempsopts1){
                            tempsopts1item.style.backgroundColor="white";
                            tempsopts2item.style.backgroundColor="white";
                            tempsopts3item.style.backgroundColor="white";
                            tempsopts4item.style.backgroundColor="green";
                        }else{
                            alert(`Question no ${j+1}'s options does not matches`);
                            if(j==0 || j==1 || j==2 || j==3){
                                tempsopts1item.style.backgroundColor="white";
                                tempsopts2item.style.backgroundColor="white";
                                tempsopts3item.style.backgroundColor="white";
                                tempsopts4item.style.backgroundColor="white";
                            }
                        }
                }
                orglnoss=noss;
            }

            ///////////////////////submit/////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////
            

            this.onsubmits=(e)=>{
                e.preventDefault();
                var totalmarksverify=document.getElementById("totalmarksid").value;
                if(totalmarksverify <= 0){
                    alert(`Please Enter Marks`);
                }
                var totals=0;
                var tempss=0;
                parseInt(totals);
                for (var k = 0; k < noss; k++) {
                    console.log("for loop "+arrmarks[k]);
                    tempss=document.getElementById(arrmarks[k]).value;
                    parseInt(tempss);
                    totals=totals+tempss;          
                }
                
                if(totalmarksverify==totals){
                    console.log("marks are equal bro");
                }
                else{

                    console.log("marks are not equal bro" + totals);
                }

                var arr=[];
                var parts=[];
                var partsff={};
                


                 for(var i=1;i<=countfun;i++){
                     console.log("outputs during:"+countfun);
                    parts[i-1]={
                        questions:this.state.timelimit["qstn"+i],
                        opt1:this.state.timelimit["option1"+i],
                        opt2:this.state.timelimit["option2" +i],
                        opt3:this.state.timelimit["option3"+i],
                        opt4:this.state.timelimit["option4"+i],
                        ans:this.state.timelimit["ans"+i],
                        markseach:this.state.timelimit['marksforeach'+i]
                    }
                 }

                // console.log("1st"+parts[0].questions+parts[0].opt1+parts[0].opt2+parts[0].opt3+parts[0].opt4);
                // console.log("2nd"+parts[1].questions+parts[1].opt1+parts[1].opt2+parts[1].opt3+parts[1].opt4);



                for(var j=0;j<countfun;j++){
                    arr.push(parts[j]);
                }
                

                const finalssubmit={
                    name:this.state.name,
                    subject:this.state.subject,
                    batch:this.state.batch,
                    date:this.state.date,
                    time:this.state.time,
                    timelimit:this.state.timelimit,
                    noofquestion:this.state.noofquestion,
                    marks:this.state.marks,
                    contents:arr
                    
                }
                 console.log(finalssubmit);

                   axios.post("https://quizess.herokuapp.com/admin/quizadd",finalssubmit,{withCredentials:true}).then((resss)=>{console.log(resss)}).catch(err=>{console.log(err)});



            }
            this.createquiz=()=>{
                var quizblock=document.getElementById("createquizblockid");
                var bgitem=document.getElementById("backgroundimgid");
                var updateblock=document.getElementById("formsid");
                var updateblock2=document.getElementById("formsid2");
                var resultcard=document.getElementById("resultcardviewid");
                var resultcard2=document.getElementById("resultcardviewid2f");
                var updatecard=document.getElementById("updatecardview");
                var updatecard2=document.getElementById("updatecardview2f");


                quizblock.style.display="block";
                bgitem.style.display="none";
                updateblock.style.display="none";
                updateblock2.style.display="none";
                resultcard.style.display="none";
                resultcard2.style.display="none";
                updatecard.style.display="none";
                updatecard2.style.display="none";

            }
            this.updatequiz=()=>{
                var updateblock=document.getElementById("formsid");
                var quizblock=document.getElementById("createquizblockid");
                var bgitem=document.getElementById("backgroundimgid");
                var updateblock2=document.getElementById("formsid2");
                var resultcard=document.getElementById("resultcardviewid");
                var resultcard2=document.getElementById("resultcardviewid2f");
                var updatecard=document.getElementById("updatecardview");
                var updatecard2=document.getElementById("updatecardview2f");

                quizblock.style.display="none";
                updateblock.style.display="flex";
                bgitem.style.display="none";
                updateblock2.style.display="none";
                resultcard.style.display="none";
                resultcard2.style.display="none";
                updatecard.style.display="none";
                updatecard2.style.display="none";
            }
            this.deletequiz=()=>{
                var updateblock=document.getElementById("formsid");
                var quizblock=document.getElementById("createquizblockid");
                var bgitem=document.getElementById("backgroundimgid");
                var updateblock2=document.getElementById("formsid2");
                var resultcard=document.getElementById("resultcardviewid");
                var resultcard2=document.getElementById("resultcardviewid2f");
                var updatecard=document.getElementById("updatecardview");
                var updatecard2=document.getElementById("updatecardview2f");

                quizblock.style.display="none";
                updateblock.style.display="none";
                bgitem.style.display="none";
                updateblock2.style.display="flex";
                resultcard.style.display="none";
                resultcard2.style.display="none";
                updatecard.style.display="none";
                updatecard2.style.display="none";
            }


            this.onsubmitupdatesearch=(e)=>{
                e.preventDefault();
                var viewq=document.getElementById("resultcardviewid");
                viewq.style.display="block";
                const cate=document.getElementById("optioncat1q").value;
                const finalsq={
                    name:this.state.searchtext
                }
                if(cate==="Name"){
                    console.log("name herer"+finalsq.name);
                    axios.post("https://quizess.herokuapp.com/admin/quiznamefinder",finalsq,{withCredentials:true}).then(ress=>{
                        this.setState({
                            listdata:ress.data
                    })}).catch(err=>{console.log(err)});


                }else if (cate==="Standard"){
                    console.log("Standard herer");

                }
                
            }
            this.onupdatebuttonclick=(ids)=>{
                var listview=document.getElementById("resultcardviewid");
        
                listview.style.display="none";
        
                var updateview=document.getElementById("updatecardview");
        
                updateview.style.display="block";
                const idss3={
                    ids:ids
                }
                
                axios.post("https://quizess.herokuapp.com/admin/updatequizf",idss3,{withCredentials:true}).then((op)=>{this.setState({beforelist:op.data,arrofquestion:op.data[0].contents,counternew1:op.data[0].noofquestion});console.log(op.data[0]);console.log(op.data[0].noofquestion);}).catch(err=>{console.log(err)});
                

            }
            this.clickadd=(e)=>{
                e.preventDefault();
                var noofq=document.getElementById("bro8f").value;
                parseInt(noofq);
                var noofqfromdb=this.state.beforelist[0].noofquestion;
                var check=this.state.counternew1;
                parseInt(check);
                var nums=this.state.counternew1;
                parseInt(nums);
                
                if(noofq!=noofqfromdb){
                    if(noofq > check){
                        var parent=document.getElementById("newquestionsid");
                        var qstnnew=document.createElement("input");
                        qstnnew.setAttribute("type","text");
                        qstnnew.setAttribute("id","upquestion"+nums);
                        var egs=nums;
                        parseInt(egs);
                        egs++
                        qstnnew.setAttribute("placeholder","Question "+egs);


                        var opt1new=document.createElement("input");
                        opt1new.setAttribute("type","text");
                        opt1new.setAttribute("placeholder","Option 1");
                        opt1new.setAttribute("id","upoption1"+nums);


                        var opt2new=document.createElement("input");
                        opt2new.setAttribute("type","text");
                        opt2new.setAttribute("placeholder","Option 2");
                        opt2new.setAttribute("id","upoption2"+nums);


                        var opt3new=document.createElement("input");
                        opt3new.setAttribute("type","text");
                        opt3new.setAttribute("placeholder","Option 3");
                        opt3new.setAttribute("id","upoption3"+nums);



                        var opt4new=document.createElement("input");
                        opt4new.setAttribute("type","text");
                        opt4new.setAttribute("placeholder","Option 4");
                        opt4new.setAttribute("id","upoption4"+nums);



                        var marksnew=document.createElement("input");
                        marksnew.setAttribute("type","text");
                        marksnew.setAttribute("placeholder","Marks");
                        marksnew.setAttribute("id","upmarks"+nums);



                        //questions
                        var row1=document.createElement("tr");
                        var tds=document.createElement("td");
                        var notes=document.createTextNode("Question");
                        tds.appendChild(notes);
                        var tds2=document.createElement("td");
                        tds2.appendChild(qstnnew);


                        //opt1
                        var row2=document.createElement("tr");
                        var tds3=document.createElement("td");
                        var notes3=document.createTextNode("");
                        tds3.appendChild(notes3);
                        var tds4=document.createElement("td");
                        tds4.appendChild(opt1new);

                        //opt2
                        var row3=document.createElement("tr");
                        var tds5=document.createElement("td");
                        var notes4=document.createTextNode("");
                        tds5.appendChild(notes4);
                        var tds6=document.createElement("td");
                        tds6.appendChild(opt2new);

                        //opt3
                        var row4=document.createElement("tr");
                        var tds7=document.createElement("td");
                        var notes5=document.createTextNode("");
                        tds7.appendChild(notes5);
                        var tds8=document.createElement("td");
                        tds8.appendChild(opt3new);

                        //opt4
                        var row5=document.createElement("tr");
                        var tds9=document.createElement("td");
                        var notes6=document.createTextNode("");
                        tds9.appendChild(notes6);
                        var tds10=document.createElement("td");
                        tds10.appendChild(opt4new);

                        //marks
                        var row6=document.createElement("tr");
                        var tds11=document.createElement("td");
                        var notes7=document.createTextNode("");
                        tds11.appendChild(notes7);
                        var tds12=document.createElement("td");
                        tds12.appendChild(marksnew);
                        
                        //td append
                        row1.appendChild(tds);
                        row1.appendChild(tds2);
                        row2.appendChild(tds3);
                        row2.appendChild(tds4);
                        row3.appendChild(tds5);
                        row3.appendChild(tds6);
                        row4.appendChild(tds7);
                        row4.appendChild(tds8);
                        row5.appendChild(tds9);
                        row5.appendChild(tds10);
                        row6.appendChild(tds11);
                        row6.appendChild(tds12);


                        //tr append
                        parent.appendChild(row1);
                        parent.appendChild(row2);
                        parent.appendChild(row3);
                        parent.appendChild(row4);
                        parent.appendChild(row5);
                        parent.appendChild(row6);

                        nums++;
                        check++;
                        this.setState({counternew1:nums});
                    }


                }else{
                    alert(`already present with the given number`);
                    

                }

            }
            this.onsubmitupdatequiz=(e)=>{
                e.preventDefault();
                var objsf=[];
                var setarr=[];
                var noofqs=document.getElementById("bro8f").value;
                var limits=noofqs;
                limits--;
                for(var j=0;j<=limits;j++){
                    setarr[j]={ 
                     qs1:document.getElementById("upquestion"+j).value,
                     opt1:document.getElementById("upoption1"+j).value,
                     opt2:document.getElementById("upoption2"+j).value,
                     opt3:document.getElementById("upoption3"+j).value,
                     opt4:document.getElementById("upoption4"+j).value,
                     ans:document.getElementById("upmarks"+j).value,
                    }

                }
                for(var k=0;k<=limits;k++){    
                    objsf.push(setarr[k]);
                }


                var fids=this.state.beforelist;
                var fname=document.getElementById("brof").value;
                var fbatch=document.getElementById("bro3f").value;
                var fsubject=document.getElementById("bro2f").value;
                var ftimelimit=document.getElementById("bro4f").value;
                var fdate=document.getElementById("bro5f").value;
                var fnoofq=document.getElementById("bro8f").value;
                var fmarks=document.getElementById("bro9f").value;
                var fcontents=objsf;
                var objmain={fids,fname,fbatch,fsubject,ftimelimit,fdate,fnoofq,fmarks,fcontents};

                axios.post("https://quizess.herokuapp.com/admin/finalupdatef",objmain,{withCredentials:true}).then((res)=>{console.log(res)}).catch(err=>{console.log(err)});
            }
            this.onsubmitdelete1=(e)=>{
                e.preventDefault();
                console.log("sdfsdfdsfsfs");
                var viewq=document.getElementById("resultcardviewid2f");
                viewq.style.display="block";
                const cate=document.getElementById("optioncat2q").value;
                const finalsq={
                    name:this.state.searchtext
                }
                if(cate==="Name"){
                    console.log("name here bro "+finalsq.name);
                    axios.post("https://quizess.herokuapp.com/admin/quiznamefinder",finalsq,{withCredentials:true}).then(ress=>{
                        this.setState({
                            listdata:ress.data
                    })}).catch(err=>{console.log(err)});


                }else if (cate==="Standard"){
                    console.log("Standard herer");

                }
                
            }
            this.onupdatebuttonclick2=(ids)=>{
                var listview=document.getElementById("resultcardviewid2f");
        
                listview.style.display="none";
        
                var updateview=document.getElementById("updatecardview2f");
        
                updateview.style.display="block";
                const idss3={
                    ids:ids
                }
                
                axios.post("https://quizess.herokuapp.com/admin/updatequizf",idss3,{withCredentials:true}).then((op)=>{this.setState({beforelist:op.data,arrofquestion:op.data[0].contents,counternew1:op.data[0].noofquestion});console.log(op.data[0]);console.log(op.data[0].noofquestion);}).catch(err=>{console.log(err)});
                

            }
            this.onsubmitdeletequiz=()=>{
                console.log("sdfsfsdfsfdfsfsdfsfsfsfs");
                var ffids={
                    idf:this.state.beforelist._id,
                }
                axios.post("https://quizess.herokuapp.com/admin/finaldeletequizf",ffids,{withCredentials:true}).then(op=>{console.log(op)}).catch(err=>{console.log(err)});
            }
            

        }
        
        return(
            <UserConsumer>
                {username=>{
                    return <div>
                        {username.value1===true && <>
                <div >               
                <Headertemplate/>
                <div className="adminstudent" >
                    <p>Quiz's info</p>
                    <div className="adminstdcred">
                                             
                        <button  className="cardview" onClick={this.createquiz}>Create Quiz</button>
                        <button  className="cardview" onClick={this.updatequiz}>Update Quiz</button>
                        <button className="cardview" onClick={this.deletequiz}>Delete Quiz</button>

                    </div>
                </div>
                <div  className="backgroundimg" id="backgroundimgid"></div>



                {/* update block */}

                <form className="forms2" id="formsid" onSubmit={this.onsubmitupdatesearch}>
     
                        <select style={{marginRight:"1%",outline:"none",border:"none",boxShadow:" 0 0px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19)"}} id="optioncat1q" className="searchtexts"  onChange={this.onChangecategory}><option>Name</option><option>Regno</option><option>Standard</option></select>

                        <input type="text" placeholder="Search any member related to this institute" className="searchtext" onChange={this.onChnageseartext}/>
                        <input type="submit" value="Search" className="searchbtn"/>
                </form> 

                <div className="resultcardview" id="resultcardviewid">
                        <table className="tables">
                            <tr className="throws">
                                <th className="ths" style={{fontWeight:"bold"}}>Name</th>
                                <th className="ths" style={{fontWeight:"bold"}}>Age</th>
                                <th className="ths" style={{fontWeight:"bold"}}>Standard</th>
                                <th className="ths"></th>
                            </tr>
                            {this.state.listdata.map((use)=>
                            
                        
                            <tr key={use._id} className="tdrows">
                                <td className="tds">{use.name}</td>
                                <td className="tds"><p>{use.subject}</p></td>
                                <td className="tds"><p >{use.batch}</p></td>
                                <td className="tds"><button onClick={()=>{this.onupdatebuttonclick(use._id)}} className="searchbtn">update</button></td>
                                
                            </tr>
                            
                            )}
                        </table>
                   
                    

                </div>

                <div className="updatecardview" id="updatecardview">

                        {this.state.beforelist.map((before)=>
                        
                        <form key={before._id} onSubmit={this.onsubmitupdatequiz}>
                        <table className="tables">
                            <tr className="tdrows"><td className="tds">Name of Quiz</td>    <td className="tds"><input id="brof" type="text" placeholder={before.name}  onChange={this.onchangenewusername}/></td></tr>
                            <tr className="tdrows"><td className="tds">Batch</td>           <td className="tds"><input id="bro3f" type="text" placeholder={before.batch}  onChange={this.onchangenewstd}/></td></tr>
                            <tr className="tdrows"><td className="tds">Subject    </td>     <td className="tds"><input id="bro2f" type="text" placeholder={before.subject}  onChange={this.onchangenewage}/></td></tr>
                            <tr className="tdrows"><td className="tds">timelimit</td>       <td className="tds"><input id="bro4f" type="Number" placeholder={before.timelimit}  onChange={this.onchangenewfathername}/></td></tr>
                            <tr className="tdrows"><td className="tds">date</td>            <td className="tds"><input id="bro5f" type="text" placeholder={before.date}  onChange={this.onchangenewmothername}/></td></tr>
                            <tr className="tdrows"><td className="tds">no of Question</td>  <td className="tds"><input id="bro8f" type="Number" placeholder={before.noofquestion}  onChange={this.onchangenewaddress}/></td><td><button className="searchbtn" onClick={this.clickadd}>Add</button></td></tr>
                            <tr className="tdrows"><td className="tds">Marks</td>           <td className="tds"><input id="bro9f" type="Number" placeholder={before.marks}  onChange={this.onchangenewmailid}/></td></tr>
                            

                            {this.state.arrofquestion.map((qstns,index)=>
                                <table key={index} className="tables tds" style={{marginLeft:"40%",width:"100%"}}>

                                

                                <tr className="tdrows"><td className="tds">Question{++index}</td><td className="tds"><input type="text" placeholder={qstns.questions} id={"upquestion"+index}></input></td></tr>
                                <tr className="tdrows"><td className="tds">Option 1</td><td className="tds"><input type="text" placeholder={qstns.opt1} id={"upoption1"+index}></input></td></tr>
                                <tr className="tdrows"><td className="tds">Option 2</td><td className="tds"><input type="text" placeholder={qstns.opt2} id={"upoption2"+index}></input></td></tr> 
                                <tr className="tdrows"><td className="tds">Option 3</td><td className="tds"><input type="text" placeholder={qstns.opt3} id={"upoption3"+index}></input></td></tr>  
                                <tr className="tdrows"><td className="tds">Option 4</td><td className="tds"><input type="text" placeholder={qstns.opt4} id={"upoption4"+index}></input></td></tr> 
                                <tr className="tdrows"><td className="tds">Answer</td><td className="tds"><input type="text" placeholder={qstns.ans} id={"upmarks"+index}></input></td></tr>
                                

                                </table>
                            )}
                            <tr id="newquestionsid">

                            </tr>
                            <tr className="tdrows"><td className="tds"><button className="searchbtn" style={{marginLeft:"80%"}}>Update</button></td></tr>

                            </table>
                        </form>
                            
                        )}
                        
                        
                        
                            
                   
                </div>

                {/* delete block */}

                <div>
                <form className="forms2f" id="formsid2" onSubmit={this.onsubmitdelete1}>
     
                        
                        <select style={{marginRight:"1%",outline:"none",border:"none",boxShadow:" 0 0px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19)"}} className="searchtexts" id="optioncat2q"><option>Name</option><option>Reg no</option><option>Standard</option></select>

                        <input type="text" placeholder="Search any quiz related to this institute" className="searchtext"/>
                        <input type="submit" value="Search" className="searchbtn"/>
                </form> 
                </div>


                <div className="resultcardview" id="resultcardviewid2f">
                        <table className="tables">
                            <tr className="throws">
                                <th className="ths" style={{fontWeight:"bold"}}>Name</th>
                                <th className="ths" style={{fontWeight:"bold"}}>Age</th>
                                <th className="ths" style={{fontWeight:"bold"}}>Standard</th>
                                <th className="ths"></th>
                            </tr>
                            {this.state.listdata.map((use)=>
                            
                        
                            <tr key={use._id} className="tdrows">
                                <td className="tds">{use.name}</td>
                                <td className="tds"><p>{use.subject}</p></td>
                                <td className="tds"><p>{use.batch}</p></td>
                                <td className="tds"><button className="searchbtn" onClick={()=>{this.onupdatebuttonclick2(use._id)}}>View</button></td>
                                
                            </tr>
                            
                            )}
                        </table>
                   
                    

                </div>



                <div className="updatecardview" id="updatecardview2f">

                        {this.state.beforelist.map((before)=>
                        
                        <form key={before._id} onSubmit={this.onsubmitdeletequiz}>
                        <table className="tables">
                            <tr className="tdrows"><td className="tds">Name of Quiz</td>   <td className="tds">{before.name}  </td></tr>
                            <tr className="tdrows"><td className="tds">Batch</td>          <td className="tds">{before.batch}</td></tr>
                            <tr className="tdrows"><td className="tds">Subject    </td>    <td className="tds">{before.subject}  </td></tr>
                            <tr className="tdrows"><td className="tds">timelimit</td>      <td className="tds">{before.timelimit}</td></tr>
                            <tr className="tdrows"><td className="tds">date</td>           <td className="tds">{before.date}  </td></tr>
                            <tr className="tdrows"><td className="tds">no of Question</td> <td className="tds">{before.noofquestion} </td></tr>
                            <tr className="tdrows"><td className="tds">Marks</td>          <td className="tds">{before.marks} </td></tr>
                            {this.state.arrofquestion.map((qstns,index)=>
                            <table key={index}  className="tables tds" style={{marginLeft:"40%",width:"100%"}}>

                                <tr className="tdrows"><td className="tds">Question{++index}</td><td className="tds">{qstns.questions}</td></tr>
                                <tr className="tdrows"><td className="tds">Option 1</td><td className="tds">{qstns.opt1}</td> </tr>
                                <tr className="tdrows"><td className="tds">Option 2</td><td className="tds">{qstns.opt2}</td></tr> 
                                <tr className="tdrows"><td className="tds">Option 3</td><td className="tds">{qstns.opt3}</td></tr>  
                                <tr className="tdrows"><td className="tds">Option 4</td><td className="tds">{qstns.opt4}</td></tr> 
                                <tr className="tdrows"><td className="tds">Answer</td><td className="tds">{qstns.ans}</td></tr>
                            </table>)}
                            <tr className="tdrows"><td className="tds"><button className="searchbtn" style={{marginLeft:"80%"}}>Delete</button></td></tr>
                            </table>
                        </form>)}
                </div>




                {/* create quiz block */}

                <div className="createquizblock" id="createquizblockid" >
                    <form>
                        <table style={{width:"100%" , marginLeft:"5%"}}>
                            <tr>
                                <th>
                                </th>
                                <th>
                                </th>
                                
                            </tr>
                            <tr>
                                <td>
                                    Name of the quiz 
                                </td>
                                <td>
                                <input type="text" placeholder="Name of the quiz" className="inputs3" onChange={this.onchangename}/>
                                </td>
                                
                            </tr>
                            
                            <tr>
                                <td>
                                    Subject
                                </td>
                                <td>
                                <input type="text" placeholder="Name of the quiz" className="inputs3" onChange={this.onchangesubject}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Batch
                                </td>
                                <td>
                                <input type="text" placeholder="Name of the quiz" className="inputs3" onChange={this.onchangebatch} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Filter
                                </td>
                                <td>
                                <input type="text" placeholder="Name of the quiz" className="inputs3" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Date of quiz
                                </td>
                                <td>
                                    <input type="Date" className="inputs3"  onChange={this.onchangedate}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Time
                                </td>
                                <td>
                                    <input type="Time" className="inputs3" onChange={this.onchangetime}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Time limit (in Minutes)
                                </td>
                                <td>
                                    <input type="Number" className="inputs3" onChange={this.onchangetimelimit}/>
                                </td>
                            </tr>

                            <tr>
                                <td onClick={this.validornot}>
                                    No of Question
                                </td>
                                <td>
                                <input type="number" placeholder="no of question" className="inputs3" id="noqsid"  onChange={this.onchangenoofquestion} />
                                </td>
                                <td>
                                <a className="btnsa" onClick={this.noofquestion}>Add</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    
                                </td>
                                <td id="fourth">
                                
                                </td>
                                
                            </tr>

                            <tr>
                                <td onClick={()=>{console.log("noss :"+noss+"   countfun :"+countfun);}}>
                                    Total Marks 
                                </td>
                                <td >
                                <input type="Number" className="inputs3" id="totalmarksid" onChange={this.onchangemarks}/>

                                </td>
                                
                            </tr>
                            <tr>
                                <td>

                                </td>
                                <td>
                                    <input type="submit" onClick={this.onsubmits}/>
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
                

            </div> 
            </>}
            {username.value1===false && <> {window.location="/"}</>} 
            </div>
            }}
            </UserConsumer>

        );
    };
}
export default homeadminquiz;