import React,{Component} from 'react';
import { Link } from "react-router-dom";
import './style.css';
import axios from 'axios';

class headertemplatestudent extends Component{

    constructor(){
        super();
        this.state={
            myname:{},

        }
    }

    onclicklogout=()=>{
        
         axios.get("https://quizess.herokuapp.com/student/logoutstudent",{withCredentials:true}).then(op=>{console.log(op)}).catch(err=>{console.log(err)})
    }
    componentDidMount(){
         axios.get("https://quizess.herokuapp.com/admin/mydetails",{withCredentials:true}).then(res=>{console.log(res.data);this.setState({myname:res.data});});
    }
    onclickhamb=()=>{
        var hambs=document.getElementById("hamburgersssid");
        var mainme=document.getElementById("mainmenuid");

        hambs.style.display="none";
        mainme.style.display="block";
        mainme.style.transitionProperty="width,height";
        mainme.style.transitionDuration="0.7s";
        mainme.style.width="150px";
        mainme.style.height="100%";

        
    }
    onclickcloser=()=>{
        var mainm=document.getElementById("mainmenuid");
        var hambs=document.getElementById("hamburgersssid");

        hambs.style.display="block";
        mainm.style.transitionProperty="width";
        mainm.style.transitionDuration="0.7s";
        mainm.style.width="0px";
    }
    render(){
        return(
            <div>
                
                <div className="hamburgersss" id="hamburgersssid" onClick={this.onclickhamb}>
                    <div className="mainmenulogo" ></div>
                    <div className="mainmenulogo" ></div>
                    <div className="mainmenulogo" ></div>
                </div>
                <p className="institutename">{this.state.myname.schoolorinstname}</p>
                <Link to="/">
                <a className="headercontentm" onClick={this.onclicklogout}>Logout</a>
                </Link>



                <div className="mainmenu" id="mainmenuid">
                    <div className="dpimagebackground">
                    <div className="closersss" id="closersssid" onClick={this.onclickcloser}>
                            <p className="firstsss s2"></p>
                            {/* <div className="firstsss s3"></div> */}
                        </div>
                        <img className="dpimage" />
                    </div>
                    <p className="usernamecontent">{this.state.myname.username}</p>
                    <div className="menucontents" id="menucontentsid">

                        <a className="contents" href="/studentquiz">Quiz</a>
                        <a className="contents" href="/studentmarks">Marks</a>
                        <a className="contents" href="/studentteacher">Teacher</a>
                       
                        <a className="contents" href="/studentmyaccount">My Account</a>
                    </div>


                </div>
                               
            </div>
        );
    };
}
export default headertemplatestudent;