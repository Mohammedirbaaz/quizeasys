import React,{Component} from 'react';
import Headertemplate from "./headertemplateteacher";
import './style.css';
import axios from 'axios';

class hometeachermyaccount extends Component{
    constructor(props){
        super(props);
        this.state={
            teacherdetails:{},
        }
    }
    componentDidMount(){
        axios.get("https://quizess.herokuapp.com/teacher/mydetails",{withCredentials:true}).then((res)=>{this.setState({teacherdetails:res.data})});

    }

    render(){
        return(
            <div>
                <Headertemplate/>
                <div className="logincontent2">
                    <div className="registerimage2">
                    </div>
                    <div className="loginforms">
                        <p className="headertext">Teacher Detail</p>
                        {/* <img  className="dpimage2"/>   */}


                        <p className="inputs2" > {this.state.teacherdetails.username}</p>
                        <p className="inputs2" > {this.state.teacherdetails.schoolorinst}</p>
                        <p className="inputs2" > {this.state.teacherdetails.schoolorinstname}</p>
                        <p className="inputs2" > {this.state.teacherdetails.qualification}</p>
                        <p className="inputs2" > {this.state.teacherdetails.positionname}</p>
                        <p className="inputs2" > {this.state.teacherdetails.age}</p>
                        <p className="inputs2" > {this.state.teacherdetails.address}</p>
                        <p className="inputs2" > {this.state.teacherdetails.mailid}</p>
                        <p className="inputs2" > {this.state.teacherdetails.phno}</p>


                                               
                    </div>
                </div>
            </div>  
        );
    };
}
export default hometeachermyaccount;