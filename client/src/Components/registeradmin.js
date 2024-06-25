import React,{Component} from 'react';
import Guestheader from "./guestheader";
import './style.css';
import axios from 'axios';

class registeradmin extends Component{
    
    constructor(){
        super();

        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangeschoolorinst=this.onChangeschoolorinst.bind(this);
        this.onChangeSchoolorinstitute=this.onChangeSchoolorinstitute.bind(this);
        this.onChangeposition=this.onChangeposition.bind(this);
        this.onChangeschoolorinstmailid=this.onChangeschoolorinstmailid.bind(this);
        this.onChangeschoolorinstPhno=this.onChangeschoolorinstPhno.bind(this);
        this.onChangeCountry=this.onChangeCountry.bind(this);
        this.onChangeState=this.onChangeState.bind(this);
        this.onChangeDistrict=this.onChangeDistrict.bind(this);
        this.onChangeschoolorinstaddress=this.onChangeschoolorinstaddress.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onChangeconfirmPassword=this.onChangeconfirmPassword.bind(this);
        this.onChangeAddress=this.onChangeAddress.bind(this);
        this.onChangeMailid=this.onChangeMailid.bind(this);
        this.onChangePhno=this.onChangePhno.bind(this);
        this.submitcall=this.submitcall.bind(this);






        this.state={
            username:'',
            schoolorinst:'School',
            schoolorinstname:'',
            position:'',
            schoolinstmailid:'',
            schoolinstphno:'',
            country:'',
            state:'',
            district:'',
            schoolinstaddress:'',
            password:'',
            cpassword:'',
            address:'',
            mailid:'',
            phno:''
        }
    }
    onChangeUsername(e){
        this.setState({
            username:e.target.value
        })
    }
    onChangeSchoolorinstitute(e){
        this.setState({
            schoolorinstname:e.target.value
        })
    }
    onChangeposition(e){
        this.setState({
            position:e.target.value
        })
    }
    onChangeschoolorinst(e){
        this.setState({
            schoolorinst:e.target.value
        })
    }
    onChangeschoolorinstmailid(e){
        this.setState({
            schoolinstmailid:e.target.value
        })
    }
    onChangeschoolorinstPhno(e){
        this.setState({
            schoolinstphno:e.target.value
        })
    }
    onChangeCountry(e){
        this.setState({
            country:e.target.value
        })
    }
    onChangeState(e){
        this.setState({
            state:e.target.value
        })
    }
    onChangeDistrict(e){
        this.setState({
            district:e.target.value
        })
    }
    onChangeschoolorinstaddress(e){
        this.setState({
            schoolinstaddress:e.target.value
        })
    }
    onChangePassword(e){
        this.setState({
            password:e.target.value
        })
    }
    onChangeconfirmPassword(e){
        this.setState({
            cpassword:e.target.value
        })
    }
    onChangeMailid(e){
        this.setState({
            mailid:e.target.value
        })
    }
    onChangePhno(e){
        this.setState({
            phno:e.target.value
        })
    }
    onChangeAddress(e){
        this.setState({
            address:e.target.value
        })
    }
    submitcall(e){
        e.preventDefault();

        var pswd1=this.state.password;
        var pswd2=this.state.cpassword;
        var schoolinstno=this.state.schoolinstphno;
        var pernosalno=this.state.phno;

        if(pswd1===pswd2 ){
            if(schoolinstno >= 11 || pernosalno >=11){ 

            const registeradminsnew={
                username:this.state.username,
                schoolorinst:this.state.schoolorinst,
                schoolorinstname:this.state.schoolorinstname,
                positionname:this.state.position,
                schoolinstmailid:this.state.schoolinstmailid,
                schoolinstphno:this.state.schoolinstphno,
                schoolorinstcountry:this.state.country,
                schoolorinststate:this.state.state,
                schoolorinstdistrict:this.state.district,
                schoolorinstaddress:this.state.schoolinstaddress,
                password:this.state.password,
                mailid:this.state.mailid,
                phno:this.state.phno    
            }

            console.log(registeradminsnew);

            axios.post("https://quizess.herokuapp.com/admin/add",registeradminsnew,{withCredentials:true}).then(res=>{console.log(res.data);}).catch(err=>{console.log(err)})
        }else{
            alert("phone numbers are more than 10 digits");
        }   
        }else{
            alert( `Both password and confirm password are not matching`);
        }
    }





    render(){

        return(
            <div>
                <Guestheader/>
                <div className="logincontent">
                    <div className="registerimage">
                    </div>
                    <div className="loginforms">
                        <p className="headertext">Admin Register</p>
                        <form onSubmit={this.submitcall}>
                            <input type="text" className="inputs2" placeholder="User name" onChange={this.onChangeUsername}/>
                            <select className="inputs2" onChange={this.onChangeschoolorinst}><option>School</option> <option>Institute</option></select>
                            <input type="text" className="inputs2" placeholder="School/Institute name"  onChange={this.onChangeSchoolorinstitute}/>
                            <input type="text" className="inputs2" placeholder="Position in School/Institute" onChange={this.onChangeposition}/>
                            <input type="email" className="inputs2" placeholder="School/Institute Mail Id" onChange={this.onChangeschoolorinstmailid}/>
                            <input type="Number" className="inputs2" placeholder="School/Institute Phno" onChange={this.onChangeschoolorinstPhno}/>
                            <input type="text" className="inputs2" placeholder="Country" onChange={this.onChangeCountry}/>
                            <input type="text" className="inputs2" placeholder="State" onChange={this.onChangeState}/>
                            <input type="text" className="inputs2" placeholder="District" onChange={this.onChangeDistrict}/>
                            <input type="text" className="inputs2" placeholder="School/Institute Address" onChange={this.onChangeschoolorinstaddress}/>
                            <input type="password" className="inputs2" placeholder="Password" onChange={this.onChangePassword}/>
                            <input type="password" className="inputs2" placeholder="Confirm Password" onChange={this.onChangeconfirmPassword}/>
                            <input type="address" className="inputs2" placeholder="Your address" onChange={this.onChangeAddress}/>
                            <input type="email" className="inputs2" placeholder="Your Mail Id" onChange={this.onChangeMailid}/>
                            <input type="Number" className="inputs2" placeholder="Your Phno" onChange={this.onChangePhno}/>

                            <input type="submit" value="Register" className="inputsbtn" />
                        </form>
                        <a href="/loginadmin" className="inputs2" style={{width:"50%" , color:"white",textDecoration:"none"}}>Already have an account?</a>
                        
                    </div>
                </div>
            </div>
        );
    };
}
export default registeradmin;