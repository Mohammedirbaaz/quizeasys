import React,{Component} from 'react';
import Headertemplate from "./headertemplate";
import './style.css';
import axios from 'axios';
import {UserConsumer} from '../context/authContext';

class homeadminteacher extends Component{

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
            phno:'',
            category:'',
            searchtexts:'',
            listdata:[{}],
            beforelist:[{}],
            listdata2:[{}],
            category2:'',
            searchtexts2:''

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


    ///

    onchangecategory=(e)=>{
        this.setState({
            category:e.target.value
        })
    }
    onchangecategory2=(e)=>{
        this.setState({
            category2:e.target.value
        })
    }
    onchangesearchtext=(e)=>{
        this.setState({
            searchtexts:e.target.value
        })
        
    }
    onchangesearchtext2=(e)=>{
        this.setState({
            searchtexts2:e.target.value
        })
        console.log(this.state.searchtexts2);
        
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
        console.log(registerteachernew);
        axios.post("https://quizess.herokuapp.com/teacher/add",registerteachernew,{withCredentials:true}).then(ress=>{alert(ress.data)}).catch(err=>{console.log(err)});



    }


    onsubmitupdatesearch=(e)=>{
        e.preventDefault();
        var resultscard=document.getElementById("resultcardviewid");
        resultscard.style.display="block";
        console.log("clicked");
        var category=document.getElementById("optioncat1").value;
        const finalss={
            searchtexts:this.state.searchtexts
        }
        const finalss2={
            username:this.state.searchtexts
        }

        if(category==="Standard"){
            console.log("yes it is standard");
            axios.post("https://quizess.herokuapp.com/admin/updateteacherbystd",finalss,{withCredentials:true}).then(output=>{
                alert(output.data);    
            this.setState({
                    listdata:output.data
                });
                }).catch(err=>{console.log(err)})
        }
        if(category==="Name"){            
            axios.post("https://quizess.herokuapp.com/admin/updateteacherbyname",finalss2,{withCredentials:true}).then(output=>{
                alert(output.data);    
                this.setState({
                    listdata:output.data
                });
                console.log(this.state.listdata)}).catch(err=>{console.log(err)})
        }
    }
    onsubmitteacherfordelete=(e)=>{
        e.preventDefault();
        var resultscard=document.getElementById("resultcardviewid2");
        resultscard.style.display="block";
        console.log("clicked");
        var category=document.getElementById("optioncat2").value;
        
        const finalss={
            standard:this.state.searchtexts2
        }
        const finalss2={
            username:this.state.searchtexts2
        }
        console.log("valur is "+this.state.searchtexts2);

        if(category==="Standard"){
            console.log("yes it is standard");
            axios.post("https://quizess.herokuapp.com/admin/updateteacherbystd",finalss,{withCredentials:true}).then(output=>{
                alert(output.data);
                this.setState({
                    listdata2:output.data
                });
                }).catch(err=>{console.log(err)})
        }
        if(category==="Name"){            
            axios.post("https://quizess.herokuapp.com/admin/updateteacherbyname",finalss2,{withCredentials:true}).then(output=>{
                alert(output.data);
                this.setState({
                    listdata2:output.data
                });
                }).catch(err=>{console.log(err)})
        }

    }



    

    onupdatebuttonclick=(ids)=>{
        var listview=document.getElementById("resultcardviewid");

        listview.style.display="none";

        var updateview=document.getElementById("updatecardview");

        updateview.style.display="block";
        const idss3={
            ids:ids
        }

        axios.post("https://quizess.herokuapp.com/admin/updateteacherf",idss3,{withCredentials:true}).then((op)=>{this.setState({beforelist:op.data});console.log(op)}).catch(err=>{console.log(err)})
    }

    ondeletebuttonclick=(ids)=>{
        var listview=document.getElementById("resultcardviewid2");

        listview.style.display="none";

        var updateview=document.getElementById("updatecardview2");

        updateview.style.display="block";
        const idss3={
            ids:ids
        }

        axios.post("https://quizess.herokuapp.com/admin/updateteacherf",idss3,{withCredentials:true}).then((op)=>{this.setState({beforelist:op.data});console.log(op)}).catch(err=>{console.log(err)})
    }


    onsubmitupdateteacher=(e)=>{
        e.preventDefault();
        console.log(this.state.beforelist[0]._id);
        const updatefinal={ 
         usersid:this.state.beforelist[0]._id,
         itemnewusername:document.getElementById("bro").value,
         itemnewage:document.getElementById("bro2").value,
         itemnewschoolinstname:document.getElementById("bro3").value,
         itemnewaposition:document.getElementById("bro4").value,
         itemnewqualification:document.getElementById("bro5").value,
         itemnewaddress:document.getElementById("bro8").value,
         itemnewmailid:document.getElementById("bro9").value,
         itemnewphno:document.getElementById("bro10").value,
        }
        axios.post("https://quizess.herokuapp.com/admin/finalupdateteacher",updatefinal,{withCredentials:true}).then((ress)=>{console.log(ress)}).catch((err)=>{console.log(err)})


        // console.log(itemnewusername+itemnewage+itemnewstd+itemnewfathername+itemnewfatherphno+itemnewmothername+itemnewmotherphno+itemnewaddress+itemnewmailid+itemnewphno);
    }

