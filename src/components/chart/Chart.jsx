import React from 'react'
import "./chart.css"
import ss from "./ss.png"

export default function Chart() {

   
  return (
    <>
      <div className="charttitle">
      <div className='chart'>
          <h3 >sales analytics</h3>
      </div>
      <img src={ss} alt="" className="crtimg" />
      </div>
    </>
  )
}