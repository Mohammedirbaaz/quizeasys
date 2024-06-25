import React,{Component} from 'react';
import { Link } from "react-router-dom";
import './style.css';
import axios from 'axios';

class headertemplate extends Component{
    constructor(){
        super();
        this.state={
            userdata:{},
        }

    }
    componentDidMount(){
        axios.get("https://quizess.herokuapp.com/admin/new",{withCredentials:true}).then((res)=>{this.setState({userdata:res.data})}).catch(err=>{console.log(err)});

    }

    
    onclicklogout=()=>{

        axios.get("https://quizess.herokuapp.com/admin/logoutadmin",{withCredentials:true}).then(op=>{console.log(op)}).catch(err=>{console.log(err)})
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
                <h2 className="institutename">{this.state.userdata.schoolorinstname}</h2>
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
                    <p className="usernamecontent">{this.state.userdata.username}</p>
                    
                    
                    <div className="menucontents">
                    <a className="contents" href="/adminstudent">Student</a>
                    <a className="contents" href="/adminteacher">Teacher</a>
                    <a className="contents" href="/adminquiz">Quiz</a>
                    <a className="contents" href="/admininstitute">{this.state.userdata.schoolorinstname}</a>
                    <a className="contents" href="/adminmyaccount">My Account</a>
                    </div>


                </div>
                               
            </div>
        );
    };
}
export default headertemplate;