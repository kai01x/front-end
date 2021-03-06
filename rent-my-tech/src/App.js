import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute'

function App() {

  //login initialState
  const loginState = {
    username:"",
    password: "",
    userType: "renter"
  };

  const [user, setUser] = useState(loginState);
  

  //signup initialState

const signupState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  userType: ""
}

const [newUser, setNewUser] = useState(signupState);



  return (
<Router>
    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/login">
      <Login user={user} setUser={setUser} />
    </Route>
    <Route path="/signup">
      <SignUp newUser={newUser} setNewUser={setNewUser} />
    </Route>
    <PrivateRoute exact path="/Dashboard"> 
      <Dashboard user={user} component={Dashboard} />
    </PrivateRoute>
  </Switch>
</Router>
  
  )
}

export default App;