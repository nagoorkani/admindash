import React from 'react'
import "./widgetlg.css"
export default function Widgetlg() {
  const Button = ({ type }) => {
    return <button className= {"Widgetlgbutton " + type }> {type} </button>;
  };
  return (
    <div className='widgetlg'>
      <h3 className="widgetlgtitle">latest transactions </h3>
      <table className="widgetlgtable">
        <tr className="widgetlgtr">
          <th className="widgetlgth">customer</th>
          <th className="widgetlgth">date</th>
          <th className="widgetlgth">amount</th>
          <th className="widgetlgth">status</th>
        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img src="./image/s.jpg" alt="" className="widgetlgimage" />
            <span className="widgetlgname">safi</span>

          </td>
          <td className="widgetlgdate">4 may 2022</td>
          <td className="widgetlgamount">$22.22</td>
          <td className="widgetlgstatus"><Button type='declined' /> </td>

        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img src="./image/s.png" alt="" className="widgetlgimage" />
            <span className="widgetlgname">salman</span>

          </td>
          <td className="widgetlgdate">3 may 2022</td>
          <td className="widgetlgamount">$72.22</td>
          <td className="widgetlgstatus"><Button type='approved' /> </td>

        </tr><tr className="widgetlgtr">
          <td className="widgetlguser">
            <img src="./image/r.png" alt="" className="widgetlgimage" />
            <span className="widgetlgname">rasheed</span>

          </td>
          <td className="widgetlgdate">2 may 2022</td>
          <td className="widgetlgamount">$22.22</td>
          <td className="widgetlgstatus"><Button type='pending' /> </td>

        </tr><tr className="widgetlgtr">
          <td className="widgetlguser">
            <img src="./image/a.jpg" alt="" className="widgetlgimage" />
            <span className="widgetlgname">imran</span>

          </td>
          <td className="widgetlgdate">1 may 2022</td>
          <td className="widgetlgamount">$27.22</td>
          <td className="widgetlgstatus"><Button type='approved' /> </td>

        </tr>
      </table>
    </div>
  )
}
