import React,{Component} from 'react';
import Headertemplate from "./headertemplate";
import './style.css';
import axios from 'axios';
import {UserConsumer} from '../context/authContext';

class homeadminstudent extends Component{
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
            phno:0,
            category:'',
            category2:'',
            standard:'',
            listdata:[{}],
            listdata2:[{}],
            irb:["sdf","sdfsdf","vdf","yy"],
            beforelist:[],
            newusername:'',
            newage:0,
            newstd:'',
            newfathername:'',
            newmothername:'',
            newfatherphno:'',
            newmotherphno:'',
            newaddress:'',
            newmail:'',
            newphno:0,

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
    onchangestd=(e)=>{
        this.setState({
            standard:e.target.value
        })
    }



    ///

    ///
    ///new form for update
    onchangenewusername=(e)=>{
        this.setState({
            newusername:e.target.value
        })
    }
    onchangenewage=(e)=>{
        this.setState({
            newage:e.target.value
        })
    }
    onchangenewstd=(e)=>{
        this.setState({
            newstd:e.target.value
        })
    }
    onchangenewfathername=(e)=>{
        this.setState({
            newfathername:e.target.value
        })
    }
    onchangenewmothername=(e)=>{
        this.setState({
            newmothername:e.target.value
        })
    }
    onchangenewfatherphno=(e)=>{
        this.setState({
            newfatherphno:e.target.value
        })
    }
    onchangenewmotherphno=(e)=>{
        this.setState({
            newmotherphno:e.target.value
        })
    }
    onchangenewaddress=(e)=>{
        this.setState({
            newaddress:e.target.value
        })
    }
    onchangenewmailid=(e)=>{
        this.setState({
            newmail:e.target.value
        })
    }
    onchangenewphno=(e)=>{
        this.setState({
            newphno:e.target.value
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
        console.log(ress.data);
        if(ress.data==="student added to database"){
            
        }else{
            alert(ress.data);
        }
        }).catch(err=>console.log(err))
    }
    onsubmitstudent=(e)=>{
        e.preventDefault();
        var resultscard=document.getElementById("resultcardviewid");
        resultscard.style.display="block";
        console.log("clicked");
        var category=document.getElementById("optioncat1").value;
        const finalss={
            standard:this.state.standard
        }
        const finalss2={
            username:this.state.standard
        }

        if(category==="Standard"){
            console.log("yes it is standard");
            axios.post("https://quizess.herokuapp.com/admin/updatestudentbystd",finalss,{withCredentials:true}).
            then(output=>{
                alert(output.data);
                this.setState({
                    listdata:output.data
                });
                console.log(output)}).catch(err=>{console.log(err)})
        }
        if(category==="Name"){            
            axios.post("https://quizess.herokuapp.com/admin/updatestudentbyname",finalss2,{withCredentials:true}).
            then(output=>{
                alert(output.data);
                this.setState({
                    listdata:output.data
                });
                }).catch(err=>{console.log(err)})
        }

    }
    //copy of update 1
    onsubmitstudentfordelete=(e)=>{
        e.preventDefault();
        var resultscard=document.getElementById("resultcardviewid2");
        resultscard.style.display="block";
        console.log("clicked");
        var category=document.getElementById("optioncat2").value;
        const finalss={
            standard:this.state.standard
        }
        const finalss2={
            username:this.state.standard
        }
        console.log(this.state.standard);

        if(category==="Standard"){
            console.log("yes it is standard");
            axios.post("https://quizess.herokuapp.com/admin/updatestudentbystd",finalss,{withCredentials:true}).then(output=>{
                this.setState({
                    listdata2:output.data
                });
                console.log(output)}).catch(err=>{console.log(err)})
        }
        if(category==="Name"){            
            axios.post("https://quizess.herokuapp.com/admin/updatestudentbyname",finalss2,{withCredentials:true}).then(output=>{
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

        axios.post("https://quizess.herokuapp.com/admin/updatestudentf",idss3,{withCredentials:true}).then((op)=>{this.setState({beforelist:op.data});console.log(op)}).catch(err=>{console.log(err)})
    }

    ondeletebuttonclick=(ids)=>{
        var listview=document.getElementById("resultcardviewid2");

        listview.style.display="none";

        var updateview=document.getElementById("updatecardview2");

        updateview.style.display="block";
        const idss3={
            ids:ids
        }

        axios.post("https://quizess.herokuapp.com/admin/updatestudentf",idss3,{withCredentials:true}).then((op)=>{this.setState({beforelist:op.data});console.log(op)}).catch(err=>{console.log(err)})
    }
    onsubmitupdatestudent=(e)=>{
        e.preventDefault();
        console.log(this.state.beforelist[0]._id);
        const updatefinal={ 
         usersid:this.state.beforelist[0]._id,
         itemnewusername:document.getElementById("bro").value,
         itemnewage:document.getElementById("bro2").value,
         itemnewstd:document.getElementById("bro3").value,
         itemnewfathername:document.getElementById("bro4").value,
         itemnewmothername:document.getElementById("bro5").value,
         itemnewfatherphno:document.getElementById("bro6").value,
         itemnewmotherphno:document.getElementById("bro7").value,
         itemnewaddress:document.getElementById("bro8").value,
         itemnewmailid:document.getElementById("bro9").value,
         itemnewphno:document.getElementById("bro10").value,
        }
        axios.post("https://quizess.herokuapp.com/admin/finalupdatestudent",updatefinal,{withCredentials:true}).then((ress)=>{console.log(ress)}).catch((err)=>{console.log(err)})


        // console.log(itemnewusername+itemnewage+itemnewstd+itemnewfathername+itemnewfatherphno+itemnewmothername+itemnewmotherphno+itemnewaddress+itemnewmailid+itemnewphno);
    }

    //copy of fun 2

    onsubmitdeletestudent=(e)=>{
        e.preventDefault();
        
        console.log(this.state.beforelist[0]._id);
        const updatefinal={ 
         usersid:this.state.beforelist[0]._id,
        }
        axios.post("https://quizess.herokuapp.com/admin/finaldeletestudent",updatefinal,{withCredentials:true}).then((ress)=>{console.log(ress)}).catch((err)=>{console.log(err)})


        // console.log(itemnewusername+itemnewage+itemnewstd+itemnewfathername+itemnewfatherphno+itemnewmothername+itemnewmotherphno+itemnewaddress+itemnewmailid+itemnewphno);
    }
    
    
    
    render(){
        {

            this.addstudent=()=>{
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

            this.updatestudent=()=>{
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

            this.deletestudent=()=>{
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
                    <p>Student's info</p>
                    <div className="adminstdcred">
                                             
                        <button  className="cardview" onClick={this.addstudent}>Add Student</button>
                        <button  className="cardview" onClick={this.updatestudent}>Update Student</button>
                        <button className="cardview" onClick={this.deletestudent}>Delete Student</button>

                    </div>
                </div>

                <div  className="backgroundimg" id="backgroundimgid"></div>

                <div className="logincontentadminstdc" id="first" style={{marginLeft:"8%",marginTop:"20%"}}>
                    <div className="registerimage" ></div>
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

                            <input type="submit" value="create student" className="inputsbtn" />
                        </form>
                        
                    </div>
                </div>


                <div>
                    <form className="forms2" id="second" onSubmit={this.onsubmitstudent}> 
     
                        <select style={{marginRight:"1%",outline:"none",border:"none",boxShadow:" 0 0px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19)"}} id="optioncat1" className="searchtexts" onChange={this.onchangecategory}><option>Name</option><option>Reg</option><option>Standard</option></select>

                        <input type="text" placeholder="Search any student related to this institute" className="searchtext" id="searchtexts" onChange={this.onchangestd}/>
                        <input type="submit" value="Search" className="searchbtn"/>
                    </form>
                </div>


                <div>
                    <form className="forms3" id="third" onSubmit={this.onsubmitstudentfordelete}>
     
                        <select style={{marginRight:"1%",outline:"none",border:"none",boxShadow:" 0 0px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19)"}} id="optioncat2" className="searchtexts" onChange={this.onchangecategory2}><option>Name</option><option>Regno</option><option>Standard</option></select>

                        <input type="text" placeholder="Search any student related to this institute" className="searchtext"  onChange={this.onchangestd}/>
                        <input type="submit" value="Search" className="searchbtn"/>
                    </form>
                </div>

                <div className="resultcardview " id="resultcardviewid">
                        <table className="tables">
                            <tr className="throws">
                                <th className="tds" style={{fontWeight:"bold"}}>Name</th>
                                <th className="tds" style={{fontWeight:"bold"}}>Age</th>
                                <th className="tds" style={{fontWeight:"bold"}}>Standard</th>
                                <th></th>
                            </tr>
                            {this.state.listdata.map((use)=>
                            
                            <tr key={use._id} className="tdrows">
                                <td className="tds">{use.username}</td>
                                <td className="tds"><p>{use.age}</p></td>
                                <td className="tds"><p>{use.stdinschoolorinst}</p></td>
                                <td className="tds"><button className="searchbtn" onClick={()=>{this.onupdatebuttonclick(use._id)}}>Update</button></td>
                                
                            </tr>
                            
                            )}
                        </table>
                   
                    

                </div>





                <div className="resultcardview" id="resultcardviewid2">
                        <table className="tables">
                            <tr className="throws">
                                <th className="tds" style={{fontWeight:"bold"}}>Name</th>
                                <th className="tds" style={{fontWeight:"bold"}}>Age</th>
                                <th className="tds" style={{fontWeight:"bold"}}>Standard</th>
                                <th></th>
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






                <div className="updatecardview" id="updatecardview">
                        {this.state.beforelist.map((before)=>
                        <form key={before._id}  onSubmit={this.onsubmitupdatestudent}>
                        <table className="tables" style={{overflow:"auto"}}>
                        <tr className="throws"><th className="ths">Contents</th><th className="ths">details</th></tr>
                            
                            <tr className="tdrows"><td className="tds" >Username</td><td className="tds"><input id="bro" className="inputsss"  type="text" placeholder={before.username}  onChange={this.onchangenewusername}/></td></tr>
                            <tr className="tdrows"><td className="tds">standard</td><td className="tds"><input id="bro3" className="inputsss" type="text" placeholder={before.stdinschoolorinst}  onChange={this.onchangenewstd}/></td></tr>
                            <tr className="tdrows"><td className="tds">Age    </td><td className="tds"><input id="bro2" className="inputsss" type="Number" placeholder={before.age}  onChange={this.onchangenewage}/></td></tr>
                            <tr className="tdrows"><td className="tds">Fathername</td><td className="tds"><input id="bro4" className="inputsss" type="text" placeholder={before.fathername}  onChange={this.onchangenewfathername}/></td></tr>
                            <tr className="tdrows"><td className="tds">Mothername</td><td className="tds"><input id="bro5" className="inputsss" type="text" placeholder={before.mothername}  onChange={this.onchangenewmothername}/></td></tr>
                            <tr className="tdrows"><td className="tds">Father phno</td><td className="tds"><input id="bro6" className="inputsss" type="Number" placeholder={before.fatherphno}  onChange={this.onchangenewfatherphno}/></td></tr>
                            <tr className="tdrows"><td className="tds">Mother phno</td><td className="tds"><input id="bro7" className="inputsss" type="Number" placeholder={before.motherphno}  onChange={this.onchangenewmotherphno}/></td></tr>
                            <tr className="tdrows"><td className="tds">Address</td><td className="tds"><input id="bro8" className="inputsss" type="text" placeholder={before.address}  onChange={this.onchangenewaddress}/></td></tr>
                            <tr className="tdrows"><td className="tds">Mailid</td><td className="tds"><input id="bro9" className="inputsss" type="email" placeholder={before.mailid}  onChange={this.onchangenewmailid}/></td></tr>
                            <tr className="tdrows"><td className="tds">Phno</td><td className="tds"><input id="bro10" className="inputsss" type="Number" placeholder={before.phno}  onChange={this.onchangenewphno}/></td></tr>
                            <tr className="tdrows"><td className="tds"><button className="searchbtn">Update</button></td></tr>
                            
                            </table>
                        </form>
                            
                        )}
                        
                            
                   
                </div>




                <div className="updatecardview" id="updatecardview2">
                                        
                        {this.state.beforelist.map((before)=>
                        <form key={before._id} onSubmit={this.onsubmitdeletestudent}>
                        <table className="tables">
                            <tr className="tdrows"><td className="tds">Username</td><td className="tds">{before.username} </td></tr>
                            <tr className="tdrows"><td className="tds">standard</td><td className="tds">{before.stdinschoolorinst} </td></tr>
                            <tr className="tdrows"><td className="tds">Age    </td><td className="tds">{before.age} </td></tr>
                            <tr className="tdrows"><td className="tds">Fathername</td><td className="tds">{before.fathername} </td></tr>
                            <tr className="tdrows"><td className="tds">Mothername</td><td className="tds">{before.mothername}  </td></tr>
                            <tr className="tdrows"><td className="tds">Father phno</td><td className="tds">{before.fatherphno}  </td></tr>
                            <tr className="tdrows"><td className="tds">Mother phno</td><td className="tds">{before.motherphno}  </td></tr>
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
            {username.value1===false &&<>
                lol
            </>}
                </div>
                
            }}
            </UserConsumer>
        );
    };
}
export default homeadminstudent;