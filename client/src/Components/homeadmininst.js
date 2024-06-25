import React,{Component} from 'react';
import axios from 'axios';
import './style.css';
import Headertemplate from '../Components/headertemplate';

var depttext=new Array();
var subarr=new Array();
var ansnew=new Array();
var ansnew2=new Array();

var addepttext=new Array();
var adsubarr=new Array();
var adansnew=new Array();
var adansnew2=new Array();


class homeadmininst extends Component{
    constructor(){
        super();
        this.state={
            noofdept:0,
            schoolorinst:'',
            schoolorinstinfo:{},
            noofdeptadd:0,
            departmentinfo:[],
            finalyearinfo:[{}]

        }
    }
    componentDidMount(){
        axios.get("https://quizess.herokuapp.com/admin/bruh",{withCredentials:true}).then((res)=>{this.setState({schoolorinst:res.data});}).catch(err=>{console.log(err);})
    }

    onchangeno=(e)=>{
        this.setState({
            noofdept:e.target.value
        })
    }
    onchange2=(e)=>{
        this.setState({
            noofdeptadd:e.target.value
        })
    }


    noofdepartment=()=>{
        var inputdepartment=document.getElementById("inputdepartment");
        inputdepartment.style.display="block";
        
    }
    
    onsubmitnoofdept=(e)=>{
        e.preventDefault();
        var numdept=this.state.noofdept;
        parseInt(numdept);
        var inputdepartment=document.getElementById("inputfordepartment");

        if(numdept>=1 ){
            var lengths=depttext.length;
            
            if(lengths!=numdept || !lengths>=numdept){
                var tables=document.createElement("table");
                var ids=null
                ids=document.getElementById("idofhead");
                if(ids===null){ 
                var tr0=document.createElement("tr");
                tr0.setAttribute("id","idofhead");

                var td0=document.createElement("td");
                var td01=document.createElement("td");

                var th1=document.createElement("th");
                var th2=document.createElement("th");

                if(this.state.schoolorinst==="Institute"){ 
                    th1.innerHTML="Department name";
                    th2.innerHTML="end year";
                }else if(this.state.schoolorinst==="School"){
                    th1.innerHTML="Standard ";
                    th2.innerHTML="Section name";
                }
                td0.appendChild(th1);
                td01.appendChild(th2);

                tr0.appendChild(td0);
                tr0.appendChild(td01);
                tables.appendChild(tr0);
                }else if(lengths>=numdept){
                    for(var i=lengths-1;i>=numdept;i--){
                        var removehead=document.getElementById("idtr"+i);
                        depttext.length--;
                        subarr.length--;
                        removehead.remove();
                    }
                }
            
            for(var i=lengths;i<numdept;i++){
                var tr1=document.createElement("tr");
                tr1.setAttribute("id","idtr"+i);
            
                var td1=document.createElement("td");
                td1.setAttribute("id","idtd"+i);
                var td2=document.createElement("td");
                td2.setAttribute("id","idtd"+i);


                depttext[i]=document.createElement("INPUT");
                depttext[i].setAttribute("type","text");
                depttext[i].setAttribute("placeholder","department name");
                depttext[i].setAttribute("id","iddept"+i);


                subarr[i]=document.createElement("INPUT");
                subarr[i].setAttribute("type","number");
                subarr[i].setAttribute("placeholder","final year (eg : 5)");
                subarr[i].setAttribute("id","idsection"+i);

               
                

                
                

                td1.appendChild(depttext[i]);
                td2.appendChild(subarr[i]);
                



                
                tr1.appendChild(td1);
                tr1.appendChild(td2);
                

                tables.appendChild(tr1);

                
                inputdepartment.appendChild(tables);

            }

            var btnfinder=null;
            btnfinder=document.getElementById("btnids");
            if(btnfinder===null){
                    var btnss=document.createElement("BUTTON");
                    var texts=document.createTextNode("Add department");
                    btnss.setAttribute("id","btnids");
                    btnss.addEventListener("click",this.onsubmitdepart);
                    btnss.appendChild(texts);
                    inputdepartment.appendChild(btnss);
            }
            else{
                btnfinder.remove();
                var btnss=document.createElement("BUTTON");
                var texts=document.createTextNode("Add department");
                btnss.setAttribute("id","btnids");
                btnss.addEventListener("click",this.onsubmitdepart);
                btnss.appendChild(texts);
                inputdepartment.appendChild(btnss);
            }
            }
        }        
    }

