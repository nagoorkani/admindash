import { Visibility } from '@mui/icons-material'
import React from 'react'
import "./widgetsm.css"

export default function Widgetsm() {
  return (
    <div className='widgetsm'>
      <span className="widgetsmtitle">New Join Members</span>
      <ul className="widgetsmlist">
          <li className="widgetsmlistitm">
              <img src="./image/s.png" alt="" className="widgetsmimage" />
               <div className="widgetsmuser">
                   <span className="widgetsmusername">salman</span>
                   <span className="widgetsmusertitle">software developer</span>
               </div>
               <button className="widgetsmbutton">
                   <Visibility className='widgesmicon'/>
                   display
               </button>
          </li>
         
          <li className="widgetsmlistitm">
              <img src="./image/r.png" alt="" className="widgetsmimage" />
               <div className="widgetsmuser">
                   <span className="widgetsmusername">rasheed</span>
                   <span className="widgetsmusertitle">software developer</span>
               </div>
               <button className="widgetsmbutton">
                   <Visibility className='widgesmicon'/>
                   display
               </button>
          </li>
          <li className="widgetsmlistitm">
              <img src="./image/a.jpg" alt="" className="widgetsmimage" />
               <div className="widgetsmuser">
                   <span className="widgetsmusername">safi</span>
                   <span className="widgetsmusertitle">software developer</span>
               </div>
               <button className="widgetsmbutton">
                   <Visibility className='widgesmicon'/>
                   display
               </button>
          </li>
          <li className="widgetsmlistitm">
              <img src="./image/s.jpg" alt="" className="widgetsmimage" />
               <div className="widgetsmuser">
                   <span className="widgetsmusername">imran</span>
                   <span className="widgetsmusertitle">software developer</span>
               </div>
               <button className="widgetsmbutton">
                   <Visibility className='widgesmicon'/>
                   display
               </button>
          </li>
          <li className="widgetsmlistitm">
              <img src="./image/ah.png" alt="" className="widgetsmimage" />
               <div className="widgetsmuser">
                   <span className="widgetsmusername">ahsan</span>
                   <span className="widgetsmusertitle">software developer</span>
               </div>
               <button className="widgetsmbutton">
                   <Visibility className='widgesmicon'/>
                   display
               </button>
          </li>
      </ul>
    </div>
    
  )
}
