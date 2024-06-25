import React,{createContext,useEffect,useState} from 'react';
import axios from 'axios';

// const authContext=createContext();

// function AuthContextProvider(props){
//     const [loggedIn,setLoggedIn]=useState(undefined);

//     async function getLoggedIn(){
//         const loggedInRes=await axios.get("http://localhost:5000/admin/loggedin");
//         setLoggedIn(loggedInRes.data);
//     }
//     useEffect(()=>{
//         getLoggedIn();
//     },[])

//     return <authContext.Provider value={{loggedIn,setLoggedIn}}>
//         {props.children}
//     </authContext.Provider>
// }

// export default authContext;
// export {AuthContextProvider};

const authContext=createContext();

const UserProvider=authContext.Provider;
const UserConsumer=authContext.Consumer;

export {UserProvider,UserConsumer}