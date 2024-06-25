import React,{Component, useContext} from 'react';
import Headertemplate from "./headertemplate";
import './style.css';
import {UserConsumer} from '../context/authContext';


class Homeadmin extends Component{

    render(){ 
        return(
        <UserConsumer>
            {username=>{
                    return <div>
                        {username.value1===true &&
                            <>
                                <div>
                                    <Headertemplate/>
                                    <div className="spotlight">
                                        <p className="spotlgttext">Spotlight</p>
                                    </div>
                                </div>
                            </>
                        }
                        {username.value1===false && 
                            <>
                                lol
                            </>
                        }
                        </div>

                }}
            
        </UserConsumer> 
        );
    }
}
export default Homeadmin;