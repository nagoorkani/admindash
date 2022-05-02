import "./sidebar.css"
import React from "react"
import HomeIcon from '@mui/icons-material/Home';
import MultilineChartIcon from '@mui/icons-material/MultilineChart';


import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { AccountCircle, Email, Feedback, Inventory, ManageAccounts, Message, ReportGmailerrorredOutlined, ReportSharp } from "@mui/icons-material";
export default function Sidebar() {
  return (
       <div className="sidebar">
         <div className="sidebarwrapper">
             <div className="sidebarmenu">
                 <h3 className="sidebartitle">Dashboard</h3>
                 <ul className="sodebarlist">
                 <li className="sidebarlist active">
                      <HomeIcon className="sidebaricon"/> Home
                 </li>
                 <li className="sidebarlist">
                    <MultilineChartIcon className="sidebaricon" />     analytics 
                 </li>
                 <li className="sidebarlist">
                     <TrendingUpIcon  className="sidebaricon" /> sales
                 </li> 
                 </ul>
             </div>
             <div className="sidebarmenu">
                 <h3 className="sidebartitle">Quickmenu</h3>
                 <ul className="sodebarlist">
                 <li className="sidebarlist">
                      <AccountCircle className="sidebaricon"/> users
                 </li>
                 <li className="sidebarlist">
                    < Inventory className="sidebaricon" />  reports
                 </li>
                 <li className="sidebarlist">
                     <ReportSharp className="sidebaricon" /> products
                 </li> 
                 </ul>
             </div>
             <div className="sidebarmenu">
                 <h3 className="sidebartitle">Notification</h3>
                 <ul className="sodebarlist">
                 <li className="sidebarlist">
                      <Email className="sidebaricon"/> mail
                 </li>
                 <li className="sidebarlist">
                    < Feedback className="sidebaricon" />  feedback
                 </li>
                 <li className="sidebarlist">
                     <Message className="sidebaricon" /> messages
                 </li> 
                 </ul>
             </div>
             <div className="sidebarmenu">
                 <h3 className="sidebartitle">Staff</h3>
                 <ul className="sodebarlist">
                 <li className="sidebarlist">
                      <ManageAccounts className="sidebaricon"/> manage
                 </li>
                 <li className="sidebarlist">
                    <MultilineChartIcon className="sidebaricon" /> analayties 
                 </li>
                 <li className="sidebarlist">
                     <ReportGmailerrorredOutlined className="sidebaricon" /> report
                 </li> 
                 </ul>
             </div>
         </div>
       </div>
     )
}


