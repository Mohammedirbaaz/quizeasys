import React, { Component } from 'react';
import {Link} from "react-router-dom";
class guestheader extends Component{


    onclickhamburger=()=>{
        var hamburgerss=document.getElementById("hamburgersid");
        hamburgerss.style.display="none";

        var smallheader=document.getElementById("smallheaderid");
        smallheader.style.display="block";
        smallheader.style.transition="all 6s";

        var closer=document.getElementById("closerid");
        closer.style.transition="all 6s";
        closer.style.display="block";
    }

    onclickcloser=()=>{
        var hamburgerss=document.getElementById("hamburgersid");
        hamburgerss.style.display="block";

        var smallheader=document.getElementById("smallheaderid");
        smallheader.style.display="none";

        var closer=document.getElementById("closerid");
        closer.style.display="none";
    }

    render(){
        return(
            <div className="headerareas">   
                    <a className="headerlogo" href="/">Quizee</a>
                    <a className="headercontent" href="/about">About</a>
                    <a className="headercontent" href="/loginadmin">Admin</a>
                    <a className="headercontent" href="/loginteacher">Teacher</a>
                    <a className="headercontent" href="/loginstudent">Student</a>

                    <div className="hamburgers" id="hamburgersid" onClick={this.onclickhamburger}>
                        <p className="liness"></p>
                        <p className="liness"></p>
                        <p className="liness"></p>
                    </div>
                    <div className="closer" id="closerid" onClick={this.onclickcloser}>
                    <p className="liness1 l2"></p>
                    <p className="liness2 l2"></p>

                    </div>
                    
                    <div className="smallheader" id="smallheaderid">
                        <a href="/about" className="smallcontent">About</a>
                        <a href="/loginadmin" className="smallcontent">Admin</a>
                        <a href="/loginteacher" className="smallcontent">Teacher</a>
                        <a href="/loginstudent" className="smallcontent">Student</a>

                    </div>
                    
            </div>
            
        );
    }

}

export default guestheader;