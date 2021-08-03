import React from "react";
import "../App.css"
import {CourierBoySidebarData} from './CourierBoySidebarData'

function CourierBoySidebar() {
  return(
    <div className="App">
    <div className="Sidebar">
      <ul className="SidebarList">
        {CourierBoySidebarData.map((val,key)=>{
          return(
            <li key={key}
            className="row"
            id={window.location.pathname == val.link ? "active" : " "}
            onClick={()=>{
              window.location.pathname = val.link
            }}
            >

              
              
            <div>{val.icon}</div>
            <div>{val.title}</div></li>
          )
        })}
      </ul>
    </div>
    </div>
  )
}
export default CourierBoySidebar