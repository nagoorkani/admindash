import React from 'react'
import "./Topbar.css"
import pic from './a.jpg'
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className='topbarwrapper'>
            <div className="topleft">
             <span className="logo">Admin App</span>

            </div>
            <div className="topright">
              <div className="topbariconcontainer">
             <NotificationsNoneIcon/>
             <span className="topiconbag">2</span>
              </div>
              <div className="topbariconcontainer">
             <LanguageIcon/>
             <span className="topiconbag">2</span>
              </div>
              <div className="topbariconcontainer">
             <SettingsIcon/>
             </div>
             <img src={pic} alt="" className="topavator" />
             </div>
        </div>
     </div>
  )
}


