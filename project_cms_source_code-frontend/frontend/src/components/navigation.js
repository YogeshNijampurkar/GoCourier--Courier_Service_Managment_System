import {Link} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import logo from '../image/logo.jpg'
const Navigation = (props)=>{
  // const userSignin=useSelector((store)=>store.userSignin)


    return(

        <div >
                   
    <nav className="navbar navbar-expand-lg navbar navbar-dark  navbar-fixed " style={{backgroundColor:"#2BBBAD"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/courierabout">Home</a>
 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
       
        <a className="nav-link" href="/adminsignin">Admin</a>
        <a className="nav-link" href="/branchsignin">BranchManagerRegister</a>
        <a className="nav-link" href="/usersignin">User</a>
        <a className="nav-link" href="couriersignin">CourierBoy</a>
      
    
       </div>

    </div>
  </div>
</nav>

 </div>
    )
}

export default Navigation