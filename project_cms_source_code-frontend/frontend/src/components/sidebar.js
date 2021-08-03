import React from "react";
import "../App.css"
import Navigation from "./navigation";
import {SidebarData} from './SidebarData'
import logo from '../image/logo.jpg'
import UserNavbar from '../components/UserNavbar'

function Sidebar() {
  return(
    <>
   
   <div>
     
    <div className="App">
    
    <div className="Sidebar">
     
      <ul className="SidebarList">
    
        {SidebarData.map((val,key)=>{
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
    </div>
    </>
  )
}
export default Sidebar