import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
import "./App.css" ;
import Home from "./Pages/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Userlist from "./Pages/UserList/UserList";
import User from "./Pages/User/User";
import Newuser from "./Pages/NewUser/NewUser";

function App() {
  return (
   <Router>
    <Topbar />
     <div className="container">
       <Sidebar />
       <Switch>
        <Route path="/users" component={Userlist} />
        <Route path="/user/:userID" component={User} />
        <Route path="/newuser" component={Newuser} />
        <Route exact path="/" component={Home} />
       </Switch>
     </div>
   </Router>
  );
}

export default App ;
