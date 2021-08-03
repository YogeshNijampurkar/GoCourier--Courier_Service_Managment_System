import {Link} from 'react'
import b4 from '../image/b4.jpg';
import {useDispatch,useSelector} from 'react-redux'
const UserNavigation = (props)=>{
    const dispatch=useDispatch()
    const userSignin=useSelector((store)=>store.userSignin)

    return(

        <div>
     
<div>
    <nav className="navbar navbar-expand-lg navbar navbar-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/home">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/profile">Profile</a>
        <a className="nav-link" href="/signin">Admin</a>
        <a className="nav-link" href="/branchSignin">Branch Manager</a>
        <a className="nav-link" href="/signin">Courier Boy</a>
        <a className="nav-link" href="/signin">User</a>
      
       </div>
    

</div>
    </div>
 
</nav>
</div>
<div
     
     style={{
       backgroundImage: 'url('+b4+')',
       backgroundSize: "cover",
       height: "100vh",
       width:"100%",
       color: "#f5f5f5"
     }}
   >
</div>
<img src={b4} alt="Logo"  width="100%" height="auto"></img>;
</div>


    )
}

export default UserNavigation