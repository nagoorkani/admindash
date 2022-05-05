import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css"
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Userlist from "./pages/userlist/Userlist";
import User from "./pages/user/User";
function app(){
  return (
   <Router>
    <Topbar/>
     <div className="container">
       <Sidebar/>
       <Switch>
         <Route exact path="/">
           <Home/>
         </Route>
         <Route  path="/users">
           <Userlist />
         </Route>
          <Route path={"/User/ : id"} >
          <User/>
         </Route>
       </Switch>
     </div>
  </Router>
);
}
export default app ;