    adddepartment=()=>{
        axios.get("https://quizess.herokuapp.com/admin/schoolorinstinfo",{withCredentials:true}).then((res)=>{ this.setState({schoolorinstinfo:res.data});console.log(this.state.schoolorinstinfo);    
        var addpart=document.getElementById("addfordepartment");
        addpart.style.display="block";

        var presentfinder=null;
        presentfinder=document.getElementById("textunqiue0");

        var numdept2=this.state.noofdeptadd;
        var lengths2=addepttext.length;

        if(presentfinder===null){ 
        var addinputblock=document.getElementById("inputfordepartment2");
        var adnumdept=this.state.noofdeptadd;
        var adtable=document.createElement("table");
        adtable.setAttribute("id","uniquetable");

        for(var i=0;i<this.state.schoolorinstinfo.department.length;i++){
            var adtr=document.createElement("tr");
            var adtd0=document.createElement("td");
            var adtd1=document.createElement("td");
            adtd0.setAttribute("id","textunqiue"+i);
            var text1=document.createTextNode(this.state.schoolorinstinfo.department[i]);
            var text2=document.createTextNode(this.state.schoolorinstinfo.totalyear[i]);
        
            adtd0.appendChild(text1);
            adtd1.appendChild(text2);

            adtr.appendChild(adtd0);
            adtr.appendChild(adtd1);

            adtable.appendChild(adtr);
            addinputblock.appendChild(adtable);
        }
    }

    }).catch(err=>{console.log(err);})
        
    }
    onsubmitaddnodpt=(e)=>{
        e.preventDefault();
        
        var numdept2=this.state.noofdeptadd;
        
        if(numdept2>=1){
            
            var lengths2=addepttext.length;
            
            if(lengths2!=numdept2 || !lengths2>=numdept2){
                for(var i=lengths2;i<numdept2;i++){
                    var newtr0=document.createElement("tr");
                    newtr0.setAttribute("id","uniquetr"+i);

                    var newtd0=document.createElement("td");
                    var newtd1=document.createElement("td");
                    addepttext[i]=document.createElement("input");
                    addepttext[i].setAttribute("id","idnewdept"+i);
                    adsubarr[i]=document.createElement("input");
                    adsubarr[i].setAttribute("id","idnewsection"+i);


                    var tablefinder=document.getElementById("uniquetable");

                    newtd0.appendChild(addepttext[i]);
                    newtd1.appendChild(adsubarr[i]);

                    newtr0.appendChild(newtd0);
                    newtr0.appendChild(newtd1);

                    tablefinder.appendChild(newtr0);
                }
                var btnfindernew=null;
                btnfindernew=document.getElementById("uniquebtn");

                if(btnfindernew!==null){ 
                btnfindernew.remove();
                
                setTimeout(()=>{
                    
                    var adbtn=document.createElement("button");
                    var textnode=document.createTextNode("Update");
                    var tablefinder2=document.getElementById("uniquetable");
                    adbtn.setAttribute("id","uniquebtn");
                    adbtn.addEventListener("click",()=>{this.onclicksubmitfinal()})
                    adbtn.appendChild(textnode);
                    tablefinder2.appendChild(adbtn);
                },100)
            }else{
                if(btnfindernew===null){ 
                    var adbtn=document.createElement("button");
                    var textnode=document.createTextNode("Update");
                    var tablefinder2=document.getElementById("uniquetable");
                    adbtn.setAttribute("id","uniquebtn");
                    adbtn.addEventListener("click",()=>{this.onclicksubmitfinal()})

                    adbtn.appendChild(textnode);
                    tablefinder2.appendChild(adbtn);
                }
            }
                
            }
            if(lengths2>numdept2){
                for(var i=lengths2-1;i>=numdept2;i--){
                    var removehead=document.getElementById("uniquetr"+i);
                    console.log(addepttext.length);
                    addepttext.length--;
                    adsubarr.length--;
                    removehead.remove();
                }
            }
        }
    }

