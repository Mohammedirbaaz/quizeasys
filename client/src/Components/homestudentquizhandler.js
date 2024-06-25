import React,{Component} from 'react';
import Headertemplatestudent from "./headertemplatestudent";
import './style.css';
import axios from 'axios';


var currentdate=0;
var currentdatenew=0;
var ansss=0;
var ansss2=0;
var ansss3=0;
var ansss4=0;

var currentmonth=0;
var currentseconds=0;
var currentyear=0;
var currenttime=0;
var currenthour=0;
var currentminute=0;
var quizdate=0;
var quizdatenew=0;
var quizmonth=0;
var quizyear=0;
var quizhour=0;
var quizhour=0;
var quizminute=0;
var cond=true;
var quizlimitinmin=0;
var minuteleft=0;
var hourleft=0;
var arrofids=new Array();
var finalindex=0;
var arrofmarkseach=new Array();
var totalexammarks=0;
var alreadyattended=true;
class homestudentquizhandler extends Component{
    constructor(props){
        super(props);
        this.state={
            quizs:[{}],
            noofqst:[{}],
            canwrite:false,
            currentsecondsstate:0,
            answers1:'',
            answers2:'',
            answers3:'',
            answers4:'',
        };

    }
    componentDidMount(){
        var url=window.location.pathname;
        var id=url.substring(url.lastIndexOf('/')+1);
        const idforfinder={
            _id:id
        }
        axios.post("https://quizess.herokuapp.com/student/quizattendagain",idforfinder,{withCredentials:true}).then((res)=>{if(res.data===true){alreadyattended=true;}else{alreadyattended=false} }).catch();

        axios.get("https://quizess.herokuapp.com/student/studentquize/"+id,{withCredentials:true}).then(res=>{this.setState({quizs:res.data,noofqst:res.data[0].contents});console.log(res.data[0].contents);}).catch(err=>{console.log(err)});
        
     
            
        
        
        
       
    }
    
