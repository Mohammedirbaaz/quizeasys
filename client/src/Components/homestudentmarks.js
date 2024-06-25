import React,{Component} from 'react';
import Headertemplatestudent from "./headertemplatestudent";
import './style.css';
import {UserConsumer} from '../context/authContext';
import axios from 'axios';

            
var currentmarks=0;
var fdates;
var ftimes;
class homestudentmarks extends Component{
    constructor(){
        super();
        this.state={
            studentmarks:[],
            quizdetails:[{}],
        }

    }

    componentDidMount(){
        axios.get("https://quizess.herokuapp.com/student/marksforstudent",{withCredentials:true}).then((res)=>{this.setState({studentmarks:res.data.q2.earnedmarks, quizdetails:res.data.q1});}).catch(err=>{console.log(err)});
    }

    startassign=(p)=>{
        currentmarks=this.state.studentmarks[p]
    }
    startdateassign=(pdate)=>{
        var dates=new Date(pdate);
        var sdate=dates.getUTCDate();
        var syear=dates.getFullYear();
        var smonth=dates.getMonth();
        smonth++;
        var strmin="00";
        
        var shour=dates.getUTCHours();
        var sminute=dates.getUTCMinutes();


        var fdate=sdate+"-"+smonth+"-"+syear;
        console.log(fdate);

        var ftime;

        if(sminute===0){
            strmin="00";
            ftime=shour+":"+strmin+":00";
        }else{
            ftime=shour+":"+sminute+":00";
        }
        fdates=fdate;
        ftimes=ftime;
        



    }

    render(){
        var tempsdate=0;
        return(
           

                <div>
                    <Headertemplatestudent/>
                    <div className="bodys">
                        <table className="tables">
                            <tr className="throws"><th className="ths">S.No</th><th className="ths">Date</th><th className="ths">Time</th><th className="ths">Subject</th><th className="ths">Quiz name</th><th className="ths">Total marks</th><th className="ths">Scored marks</th></tr>
                            {/* <tr> */}
                            {this.state.quizdetails.map((contents,index)=>
                                <tr key={index} className="tdrows">
                                    {this.startassign(index)}
                                    {this.startdateassign(contents.date)}
                                <td className="tds">{index}</td><td className="tds">{fdates}</td><td className="tds">{ftimes}</td><td className="tds">{contents.subject}</td><td className="tds">{contents.name}</td><td className="tds">{contents.marks}</td><td className="tds">{currentmarks}</td>
                                </tr>
                                
                            )}
                                                
                            
                        </table>

                    </div>

                </div>


        )
    }
}

export default homestudentmarks;