    onclicksubmitfinal(){
        var lengths=addepttext.length;
        for(var i=0;i<lengths;i++){
            var temp1=document.getElementById("idnewdept"+i).value;
            temp1=temp1.toString();
            temp1=temp1.trim();

            var temp2=document.getElementById("idnewsection"+i).value;
            temp2=temp2.toString();
            temp2=temp2.trim();
            
            adansnew[i]=temp1;
            adansnew2[i]=temp2;

        }
        const departmentobj2={
            department:adansnew,
            finalyear:adansnew2
        }
        axios.post("https://quizess.herokuapp.com/admin/updatedepartment",departmentobj2,{withCredentials:true}).then((res)=>{alert(res.data);}).catch(err=>{console.log(err)})
        
    }

    removedepartment=(e)=>{
        e.preventDefault();
        axios.get("https://quizess.herokuapp.com/admin/schoolorinstinfo",{withCredentials:true}).then((res)=>{ this.setState({schoolorinstinfo:res.data,departmentinfo:res.data.department});console.log(this.state.schoolorinstinfo)}).catch(err=>{console.log(err)})


    }
    deletebtns(id){
        alert(id);
        var trfinder=document.getElementById("importantid"+id);
        var tdvalue=document.getElementById("importanttdid"+id).innerHTML;
        const objs={
            department:tdvalue
        }
        console.log(tdvalue);
        axios.post("https://quizess.herokuapp.com/admin/deletedepartment",objs,{withCredentials:true}).then((res)=>{trfinder.remove();alert(res.data);}).catch(err=>{console.log(err)});
        
    }

    onsubmitdepart=()=>{
        var lengths=depttext.length;
        for(var i=0;i<lengths;i++){
            var temp1=document.getElementById("iddept"+i).value;
            temp1=temp1.toString();
            temp1=temp1.trim()

            var temp2=document.getElementById("idsection"+i).value;
            temp2=temp2.toString();
            temp2=temp2.trim()
            
            ansnew[i]=temp1;
            ansnew2[i]=temp2;
        }
        const departmentobj={
            department:ansnew,
            finalyear:ansnew2
        }
        axios.post("https://quizess.herokuapp.com/admin/addingdepartments",departmentobj,{withCredentials:true}).then((ress)=>{alert(ress.data)}).catch((err)=>{console.log(err)})

    }

    
    render(){
        return (
        <div>
            {/* <Headertemplate/> */}
            <div className="addsectionpart">
                <p className="addsection">Add class year and section/department</p>
                <button className="addsection" style={{marginLeft:"45%"}} onClick={this.noofdepartment}>create</button>
                <button className="addsection" style={{marginLeft:"45%"}} onClick={this.adddepartment}>Add department</button>
                <button className="addsection" style={{marginLeft:"45%"}} onClick={this.removedepartment}>Remove department</button>


                    <div id="nodepartmentid">
                        <form id="inputdepartment" className="inputdepartmentclass" onSubmit={this.onsubmitnoofdept}>
                        <input type="number" placeholder="no of department/section" onChange={this.onchangeno}/>
                        <input type="submit" value="generate" />
                        </form>
                        <div id="inputfordepartment">
                        </div>
                        <div id="addfordepartment" className="addfordepartmentcls">
                            <form onSubmit={this.onsubmitaddnodpt}>
                                <input type="number" placeholder="no of department to add" onChange={this.onchange2}/>
                                <input type="submit" value="Add" />

                            </form>
                        </div>
                        <div id="inputfordepartment2">
                            
                        </div>
                        <div>
                            <table>
                                
                                {this.state.departmentinfo.map((info,index)=>
                                    <tr key={index} id={"importantid"+index}><td ><p id={"importanttdid"+index}>{info}</p></td><td>{info}</td><td><button onClick={()=>{this.deletebtns(index)}}>Delete</button></td></tr>

                                )}
                            </table>
                        </div>

                    </div>
            </div>
        </div>
        )
    }
}
export default homeadmininst;