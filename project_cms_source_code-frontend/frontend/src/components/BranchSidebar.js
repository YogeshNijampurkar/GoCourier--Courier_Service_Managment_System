import React from "react";
import "../App.css"
import {BranchSidebarData} from './BranchSidebarData'

function BranchSidebar() {
  return(
    <div className="App">
    <div className="Sidebar">
      <ul className="SidebarList">
        {BranchSidebarData.map((val,key)=>{
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
export default BranchSidebar