    componentDidUpdate(){
        
        setInterval(()=>{var d = new Date();
            var seconds=d.getSeconds()
            seconds=60-seconds;

            var temps=seconds.toString();
            if(temps.length==1){
                temps="0"+temps;
            }
            seconds=temps
            parseInt(seconds);

            this.setState({currentsecondsstate:seconds});
        },1000);
        
    }
    fullscreen=()=>{
        var maincontent=document.getElementById("perquestionsid");
            if(maincontent.requestFullscreen){
            maincontent.requestFullscreen();
            }
    }

    
    

        
    checkingdates=()=>{
        currentdate=new Date();

        currentdatenew=currentdate.getDate();
        currentmonth=currentdate.getMonth();
        currentyear=currentdate.getFullYear();
        currenthour=currentdate.getHours();
        currentminute=currentdate.getMinutes();

        
        

        quizdate=new Date(this.state.quizs[0].date);
        quizdatenew=quizdate.getUTCDate();
        quizmonth=quizdate.getUTCMonth();
        quizyear=quizdate.getFullYear();
        quizhour=quizdate.getUTCHours();
        quizminute=quizdate.getUTCMinutes();
        quizlimitinmin=this.state.quizs[0].timelimit;

       
        




        // console.log(quizmonth);
        // console.log("date compare : "+currentdatenew+" "+quizdatenew);
        //     console.log("month compare : "+currentmonth+" "+quizmonth);
        //     console.log("year compare : "+currentyear+" "+quizyear);
        //     console.log("hour compare : "+currenthour+" "+quizhour);
        //     console.log("minute compare : "+currentminute+" "+quizminute);
           
            // parseInt(currentdatenew);
            // parseInt(quizdatenew);

            
        // if(currentdatenew===quizdatenew-1){
        //     quizdatenew--;
        //     console.log("commonnnnnnnnnn");
        // }

        // console.log("month compare : "+currentmonth+" "+quizmonth);
        //     console.log("year compare : "+currentyear+" "+quizyear);
        //     console.log("date compare : "+currentdatenew+" "+quizdatenew);
        //     console.log("hour compare : "+currenthour+" "+quizhour);

        if(currentyear===quizyear && currentmonth===quizmonth && currentdatenew===quizdatenew ){ 
            
            

            parseInt(quizlimitinmin);
            parseInt(quizminute);

            var finalzone=0;
            quizlimitinmin++;
            quizminute++;
            parseInt(finalzone);
            quizminute--;
            quizlimitinmin--;
            var tempshour=0;
            var copyquizhour=0;
            var copyquizminute=0;
            var houradder=0;
            var strhouradder=0;
            var temphouradder=0;
            var b=new Array();
            


            finalzone=quizminute+quizlimitinmin;
         
            if(finalzone>=60){
                
                tempshour=finalzone/60;
               
                var strhour=tempshour.toString();
                var numarray=strhour.split('.');
                var a =new Array();
                a=numarray;
                parseInt(copyquizhour);
                parseInt(copyquizminute);
                parseInt(a[0]);
                parseInt(a[1]);
                a[1]++;
                a[1]--;
                a[0]++;
                a[0]--;
                function rounds(value, decimals) {
                    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
                } 
                a[1]="0."+a[1];
                if(a[1]>=60){
              

                    a[1]=rounds(a[1],2);
                    var strtemps=a[1].toString();
                    var c=new Array();
                    c=strtemps.split('.');
                    houradder=c[1]/60;

                    strhouradder=houradder.toString();
                    temphouradder=strhouradder.split('.');
                    b=temphouradder;
                    parseInt(b[0]);
                    parseInt(b[1]);
                    b[0]++;b[1]++;
                    b[0]--;b[1]--;

                    copyquizhour++;
                    copyquizhour--;
                    copyquizhour=quizhour+a[0];
                    copyquizhour=copyquizhour+b[0];
                    
                    copyquizminute=quizminute+a[1]*60;

                    


                    copyquizminute=copyquizminute+b[1]*60
                    copyquizminute=copyquizminute/10;

                }else{
                    copyquizhour++;
                    copyquizhour--;
                    copyquizhour=quizhour+a[0];
                    parseInt(a[1]);
                    parseInt(quizminute);
                    parseInt(copyquizminute);
                    a[1]=a[1]*60;
                    
                    
                    copyquizminute=a[1];

                    copyquizminute=Math.round(copyquizminute);
                    

                    
                }

                if(currenthour===copyquizhour){
                    // console.log("knock knock3");

                    minuteleft=copyquizminute-currentminute-1;
                }else if(currenthour < copyquizhour){
                    // console.log("knock knock1");
                    
                    var remainninghour=copyquizhour-currenthour;
                    
                    //adding 0 to minute
                    minuteleft=finalzone-currentminute;
                    if(minuteleft>60){
                        var minutehandler=minuteleft/60;

                        var strs=minutehandler.toString();
                        var dd=new Array();
                        var check=null;
                        check=strs.indexOf(".");
                        // console.log("lottery "+check);
                        if(check){ 
                        dd=strs.split('.');
                        hourleft=dd[0];

                        
                        
                        dd[1]="0."+dd[1];
                        parseInt(dd[0]);
                        parseInt(dd[1]);
                        dd[0]++;dd[1]++;
                        dd[0]--;dd[1]--;

                        dd[1]=rounds(dd[1],1);


                        dd[1]=dd[1]*60;
                        dd[1]=dd[1].toString();
                        

                        var spliter=dd[1].split('.');
                        var ee=new Array();
                        ee=spliter;
                        // console.log("irbaaz check "+ee[0]);
                        // console.log("irbaaz check "+ee[1]);

                        ee[1]="0."+ee[1];

                        parseInt(ee[1]);
                        ee[1]++;ee[1]--;
                        ee[1]=rounds(ee[1],1);

                        ee[1]=ee[1]*60;
                        // console.log("irbaaz check final 1 "+ee[1]);
                        // console.log("irbaaz check final 2 "+ee[0]);

                        // console.log("irbaaz check final 3 "+ee[1]+ee[0]);

                        
                        minuteleft=ee[0];
                        }else{
                            minuteleft=minutehandler;
                        }
                        parseInt(hourleft);
                        parseInt(minuteleft);
                    
                    }else{
                        // console.log("knock knock2");
                        hourleft=0;
                    }
                    //adding 0 to hour
                    var temps=hourleft.toString();
                    if(temps.length==1){
                        temps="0"+temps;
                    }
                    hourleft=temps
                    parseInt(hourleft);
                    
                    // console.log("final cross check minute :"+minuteleft);
                    var temps=minuteleft.toString();
                    if(temps.length==1){
                        temps="0"+temps;
                    }
                    minuteleft=temps
                    parseInt(minuteleft);
                    minuteleft--;

                
                    
                        
                    
                    

                }
                if(currenthour>=quizhour && currenthour <=copyquizhour){
                    
                    // console.log("verification  "+currenthour + " "+copyquizhour+" minute "+currentminute+ " "+copyquizminute)
        
                        if(currenthour>=quizhour && currenthour<copyquizhour){
                            if(  currentminute>=quizminute){ 
                            // console.log("no worries");
                            cond=true;
                            }
                        } 
                        else if(currenthour===copyquizhour && currentminute < copyquizminute){
                            // console.log("littel bit worry");
                            cond=true;
                        }else{console.log("most  worried");cond=false}
                    }else{
                        cond=false;
                    }

                // console.log("final minut3e and hour "+copyquizhour +" "+copyquizminute);
            }
            else{
                // console.log("low time and check minute here :"+currentminute+" "+finalzone);
                if(currenthour==quizhour && currentminute <finalzone){
                    cond=true;
                    if(currenthour===quizhour){
                        hourleft.toString();
                        hourleft="00";

                        minuteleft=finalzone-currentminute-1;
                        // console.log("check me "+minuteleft);

                        var temps=minuteleft.toString();
                       if(temps.length==1){
                            temps="0"+temps;
                        }
                        minuteleft=temps
                        parseInt(minuteleft);

                        
                    }
                }else{
                    cond=false;
                }
            }
            
            if(minuteleft <=0){
                hourleft--;
                if(hourleft<=0){
                    hourleft=0;
                }
            }
        
        }else{
            cond=false;

        }
    }

