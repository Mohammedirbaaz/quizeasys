import {UserProvider} from './context/authContext';
import {useEffect,useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom';

import Student from './Components/homestudent';
import Homestudentquiz from './Components/homestudentquiz';
import Homestudentteacher from './Components/homestudentteacher';
import Homestudentmyaccount from './Components/homestudentmyaccount';

function Providerstudent(){ 


  const [loggedInStudent,setLoggedInStudent]=useState(undefined);


   
    async function getLoggedInStudent(){
      const loggedInResstudent=await axios.get("http://localhost:5000/student/lolstudent");
       setLoggedInStudent(loggedInResstudent.data);
      console.log("from student "+loggedInStudent);
  }
    useEffect(()=>{
        getLoggedInStudent();
    },[]);

return( 
<UserProvider value={loggedInStudent}>
{console.log("yoooo  "+loggedInStudent)}
    <Router>
        <Switch>
      <Route path="/student" exact component={Student} />
      <Route path="/studentquiz" exact component={Homestudentquiz} />
      <Route path="/studentteacher" exact component={Homestudentteacher} />
      <Route path="/studentmyaccount" exact component={Homestudentmyaccount} />
      </Switch>
    </Router>
</UserProvider>
);
}

export default Providerstudent;