import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom';
import Guestpage from './Components/guesthomepage';
import axios from 'axios';
// import {AuthContextProvider} from './context/authContext'
import {UserProvider} from './context/authContext';
import {useEffect,useState} from 'react';


import Registeradmin from './Components/registeradmin';
import Loginadmin from './Components/loginadmin';

import Registerteacher from './Components/registerteacher';
import Loginteacher from './Components/loginteacher';

import Registerstudent from './Components/registerstudent';
import Loginstudent from './Components/loginstudent';

import Admin from './Components/Homeadmin';
import Homeadminstudent from './Components/homeadminstudent';
import Homeadminteacher from './Components/homeadminteacher';
import homeadminmyaccount from './Components/homeadminmyaccount';
import Homeadminquiz from './Components/homeadminquiz';
import Homeadmininst from './Components/homeadmininst';




import Student from './Components/homestudent';
import Homestudentquiz from './Components/homestudentquiz';
import Homestudentteacher from './Components/homestudentteacher';
import Homestudentmyaccount from './Components/homestudentmyaccount';
import Homestudentmarks from './Components/homestudentmarks';



import Teacher from './Components/hometeacher';
import Hometeacherquiz from './Components/hometeacherquiz';
import Hometeacherstudent from './Components/hometeacherstudent';
import Hometeachermyaccount from './Components/hometeachermyaccount';
import Hometeacherteacher from './Components/hometeacherteacher';


import Providerstudent from './Providerstudent';
import homestudentquizhandler from './Components/homestudentquizhandler';
import homestudentmarks from './Components/homestudentmarks';


axios.defaults.withCredentials=true;



function App() {
  const [loggedIn,setLoggedIn]=useState(undefined);
  const [loggedInStudent,setLoggedInStudent]=useState(undefined);
  const [loggedInTeacher,setLoggedInTeacher]=useState(undefined);



    async function getLoggedIn(){
        const loggedInRes   =await axios.get("https://quizess.herokuapp.com/admin/loggedin",{withCredentials:true});
        setLoggedIn(loggedInRes.data);
        console.log("from admin  "+loggedInRes.data);

        const loggedInResstd=await axios.get("https://quizess.herokuapp.com/student/lolstudent",{withCredentials:true});
        
        setLoggedInStudent(loggedInResstd.data);
        console.log("from student  "+loggedInResstd.data);


        const loggedIntd    =await axios.get("https://quizess.herokuapp.com/teacher/loggedin",{withCredentials:true});
        console.log("from teacher  "+loggedIntd.data);
        setLoggedInTeacher(loggedIntd.data);
  }
    useEffect(()=>{
        getLoggedIn();
    },[]);

  return (
    
    <UserProvider value={{value1:loggedIn,value2:loggedInStudent,value3:loggedInTeacher}}>
    
    <Router>
      <div className="App">
      <Route path="/" exact component={Guestpage} />
      <Switch>
      <Route path="/loginadmin" exact component={Loginadmin} />
      <Route path="/registeradmin" exact component={Registeradmin} />

      <Route path="/loginteacher" exact component={Loginteacher} />
      <Route path="/registerteacher" exact component={Registerteacher} />

      <Route path="/loginstudent" exact component={Loginstudent} />
      <Route path="/registerstudent" exact component={Registerstudent} />

      <Route path="/admin" exact component={Admin} />
      <Route path="/adminstudent" exact component={Homeadminstudent} />
      <Route path="/adminteacher" exact component={Homeadminteacher} />
      <Route path="/adminquiz" exact component={Homeadminquiz} />
      <Route path="/admininstitute" exact component={Homeadmininst} />
      <Route path="/adminmyaccount" exact component={homeadminmyaccount} />

      {/* <Providerstudent/> */}
  

      <Route path="/student" exact component={Student} />
       <Route path="/studentquiz" exact component={Homestudentquiz} />
       <Route path="/studentteacher" exact component={Homestudentteacher} />
       <Route path="/studentmyaccount" exact component={Homestudentmyaccount} />
       <Route path="/studentmarks" exact component={homestudentmarks} />

       <Route path="/studentquiz/:id" exact component={homestudentquizhandler} />

      <Route path="/teacher" exact component={Teacher} />
      <Route path="/teacherquiz" exact component={Hometeacherquiz} />
      <Route path="/teacherstudent" exact component={Hometeacherstudent} />
      <Route path="/teachermyaccount" exact component={Hometeachermyaccount} />
      <Route path="/teacherotherteacher" exact component={Hometeacherteacher} />


      </Switch>
    </div>
    </Router>
    
    </UserProvider>
  );
}

export default App;