    checkme=()=>{
        for(var i=0;i<=finalindex;i++){
            console.log(this.state.["qs"+arrofids[i]]);
        }
    }
    
    createstate=(question)=>{
        this.state={["qs"+question._id]:'',["ans"+question._id]:''}

    }
    assignvalue=()=>{

    }
    onsubmitexam=(e)=>{
        
        e.preventDefault();
        totalexammarks=0;
        parseInt(totalexammarks);
        totalexammarks++;
        totalexammarks--;

        for(var i=0;i<=finalindex;i++){
            if(this.state.["ans"+arrofids[i]]===this.state.["qs"+arrofids[i]]){
                console.log("coorrect  "+this.state.["ans"+arrofids[i]] +" " +this.state.["qs"+arrofids[i]]);
                parseInt(arrofmarkseach[i]);
                arrofmarkseach[i]++;
                arrofmarkseach[i]--;
                totalexammarks=totalexammarks+arrofmarkseach[i];
            }
        }
        console.log("your score : "+totalexammarks);
        var quizid2=this.state.quizs[0]._id;
        const quizidsmain={
            quizreq:this.state.quizs[0]._id,
            earnedmarks:totalexammarks
        }
        // console.log("testing 1 2 "+quizids.quizreq);
        axios.post("https://quizess.herokuapp.com/student/attendedquiz",quizidsmain,{withCredentials:true}).then((resss)=>{if(resss.data==="done"){window.location="/studentquiz";}}).catch(err=>{console.log(err);});
        // axios.post("http://localhost:5000/student/marks").then().catch(err=>{console.log(err)});


    }
    

