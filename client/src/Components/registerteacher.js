import axios from 'axios';
import React,{Component} from 'react';
import Guestheader from "./guestheader";
import './style.css';


class registerteacher extends Component{
    constructor(){
        super();

        this.state={
            username:'',
            schoolorinst:'',
            schoolorinstname:'',
            positionname:'',
            qualification:'',
            age:'',
            address:'',
            password:'',
            cpassword:'',
            mailid:'',
            phno:''
        }


    }

    onChangeusername=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    onChangeschoolorinst=(e)=>{
        this.setState({
            schoolorinst:e.target.value
        })
    }
    onChangeschoolorinstname=(e)=>{
        this.setState({
            schoolorinstname:e.target.value
        })
    }
    onChangepositionname=(e)=>{
        this.setState({
            positionname:e.target.value
        })
    }
    onChangequalification=(e)=>{
        this.setState({
            qualification:e.target.value
        })
    }
    onChangeage=(e)=>{
        this.setState({
            age:e.target.value
        })
    }
    onChangeaddress=(e)=>{
        this.setState({
            address:e.target.value
        })
    }
    onChangepassword=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    onChangecpassword=(e)=>{
        this.setState({
            cpassword:e.target.value
        })
    }
    onChangemailid=(e)=>{
        this.setState({
            mailid:e.target.value
        })
    }
    onChangephno=(e)=>{
        this.setState({
            phno:e.target.value
        })
    }

    onsubmit=(e)=>{
        e.preventDefault();
        console.log("registerteachernew");


        const registerteachernew={
            username:this.state.username,
            schoolorinst:this.state.schoolorinst,
            schoolorinstname:this.state.schoolorinstname,
            positionname:this.state.positionname,
            qualification:this.state.qualification,
            age:this.state.age,
            address:this.state.address,
            password:this.state.password,
            mailid:this.state.mailid,
            phno:this.state.phno
        }
        
        axios.post("https://quizess.herokuapp.com/teacher/add",registerteachernew,{withCredentials:true}).then((ress)=>{console.log(ress.data);
            if(ress.data=="teacher added to database"){
                alert(ress.data);
            }else{
                alert(ress.data);
            }

        }).catch(err=>{console.log(err)});



    }

    render(){
        return(
            <div>
                <Guestheader/>
                <div className="logincontent">
                    <div className="registerimage">
                    </div>
                    <div className="loginforms">
                        <p className="headertext">Teacher Register</p>
                        <form  onSubmit={this.onsubmit}  >
                            <input type="text" className="inputs2" placeholder="User name" onChange={this.onChangeusername} />
                            <input type="text" className="inputs2" placeholder="School/Institute" onChange={this.onChangeschoolorinst}/>
                            <input type="text" className="inputs2" placeholder="School/Institute name" onChange={this.onChangeschoolorinstname}/>
                            <input type="text" className="inputs2" placeholder="Position in School/Institute" onChange={this.onChangepositionname}/>
                            <input type="text" className="inputs2" placeholder="Qualification" onChange={this.onChangequalification}/>
                            <input type="Number" className="inputs2" placeholder="Age" onChange={this.onChangeage} />
                            <input type="text" className="inputs2" placeholder="Your Address" onChange={this.onChangeaddress} />
                            <input type="password" className="inputs2" placeholder="Password" onChange={this.onChangepassword} />
                            <input type="password" className="inputs2" placeholder="Confirm Password" onChange={this.onChangecpassword} />
                            <input type="email" className="inputs2" placeholder="Your Mail Id" onChange={this.onChangemailid} />
                            <input type="Number" className="inputs2" placeholder="Your Phno" onChange={this.onChangephno} />

                            <input type="submit" value="register student" className="inputsbtn" />
                        </form>
                        <a href="/loginteacher" className="inputs2" style={{width:"50%" , color:"white",textDecoration:"none"}}>Already have an account?</a>
                        
                    </div>
                </div>
            </div>
        );
    };
}
export default registerteacher;