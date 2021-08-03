import React from "react"
import "../App.css"

function UserNavbar(){
    return(
        <div className="unavbar">
            <div className="leftside">
              <a href="/home">Home</a>
              <a href="/home">Feedback</a>
              <a href="/home">Profile</a>
            </div>
        </div>
    )
}
export default UserNavbar