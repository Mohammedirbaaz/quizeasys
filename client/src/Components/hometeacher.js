import React,{Component} from 'react';
import Headertemplateteacher from "./headertemplateteacher";
import './style.css';
import {UserConsumer} from '../context/authContext';



class hometeacher extends Component{
    render(){
        return(
            <UserConsumer>
                {username=>{
                    return <div>
                         {username.value3===true &&
                            <>
                                <div>
                                    <Headertemplateteacher/>
                                    <div className="spotlight">
                                        <p className="spotlgttext">Spotlight</p>
                                    </div> 
                                </div> 
                            </>
                         }
                        {username.value3===false &&<>lol</>}
                    </div>
                }}
            </UserConsumer>
        );
    };
}
export default hometeacher;