import React,{Component} from 'react';
import Headertemplateteacher from "./headertemplateteacher";
import './style.css';
import axios from 'axios';
import {UserConsumer} from '../context/authContext';

class hometeacherteacher extends Component{

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
            axios.post("https://quizess.herokuapp.com/admin/updatestudentbystd",finalss,{withCredentials:true}).then(output=>{
                this.setState({
                    listdata:output.data
                });
                console.log(output)}).catch(err=>{console.log(err)})
        }
        if(category==="Name"){            
            axios.post("https://quizess.herokuapp.com/admin/updateteacherbyname",finalss2,{withCredentials:true}).then(output=>{
            
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
            axios.post("https://quizess.herokuapp.com/teacher/updateteacherbystd",finalss,{withCredentials:true}).then(output=>{
                this.setState({
                    listdata2:output.data
                });
                console.log(output)}).catch(err=>{console.log(err)})
        }
        if(category==="Name"){            
            axios.post("https://quizess.herokuapp.com/teacher/updateteacherbyname",finalss2,{withCredentials:true}).then(output=>{
                console.log("yes it is name");
            
                this.setState({
                    listdata2:output.data
                });
                console.log(this.state.listdata2)}).catch(err=>{console.log(err)})
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
        axios.post("https://quizess.herokuapp.com/teacher/finaldeleteteacher",updatefinal,{withCredentials:true}).then((ress)=>{console.log(ress)}).catch((err)=>{console.log(err)})


        // console.log(itemnewusername+itemnewage+itemnewstd+itemnewfathername+itemnewfatherphno+itemnewmothername+itemnewmotherphno+itemnewaddress+itemnewmailid+itemnewphno);
    }

    
    render(){
        {

            this.addteacher=()=>{
                const item=document.getElementById("first");
                const item2=document.getElementById("second");
                const item3=document.getElementById("third");
                const backg=document.getElementById("backgroundimgid");


                item.style.display="flex";
                item2.style.display="none";
                item3.style.display="none";
                backg.style.display="none";

            }

            this.updateteacher=()=>{
                const item=document.getElementById("first");
                const item2=document.getElementById("second");
                const item3=document.getElementById("third");
                const backg=document.getElementById("backgroundimgid");



                item.style.display="none";
                item2.style.display="block";
                item3.style.display="none";
                backg.style.display="none";


            }

            this.deleteteacher=()=>{


                const item3=document.getElementById("third");
                const backg=document.getElementById("backgroundimgid");


                item3.style.display="block";
                backg.style.display="none";


            }
        }
        return(
            <UserConsumer>
                {username=>{
                    return <div>
                        {username.value1===true && <> 
            <div>
                <Headertemplateteacher/>
                <div className="adminstudent">
                    <p>Teacher's info</p>
                    <div className="adminstdcred">
                        
                        
                        
                        <button className="cardview" onClick={this.deleteteacher}> View Teacher</button>

                    </div>
                </div>
                <div  className="backgroundimg" id="backgroundimgid"></div>

                <div>
                    <form className="forms3" id="third"  onSubmit={this.onsubmitteacherfordelete}>
     
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
                                <th ></th>
                            </tr>
                            {this.state.listdata.map((use)=>
                            
                        
                            <tr key={use._id} className="tdrows">
                                <td className="tds">{use.username}</td>
                                <td className="tds"><p>{use.age}</p></td>
                                <td className="tds"><p>{use.stdinschoolorinst}</p></td>
                                <td ><button className="searchbtn" onClick={()=>{this.onupdatebuttonclick(use._id)}}>Update</button></td>
                                
                            </tr>
                            
                            )}
                        </table>
                   
                    

                </div>

                <div className="resultcardview" id="resultcardviewid2">
                        <table className="tables">
                            <tr className="throws">
                                <th className="ths" style={{fontWeight:"bold"}}>Name</th>
                                <th className="ths" style={{fontWeight:"bold"}}>Age</th>
                                <th className="ths" style={{fontWeight:"bold"}}>Standard</th>
                                <th></th>
                            </tr>
                            {this.state.listdata2.map((use)=>
                            
                        
                            <tr key={use._id} className="tdrows">
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
                        <form key={before._id} >
                        <table className="tables">
                            <tr className="tdrows"><td className="tds">Username</td>                <td className="tds">{before.username} </td></tr>
                            <tr className="tdrows"><td className="tds">school/institute name</td>   <td className="tds">{before.schoolorinstname} </td></tr>
                            <tr className="tdrows"><td className="tds">Age    </td>                 <td className="tds">{before.age} </td></tr>
                            <tr className="tdrows"><td className="tds">position name</td>           <td className="tds">{before.positionname} </td></tr>
                            <tr className="tdrows"><td className="tds">qualification</td>           <td className="tds">{before.qualification}  </td></tr>
                            <tr className="tdrows"><td className="tds">Address</td>                 <td className="tds">{before.address} </td></tr>
                            <tr className="tdrows"><td className="tds">Mailid</td>                  <td className="tds">{before.mailid}  </td></tr>
                            <tr className="tdrows"><td className="tds">Phno</td>                    <td className="tds">{before.phno} </td></tr>
                            
                            </table>
                        </form>
                            
                        )}
                        
                            
                   
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
export default hometeacherteacher;