    onsubmitdeletestudent=(e)=>{
        e.preventDefault();
        
        console.log(this.state.beforelist[0]._id);
        const updatefinal={ 
         usersid:this.state.beforelist[0]._id,
        }
        axios.post("https://quizess.herokuapp.com/admin/finaldeleteteacher",updatefinal,{withCredentials:true}).then((ress)=>{console.log(ress)}).catch((err)=>{console.log(err)})


        // console.log(itemnewusername+itemnewage+itemnewstd+itemnewfathername+itemnewfatherphno+itemnewmothername+itemnewmotherphno+itemnewaddress+itemnewmailid+itemnewphno);
    }

    
    render(){
        {

            this.addteacher=()=>{
                const item=document.getElementById("first");
                const item2=document.getElementById("second");
                const item3=document.getElementById("third");
                const backg=document.getElementById("backgroundimgid");
                const item4=document.getElementById("resultcardviewid");
                const item5=document.getElementById("resultcardviewid2");
                const item6=document.getElementById("updatecardview");
                const item7=document.getElementById("updatecardview2");



                var x = window.matchMedia("(max-width: 768px)")
                if(x.matches){
                    item.style.display = "block";
                }else{
                    item.style.display="flex";

                }
                item2.style.display="none";
                item3.style.display="none";
                backg.style.display="none";
                item4.style.display="none";
                item5.style.display="none";
                item6.style.display="none";
                item7.style.display="none";


            }

            this.updateteacher=()=>{
                const item=document.getElementById("first");
                const item2=document.getElementById("second");
                const item3=document.getElementById("third");
                const backg=document.getElementById("backgroundimgid");
                const item4=document.getElementById("resultcardviewid");
                const item5=document.getElementById("resultcardviewid2");
                const item6=document.getElementById("updatecardview");
                const item7=document.getElementById("updatecardview2");



                item.style.display="none";
                item2.style.display="block";
                item3.style.display="none";
                backg.style.display="none";
                item4.style.display="none";
                item5.style.display="none";
                item6.style.display="none";
                item7.style.display="none";


            }

            this.deleteteacher=()=>{
                const item=document.getElementById("first");
                const item2=document.getElementById("second");
                const item3=document.getElementById("third");
                const backg=document.getElementById("backgroundimgid");
                const item4=document.getElementById("resultcardviewid");
                const item5=document.getElementById("resultcardviewid2");
                const item6=document.getElementById("updatecardview");
                const item7=document.getElementById("updatecardview2");



                item.style.display="none";
                item2.style.display="none";
                item3.style.display="block";
                backg.style.display="none";
                item4.style.display="none";
                item5.style.display="none";
                item6.style.display="none";
                item7.style.display="none";


            }
        }
        return(
            <UserConsumer>
                {username=>{
                    return <div>
                        {username.value1===true && <> 
            <div>
                <Headertemplate/>
                <div className="containers"> 
                <div className="adminstudent">
                    <p>Teacher's info</p>
                    <div className="adminstdcred">
                        
                        
                        <button  className="cardview" onClick={this.addteacher}>Add Teacher</button>
                        <button  className="cardview" onClick={this.updateteacher}>Update Teacher</button>
                        <button className="cardview" onClick={this.deleteteacher}> Delete Teacher</button>

                    </div>
                </div>
                <div  className="backgroundimg" id="backgroundimgid"></div>

                <div className="logincontentadminstdc" id="first" style={{marginLeft:"8%",marginTop:"20%"}}>
                    <div className="registerimage"></div>
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

                            <input type="submit" value="register teacher" className="inputsbtn" />
                        </form>
                        
                        
                    </div>
                </div>


                
                <div>
                    <form className="forms2" id="second" onSubmit={this.onsubmitupdatesearch}>
     
                        <select style={{marginRight:"1%",outline:"none",border:"none",boxShadow:" 0 0px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19)"}} className="searchtexts" onChange={this.onchangecategory} id="optioncat1"><option>Name</option><option>Reg</option><option>Standard</option></select>

                        <input type="text" placeholder="Search any teacher related to this institute" className="searchtext" onChange={this.onchangesearchtext}/>
                        <input type="submit" value="Search" className="searchbtn"/>
                    </form>
                </div>


                <div>
                    <form className="forms3" id="third" onSubmit={this.onsubmitteacherfordelete}>
     
                        <select style={{marginRight:"1%",outline:"none",border:"none",boxShadow:" 0 0px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19)"}} className="searchtexts" onChange={this.onchangecategory2} id="optioncat2"><option>Name</option><option>Regno</option><option>Standard</option></select>

                        <input type="text" placeholder="Search any teacher related to this institute" className="searchtext"  onChange={this.onchangesearchtext2}/>
                        <input type="submit" value="Search" className="searchbtn"/>
                    </form>
                </div>


                <div className="resultcardview" id="resultcardviewid">
                        <table className="tables">
                            <tr className="throws">
                                <th className="ths" style={{fontWeight:"bold"}}>Name</th>
                                <th className="ths" style={{fontWeight:"bold"}}>Age</th>
                                <th className="ths" style={{fontWeight:"bold"}}>Standard</th>
                                <th className="ths"></th>
                            </tr>
                            {this.state.listdata.map((use)=>
                            
                        
                            <tr key={use._id} className="tdrows">
                                <td className="tds">{use.username}</td>
                                <td className="tds"><p>{use.age}</p></td>
                                <td className="tds"><p>{use.stdinschoolorinst}</p></td>
                                <td className="tds"><button onClick={()=>{this.onupdatebuttonclick(use._id)}} className="searchbtn">Update</button></td>
                                
                            </tr>
                            
                            )}
                        </table>
                   
                    

                </div>




                <div className="updatecardview" id="updatecardview">
                                        
                        {this.state.beforelist.map((before)=>
                        <form key={before._id} onSubmit={this.onsubmitupdateteacher}>
                        <table className="tables">
                            <tr className="tdrows"><td className="tds">Username</td>            <td className="tds"><input id="bro" type="text" placeholder={before.username}  onChange={this.onchangenewusername}/></td></tr>
                            <tr className="tdrows"><td className="tds">School/Instituename</td> <td className="tds"><input id="bro3" type="text" placeholder={before.schoolorinstname}  onChange={this.onchangenewstd}/></td></tr>
                            <tr className="tdrows"><td className="tds">Age    </td>             <td className="tds"><input id="bro2" type="Number" placeholder={before.age}  onChange={this.onchangenewage}/></td></tr>
                            <tr className="tdrows"><td className="tds">Positionname</td>        <td className="tds"><input id="bro4" type="text" placeholder={before.positionname}  onChange={this.onchangenewfathername}/></td></tr>
                            <tr className="tdrows"><td className="tds">Qualification</td>       <td className="tds"><input id="bro5" type="text" placeholder={before.qualification}  onChange={this.onchangenewmothername}/></td></tr>
                            <tr className="tdrows"><td className="tds">Address</td>             <td className="tds"><input id="bro8" type="text" placeholder={before.address}  onChange={this.onchangenewaddress}/></td></tr>
                            <tr className="tdrows"><td className="tds">Mailid</td>              <td className="tds"><input id="bro9" type="email" placeholder={before.mailid}  onChange={this.onchangenewmailid}/></td></tr>
                            <tr className="tdrows"><td className="tds">Phno</td>                <td className="tds"><input id="bro10" type="Number" placeholder={before.phno}  onChange={this.onchangenewphno}/></td></tr>
                            <tr className="tdrows"><td className="tds"><button className="searchbtn">Update</button></td></tr>
                            
                        </table>
                        </form>
                            
                        )}
                        
                            
                   
                </div>


                <div className="resultcardview" id="resultcardviewid2">
                        <table className="tables">
                            <tr className="throws">
                                <th className="ths" style={{fontWeight:"bold"}}>Name</th>
                                <th className="ths" style={{fontWeight:"bold"}}>Age</th>
                                <th className="ths" style={{fontWeight:"bold"}}>Standard</th>
                                <th className="ths"></th>
                            </tr>
                            {this.state.listdata2.map((use)=>
                            
                        
                            <tr key={use._id} >
                                <td className="tds">{use.username}</td>
                                <td className="tds"><p>{use.age}</p></td>
                                <td className="tds"><p>{use.stdinschoolorinst}</p></td>
                                <td className="tds"><button className="searchbtn" onClick={()=>{this.ondeletebuttonclick(use._id)}}>View</button></td>
                                
                            </tr>
                            
                            )}
                        </table>
                   
                    

                </div>


                <div className="updatecardview" id="updatecardview2">
                     {this.state.beforelist.map((before)=>
                        <form key={before._id} onSubmit={this.onsubmitdeletestudent}>
                        <table className="tables">
                            <tr className="tdrows"><td className="tds">Username</td><td className="tds">{before.username} </td></tr>
                            <tr className="tdrows"><td className="tds">school/institute name</td><td className="tds">{before.schoolorinstname} </td></tr>
                            <tr className="tdrows"><td className="tds">Age    </td><td className="tds">{before.age} </td></tr>
                            <tr className="tdrows"><td className="tds">position name</td><td className="tds">{before.positionname} </td></tr>
                            <tr className="tdrows"><td className="tds">qualification</td><td className="tds">{before.qualification}  </td></tr>
                            <tr className="tdrows"><td className="tds">Address</td><td className="tds">{before.address} </td></tr>
                            <tr className="tdrows"><td className="tds">Mailid</td><td className="tds">{before.mailid}  </td></tr>
                            <tr className="tdrows"><td className="tds">Phno</td><td className="tds">{before.phno} </td></tr>
                            <tr className="tdrows"><td className="tds"><button className="searchbtn">Delete</button></td></tr>
                            
                            </table>
                        </form>
                            
                        )}
                        
                            
                   
                </div>
            </div>
            </div>
            </>}
            {username.value1===false && <>lol</>}  
            </div>
                }}
        </UserConsumer>
        );
    };
}
export default homeadminteacher;