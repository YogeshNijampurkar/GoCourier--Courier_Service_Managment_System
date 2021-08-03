import {Link} from 'react'
import {useDispatch,useSelector} from 'react-redux'
const NavigationOfUser = (props)=>{
  const userSignin=useSelector((store)=>store.userSignin)


    return(

        <div>
            
          
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/home">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/profile">Profile</a>
        <a className="nav-link" href="/module">Modual</a>
        <a className="nav-link" href="/signin">Login</a>
        <a className="nav-link" href="/signup">User</a>
        <a className="nav-link" href="/branchRegister">BranchManager</a>
        <a className="nav-link" href="/payment">Payment</a>
        <a className="nav-link" href="/otp">PaymentOtp</a>
       </div>
       <div className="navbar-nav mr-0">
         <a  href="/module" className="nav-link">Logout</a>
       </div>
    </div>
  </div>
</nav>

 </div>
    )
}

export default NavigationOfUser