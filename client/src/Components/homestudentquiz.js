import React,{Component} from 'react';
import Headertemplatestudent from "./headertemplatestudent";
import './style.css';
import axios from 'axios';

var datess={};
var dates=0;
var months=0;
var years=0;
var currentdate=0;

class homestudentquiz extends Component{
    constructor(props){
        super(props);
        this.state={
            quizs:[{}],
        };

    }
    componentDidMount(){
        axios.get("https://quizess.herokuapp.com/student/studentquize",{withCredentials:true}).then(res=>{console.log(res); this.setState({quizs:res.data});}).catch(err=>{console.log(err)});
        currentdate=new Date();
        

        
    }
    quizclicked=(ids)=>{
         window.location="/studentquiz/"+ids;
    }
    dateswork=(e)=>{
        datess=new Date(e);
        dates=datess.getDate();
        months=datess.getMonth();
        years=datess.getFullYear();

    }

    render(){
        
        return(
            <div>
                <Headertemplatestudent/>
                <div className="bodys">
                    <p className="spotlgttext">Upcoming Quiz</p>
                    
                    <div className="cardssss">
                    {this.state.quizs.map((quize)=>
                    <table key={quize._id} className="cardsforquiz" >
                        
                       {this.dateswork(quize.date)}

                       <tr> <td className="cardtexts">Name:</td><td>{quize.name}</td></tr>
                       <tr><td className="cardtexts">Subject:</td><td>{quize.subject}</td></tr>
                       <tr><td className="cardtexts">Batch:</td><td>{quize.batch}</td></tr>
                       <tr><td className="cardtexts">On:</td><td>{dates+"-"+months+"-"+years}</td></tr>
                       <tr><td></td><td ><button className="inputsbtnn" onClick={()=>{this.quizclicked(quize._id)}} >give test</button></td></tr>
                      

                     </table>           
                    )}
                    </div>
                    
                </div>
            </div>  
        );
    };
}
export default homestudentquiz;