import React,{Component} from 'react';
import Headertemplatestudent from "./headertemplatestudent";
import './style.css';
import {UserConsumer} from '../context/authContext';


class homestudent extends Component{
    render(){
        return(
            <UserConsumer>
                {username=>{
                    return <div>
                        {username.value2===true &&
                            <>
                                <div>
                                    <Headertemplatestudent/>
                                    <div className="spotlight">
                                        <p className="spotlgttext">Spotlight</p>
                                    </div> 
                                </div> 
                            </>
                        }
                        {username.value2===false &&<>lol</>}

                    </div>


                }}
             
            </UserConsumer>
        );
    };
}
export default homestudent;