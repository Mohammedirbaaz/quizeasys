import React,{Component} from 'react';
import Headertemplate from "./headertemplatestudent";
import './style.css'
import axios from 'axios';

class homestudentteacher extends Component{
    constructor(){
        super();
        this.state={
            listdata:[{}],
            searchtexts:'',
            beforelist:[{}],
            listdata2:[{}]
        }
    }
    onchangetext=(e)=>{
        this.setState({
            searchtexts:e.target.value
        })
    }
    onupdatebuttonclick=(ids)=>{
        var listview=document.getElementById("resultcardviewid2");

        listview.style.display="none";

        var updateview=document.getElementById("updatecardview2");

        updateview.style.display="block";
        const idss3={
            ids:ids
        }

        axios.post("https://quizess.herokuapp.com/admin/updateteacherf",idss3,{withCredentials:true}).then((op)=>{this.setState({beforelist:op.data});console.log(op)}).catch(err=>{console.log(err)})
    }

    onsubmitupdatesearch=(e)=>{
        e.preventDefault();
        var resultscard=document.getElementById("resultcardviewid2");
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
            axios.post("https://quizess.herokuapp.com/student/updateteacherbystd",finalss,{withCredentials:true}).then(output=>{
                alert(output.data);
                this.setState({
                    listdata2:output.data
                });
                console.log(output)}).catch(err=>{console.log(err)})
        }
        if(category==="Name"){            
            axios.post("https://quizess.herokuapp.com/student/updateteacherbyname",finalss2,{withCredentials:true}).
            then(output=>{
                alert(output.data);
                this.setState({
                    listdata2:output.data
                });
                console.log(this.state.listdata2)}).catch(err=>{console.log(err)})
        }
    }

    render(){
        
        return(
            <div>
                <Headertemplate/>
                                
                <div>
                    <form className="forms22" id="second" onSubmit={this.onsubmitupdatesearch}>
     
                        <select style={{marginRight:"1%",outline:"none",border:"none",boxShadow:" 0 0px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19)"}} className="searchtexts" onChange={this.onchangecategory} id="optioncat1"><option>Name</option><option>Reg</option><option>Standard</option></select>

                        <input type="text" placeholder="Search any teacher related to this institute" className="searchtext" onChange={this.onchangesearchtext}/>
                        <input type="submit" value="Search" className="searchbtn"/>
                    </form>
                </div>

                <div className="resultcardview snd" id="resultcardviewid2">
                        <table className="tables">
                            <tr className="throws">
                                <th className="ths" style={{fontWeight:"bold"}}>Name</th>
                                <th className="ths" style={{fontWeight:"bold"}}>Age</th>
                                <th className="ths" style={{fontWeight:"bold"}}>View</th>

                            </tr>
                            {this.state.listdata2.map((use)=>
                            
                        
                            <tr key={use._id} className="tdrows" >
                                <td className="tds">{use.username}</td>
                                <td className="tds"><p>{use.age}</p></td>
                                <td className="tds">< button className="searchbtn" style={{padding:"2%",paddingLeft:"5%",paddingRight:"5%"}} onClick={()=>{this.onupdatebuttonclick(use._id)}}>View</button></td>
                                
                            </tr>
                            
                            )}
                        </table>
                   
                    

                </div>


                <div className="resultcardview snd" id="updatecardview2">
                    
                    
                    
                        {this.state.beforelist.map((before)=>
                        <form key={before._id} >
                        <table className="tables">
                            <tr className="tdrows"><td className="tds">Username</td><td className="tds">{before.username} </td></tr>
                            <tr className="tdrows"><td className="tds">school/institute name</td><td className="tds">{before.schoolorinstname} </td></tr>
                            <tr className="tdrows"><td className="tds">Age    </td><td className="tds">{before.age} </td></tr>
                            <tr className="tdrows"><td className="tds">position name</td><td className="tds">{before.positionname} </td></tr>
                            <tr className="tdrows"><td className="tds">qualification</td><td className="tds">{before.qualification}  </td></tr>
                            <tr className="tdrows"><td className="tds">Address</td><td className="tds">{before.address} </td></tr>
                            <tr className="tdrows"><td className="tds">Mailid</td><td className="tds">{before.mailid}  </td></tr>
                            <tr className="tdrows"><td className="tds">Phno</td><td className="tds">{before.phno} </td></tr>
                            
                            </table>
                        </form>
                            
                        )}
                        
                            
                   
                </div>


                
            </div>  
        );
    };
}
export default homestudentteacher;