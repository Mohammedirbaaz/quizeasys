import axios from 'axios';
import React,{Component} from 'react';
import Headertemplate from "./headertemplatestudent";
import './style.css'

class homeadminmyaccount extends Component{
    constructor(){
        super();
        this.state={
            mydetails:{}
        }
    }
    componentDidMount(){
        axios.get("https://quizess.herokuapp.com/student/mydetails",{withCredentials:true}).then((res)=>{this.setState({mydetails:res.data});});

    }
    render(){
        return(
            <div>
                <Headertemplate/>
                <div className="logincontent2">
                    <div className="registerimage2">
                    </div>
                    <div className="loginforms">
                        
                        <table style={{textAlign:"center",width:"100%"}}>
                            <tr><th className="headertext" style={{textAlign:"center",marginLeft:"20%"}}>Student Detail</th></tr>

                            <tr><td className="inputs2" style={{color:"white"}}>Username</td><td>{this.state.mydetails.username}</td></tr>
                            <tr><td className="inputs2" style={{color:"white"}}>School or inst</td><td>{this.state.mydetails.schoolorinst}</td></tr>
                            <tr><td className="inputs2" style={{color:"white"}}>School/Inst name</td><td>{this.state.mydetails.schoolorinstname}</td></tr>
                            <tr><td className="inputs2" style={{color:"white"}}>Standard</td><td>{this.state.mydetails.stdinschoolorinst}</td></tr>
                            <tr><td className="inputs2" style={{color:"white"}}>age</td><td>{this.state.mydetails.age}</td></tr>
                            <tr><td className="inputs2" style={{color:"white"}}>Fathername</td><td>{this.state.mydetails.fathername}</td></tr>
                            <tr><td className="inputs2" style={{color:"white"}}>Mothername</td><td>{this.state.mydetails.mothername}</td></tr>
                            <tr><td className="inputs2" style={{color:"white"}}>FatherPhno</td><td>{this.state.mydetails.fatherphno}</td></tr>
                            <tr><td className="inputs2" style={{color:"white"}}>Motherphno</td><td>{this.state.mydetails.motherphno}</td></tr>
                            <tr><td className="inputs2" style={{color:"white"}}>Address</td><td>{this.state.mydetails.address}</td></tr>
                            <tr><td className="inputs2" style={{color:"white"}}>Mailid</td><td>{this.state.mydetails.mailid}</td></tr>
                            <tr><td className="inputs2" style={{color:"white"}}>Phno</td><td>{this.state.mydetails.phno}</td></tr>
                            

                            {/* <input type="submit" value="Update" className="inputsbtn" /> */}
                        </table>
                                               
                    </div>
                </div>
            </div>  
        );
    };
}
export default homeadminmyaccount;