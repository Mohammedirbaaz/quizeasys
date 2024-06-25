import React,{Component} from 'react';
import Guestheader from "./guestheader";
import './style.css';
import axios from 'axios';

class loginstudent extends Component{
    constructor(){
        super();
        this.state={
            userid:'',
            password:''
        }

        this.onchangeuserid=this.onchangeuserid.bind(this);
        this.onchangepassword=this.onchangepassword.bind(this);

        this.onsubmit=this.onsubmit.bind(this);
    }

    onchangeuserid(e){
        this.setState({
            userid:e.target.value
        })
        
    }
    onchangepassword(e){
        this.setState({
            password:e.target.value
        })
    }

    onsubmit(e){
        // console.log("loginteachernew");

         e.preventDefault();

        const loginstudentnew={
            mailid:this.state.userid,
            password:this.state.password
        }
        
        axios.post("https://quizess.herokuapp.com/student/loginstudent",loginstudentnew,{withCredentials:true}).then(ress=>{console.log(ress);window.location="/student"}).catch(err=>{console.log(err)});        
    }




    render(){
        return(
            <div>
                <Guestheader/>
                <div className="logincontent">
                    <div className="loginimage">
                    </div>
                    <div className="loginforms">
                        <p className="headertext">Student Login</p>
                        <form onSubmit={this.onsubmit}>
                            <input type="text" className="inputsn" placeholder="User id" onChange={this.onchangeuserid}/>
                            <input type="password" className="inputsn" placeholder="Password" onChange={this.onchangepassword}/>
                            <input type="submit" value="Login" className="inputsbtn" />
                        </form>
                        <a href="/registerstudent" className="inputs" style={{ color:"white",textDecoration:"none"}}>New User?Doesn't have account?</a>
                    </div>
                </div>
            </div>
        );
    };
}
export default loginstudent;