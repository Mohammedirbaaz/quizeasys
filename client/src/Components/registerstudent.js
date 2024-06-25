import React,{Component} from 'react';
import Guestheader from "./guestheader";
import './style.css';
import axios from 'axios';

class registerstudent extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            schoolorinst:'',
            schoolorinstname:'',
            stdinschoolorinst:'',
            age:0,
            fathername:'',
            mothername:'',
            fatherphno:0,
            motherphno:0,
            address:'',
            password:'',
            cpassword:'',
            mailid:'',
            phno:0
        }

        
    }


    onchangeusername=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    onchangeschoolorinst=(e)=>{
        this.setState({
            schoolorinst:e.target.value
        })
    }
    onchangestdinschoolorinst=(e)=>{
        this.setState({
            stdinschoolorinst:e.target.value
        })
    }
    onchangeage=(e)=>{
        this.setState({
            age:e.target.value
        })
    }
    onchangefathername=(e)=>{
        this.setState({
            fathername:e.target.value
        })
    }
    onchangemothename=(e)=>{
        this.setState({
            mothername:e.target.value
        })
    }
    onchangefatherphno=(e)=>{
        this.setState({
            fatherphno:e.target.value
        })
    }
    onchangemotherphno=(e)=>{
        this.setState({
            motherphno:e.target.value
        })
    }
    onchangeaddress=(e)=>{
        this.setState({
            address:e.target.value
        })
    }
    onchangepassword=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    onchangecpassword=(e)=>{
        this.setState({
            cpassword:e.target.value
        })
    }
    onchangemailid=(e)=>{
        this.setState({
            mailid:e.target.value
        })
    }
    onchangephno=(e)=>{
        this.setState({
            phno:e.target.value
        })
    }
    onchangeschoolorinstname=(e)=>{
        this.setState({
            schoolorinstname:e.target.value
        })
    }
    onsubmit=(e)=>{
        e.preventDefault();

        const registerstudentnew={
            username:this.state.username,
            schoolorinst:this.state.schoolorinst,
            schoolorinstname:this.state.schoolorinstname,
            stdinschoolorinst:this.state.stdinschoolorinst,
            age:this.state.age,
            fathername:this.state.fathername,
            mothername:this.state.mothername,
            fatherphno:this.state.fatherphno,
            motherphno:this.state.motherphno,
            address:this.state.address,
            password:this.state.password,
            mailid:this.state.mailid,
            phno:this.state.phno,
        }

        axios.post("https://quizess.herokuapp.com/student/add",registerstudentnew,{withCredentials:true}).then(ress=>{
        console.log(ress);
        if(ress.data==="student added to database"){
            
        }else{
            alert(ress.data)
        }
        }).catch(err=>console.log(err))
    }
    
    render(){
        return(
            <div>
                <Guestheader/>
                <div className="logincontent">
                    <div className="registerimage">
                    </div>
                    <div className="loginforms">
                        <p className="headertext">Student Register</p>
                        <form onSubmit={this.onsubmit}>
                            <input type="text" className="inputs2" placeholder="User name" onChange={this.onchangeusername}/>
                            <input type="text" className="inputs2" placeholder="School/Institute" onChange={this.onchangeschoolorinst}/>
                            <input type="text" className="inputs2" placeholder="School/Institute name" onChange={this.onchangeschoolorinstname}/>

                            <input type="text" className="inputs2" placeholder="Standard in School/Institute" onChange={this.onchangestdinschoolorinst}/>
                            <input type="Number" className="inputs2" placeholder="Age" onChange={this.onchangeage}/>
                            <input type="text" className="inputs2" placeholder="Father name" onChange={this.onchangefathername}/>
                            <input type="text" className="inputs2" placeholder="Mother name" onChange={this.onchangemothename}/>
                            <input type="Number" className="inputs2" placeholder="Father's Phno" onChange={this.onchangefatherphno}/>
                            <input type="Number" className="inputs2" placeholder="Mother's Phno" onChange={this.onchangemotherphno}/>
                            <input type="text" className="inputs2" placeholder="Your Address"  onChange={this.onchangeaddress}/>
                            <input type="password" className="inputs2" placeholder="Password" onChange={this.onchangepassword}/>
                            <input type="password" className="inputs2" placeholder="Confirm Password" onChange={this.onchangecpassword}/>
                            <input type="email" className="inputs2" placeholder="Your Mail Id" onChange={this.onchangemailid}/>
                            <input type="Number" className="inputs2" placeholder="Your Phno" onChange={this.onchangephno}/>

                            <input type="submit" value="Register" className="inputsbtn" />
                        </form>
                        <a href="/loginstudent" className="inputs2" style={{width:"50%" , color:"white",textDecoration:"none"}}>Already have an account?</a>
                        
                    </div>
                </div>
            </div>
        );
    };
}
export default registerstudent;