    render(){
        
        
        
        return(
            <div>
                {
                    this.checkingdates()
                }
                {cond===true ? alreadyattended===false ? <div>


                <p className="quiznameheader" onClick={this.fullscreen} >{this.state.quizs[0].name}</p>
                <div id="perquestionsid" style={{backgroundColor:"skyblue"}}>

                <div className="notesforquiz"    >
                   <tr> <td className="notesforquiztext" onClick={this.checkme}>Subject    </td><td>{this.state.quizs[0].subject}</td> </tr>  
                   <tr> <td className="notesforquiztext">Batch      </td><td>{this.state.quizs[0].batch}</td></tr>    
                   <tr>  <td className="notesforquiztext">Timelimit </td><td>{this.state.quizs[0].timelimit}</td></tr>    
                   <tr> <td className="notesforquiztext">No of qstn </td><td>{this.state.quizs[0].noofquestion}</td> </tr>   
                   <tr> <td className="notesforquiztext"> Total Marks</td><td>{this.state.quizs[0].marks}</td>  </tr>  

                       
                </div> 
                <div className="timeleft">
                    <p>Time left : {hourleft+" : "+minuteleft+" : "+this.state.currentsecondsstate}</p>     
                    { <p>Time limit: {this.state.quizs[0].timelimit}min</p>    }
                </div> 
                
                <form >
                

                {this.state.noofqst.map((question,index)=>
                    <div key={question._id} className="perquestions" >
                        <p>Question {question.questions} {question.markseach}</p>
                        
                        <table>
                            {()=>{this.createstate(question)}}
                        <tr><td>A)</td><td>{question.opt1}</td><td><input type="radio" name={"question"+question._id} value={question.opt1} onClick={()=>{this.setState({["qs"+question._id]:question.opt1,["ans"+question._id]:question.ans});console.log(this.state.["ans"+question._id]+"   "+this.state.["qs"+question._id]);}}/></td></tr>
                        
                        <tr><td>B)</td><td>{question.opt2}</td><td><input type="radio" name={"question"+question._id} value={question.opt2} onClick={()=>{this.setState({["qs"+question._id]:question.opt2,["ans"+question._id]:question.ans});console.log(this.state.["ans"+question._id]+"   "+this.state.["qs"+question._id]);}}/></td></tr>
                        <tr><td>C)</td><td>{question.opt3}</td><td><input type="radio" name={"question"+question._id} value={question.opt3} onClick={()=>{this.setState({["qs"+question._id]:question.opt3,["ans"+question._id]:question.ans});console.log(this.state.["ans"+question._id]+"   "+this.state.["qs"+question._id]);}}/></td></tr>
                        <tr><td>D)</td><td>{question.opt4}</td><td><input type="radio" name={"question"+question._id} value={question.opt4} onClick={()=>{this.setState({["qs"+question._id]:question.opt4,["ans"+question._id]:question.ans});console.log(this.state.["ans"+question._id]+"   "+this.state.["qs"+question._id]);}}/></td></tr>
                        

                        </table>
                        {/* {()=>{this.assignvalue(question._id,index)}} */}
                        
                        {arrofids[index]=question._id}
                        {arrofmarkseach[index]=question.markseach}
                        {finalindex=index}

                    </div>

                    
                )}
                <input type="submit" value="Finish" onClick={this.onsubmitexam}/>
                </form>
                

                </div>
                </div>
            : <div></div> :<div></div>    
            }
                {cond===false ? alreadyattended===true ?<div>Your records already Saved</div> : <div>lol2</div> : <div>Quiz time has ended</div>}
                
            </div>  
        );
    };
}
export default homestudentquizhandler;