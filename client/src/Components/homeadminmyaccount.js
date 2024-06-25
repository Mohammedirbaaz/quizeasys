import React,{Component,useEffect} from 'react';
import Headertemplate from "./headertemplate";
import './style.css';
import {UserConsumer} from '../context/authContext';
import axios from 'axios';

class homeadminmyaccount extends Component{
    constructor(props){
        super(props);
        this.state={
            admindetail:{},
        }
    }

    
    

    render(){

        axios.get("https://quizess.herokuapp.com/admin/new",{withCredentials:true}).then((res)=>{this.setState({admindetail:res.data})});

        return(
        <UserConsumer>
            
                {username=>{
                    
                    
                    return <div>
                    

                    {username.value1===true &&
                    <>
                    <div>
                        
                        <Headertemplate/>
                        <div className="logincontent2"  id="first" >
                            <div className="registerimage2" ></div>
                            <table className="loginforms">
                                <tr><th className="headertext" style={{textAlign:"center"}}>Admin Detail</th></tr>
                                <tr><td className="inputs2" style={{color:'white'}} >Username : </td><td>{this.state.admindetail.username}</td></tr>
                                <tr><td className="inputs2" style={{color:'white'}}>school/Institute Name :</td><td>{this.state.admindetail.schoolorinstname}</td></tr>
                                <tr><td className="inputs2" style={{color:'white'}}>Position  :</td><td>{this.state.admindetail.positionname}</td></tr>
                                <tr><td className="inputs2" style={{color:'white'}}>{this.state.admindetail.schoolorinstname} Mailid :</td><td>{this.state.admindetail.schoolinstmailid}</td></tr>
                                <tr><td className="inputs2" style={{color:'white'}}>{this.state.admindetail.schoolorinstname} Phno :</td><td>{this.state.admindetail.schoolinstphno}</td></tr>
                                <tr><td className="inputs2" style={{color:'white'}}>{this.state.admindetail.schoolorinstname} Country :</td><td>{this.state.admindetail.schoolorinstcountry}</td></tr>
                                <tr><td className="inputs2" style={{color:'white'}}>{this.state.admindetail.schoolorinstname} State :</td><td>{this.state.admindetail.schoolorinststate}</td></tr>
                                <tr><td className="inputs2" style={{color:'white'}}>{this.state.admindetail.schoolorinstname} District :</td><td>{this.state.admindetail.schoolorinstdistrict}</td></tr>
                                <tr><td className="inputs2" style={{color:'white'}}>{this.state.admindetail.schoolorinstname} address :</td><td>{this.state.admindetail.schoolorinstaddress}</td></tr>
                                <tr><td className="inputs2" style={{color:'white'}}>{this.state.admindetail.username} Mailid :</td><td>{this.state.admindetail.mailid}</td></tr>
                                <tr><td className="inputs2" style={{color:'white'}}>{this.state.admindetail.username} phno     :</td><td>{this.state.admindetail.phno}</td></tr>
                            </table>
                        </div>
                    </div>
                        
                    </>
                        
                    }
                    {username.value1===false &&
                    <>
                        lol
                    </>
                        
                    }
                    
                    
                    
                </div>
                }}
                
                
                

            
        </UserConsumer>
        );

    };
        

}
export default homeadminmyaccount;



// <Headertemplate/>
{/* <div className="logincontent2">
<div className="registerimage2">
</div>
<div className="loginforms">
    <p className="headertext">Admin Detail</p>
    <img  className="dpimage2"/>  

    <form>
        <input type="text" className="inputs2" placeholder="User name"/>
        <input type="text" className="inputs2" placeholder="School/Institute"/>
        <input type="text" className="inputs2" placeholder="Position in School/Institute"/>
        <input type="email" className="inputs2" placeholder="School/Institute Mail Id"/>
        <input type="Number" className="inputs2" placeholder="School/Institute Phno"/>
        <input type="text" className="inputs2" placeholder="Country"/>
        <input type="text" className="inputs2" placeholder="State"/>
        <input type="text" className="inputs2" placeholder="District"/>
        <input type="text" className="inputs2" placeholder="School/Institute Address"/>
        <input type="email" className="inputs2" placeholder="Your Mail Id"/>
        <input type="Number" className="inputs2" placeholder="Your Phno"/>

        <input type="submit" value="Update" className="inputsbtn" />
    </form>
                           
</div>
</div> */}