import React,{Component} from 'react';
import Guestheader from "./guestheader";
import './style.css';
import axios from 'axios';

class loginadmin extends Component{
    constructor(){
        super();

        this.onsubmit=this.onsubmit.bind(this);

        this.state={
            userid:'',
            password:''
        }

    }
    onchangeuserid=(e)=>{
        this.setState({
            userid:e.target.value
        })
    }
    onchangepassword=(e)=>{
        this.setState({
            password:e.target.value
        })
    }

    onsubmit(e){
       e.preventDefault(); 
        const loginadminnew={
            mailid:this.state.userid,
            password:this.state.password
        }
        axios.post("https://quizess.herokuapp.com/admin/loginadmin",loginadminnew,{withCredentials:true}).then((res)=>{console.log(res);window.location="/admin" }).catch(err=>{console.log(err)});  

    }

    render(){
        return(
           
            <div>
                
                <Guestheader/>
                <div className="logincontent">
                    <div className="loginimage">
                    </div>
                    <div className="loginforms">
                        <p className="headertext">Admin Login</p>
                        <form onSubmit={this.onsubmit}>
                            <input type="text" className="inputsn" placeholder="schl/Institute's mail id" onChange={this.onchangeuserid}/>
                            <input type="password" className="inputsn" placeholder="Password" onChange={this.onchangepassword} />
                            <input type="submit" value="Login" className="inputsbtn" />
                        </form>
                        <a href="/registeradmin" className="inputs" style={{ color:"white",textDecoration:"none"}}>New User?Doesn't have account?</a>
                    </div>
                </div>
            </div>
            
        );
    };
}
export default loginadmin;