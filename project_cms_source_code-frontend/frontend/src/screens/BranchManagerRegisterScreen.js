import Header from '../components/header'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { branchRegister} from '../actions/branchManagerActions'
import { useDispatch, useSelector } from 'react-redux'
import UserNavigation from '../components/userNavigation'

const BranchManagerRegisterScreen = (props) => {
    const[branchName,setbranchName]=useState('')
    const[email,setemail]=useState('')
    const[phone,setPhone]=useState('')
    const[password,setPassword]=useState('')
    const[area,setArea]=useState('')
    const[city,setCity]=useState('')
    const[taluka,settaluka]=useState('')
    const[district,setdistrict]=useState('')
    const[pincode,setPincode]=useState('')


     const dispatch=useDispatch()

     const branchManagerSignup=useSelector((store)=>store.branchRegister)
     const{loading,response,error}=branchManagerSignup

     useEffect(()=>{
      if (response ) {
        alert('Signup Successfull...!!!!')
            props.history.push('/branchsignin')
          } else if (error) {
          alert('Something Went Wrong!!! Check details!!!')
          }
     },[loading,response,error])
     const onBranchManager = () => {
         dispatch(branchRegister(branchName,email,phone,password,area,city,taluka,district,pincode,))
     }
    
    return(
<div >
  <UserNavigation />
          {/* <Header title="Welcome to Courier Management System" /> */}
          <div className="container">
          
            <form onSubmit={onBranchManager}>
          <div className="form-group">
      <label for="name">BranchName:</label>
      <input onChange={(e)=>{setbranchName(e.target.value)}} type="text" className="form-control"  placeholder="Mumbai Branch" />
    </div>

    <div className="form-group">
      <label for="email">Email:</label>
      <input onChange={(e)=>{setemail(e.target.value)}} type="email" className="form-control"  placeholder="mumbai@gmail.com" />
    </div>


    <div className="form-group">
      <label for="password">Passsword:</label>
      <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control"  placeholder="*****" />
    </div>
    { password && <div style={{color:" #ffb3b3"}}>Password must contain [A-Z] ,[$,#,@] ,[0-9] </div>}

    <div className="form-group">
      <label for="password">Phone:</label>
      <input onChange={(e)=>{setPhone(e.target.value)}} type="number" className="form-control"  placeholder="+919873281049" />
    </div>


    <div className="form-group">
      <label for="phone">Area:</label>
      <input onChange={(e)=>{setArea(e.target.value)}} type="textarea" className="form-control"  placeholder="Shahaji Nagar" />
    </div>



    

    
    <div className="form-group">
      <label for="name">City:</label>
      <input onChange={(e)=>{setCity(e.target.value)}} type="text" className="form-control"  placeholder="Mumbai" />
    </div>  



    <div className="form-group">
      <label for="name">Taluka:</label>
      <input onChange={(e)=>{settaluka(e.target.value)}} type="text" className="form-control"  placeholder="Mumbai" />
    </div>  



    <div className="form-group">
      <label for="name">District:</label>
      <input onChange={(e)=>{setdistrict(e.target.value)}} type="text" className="form-control"  placeholder="Mumbai" />
    </div>  



    <div className="form-group">
      <label for="name">Pincode:</label>
      <input onChange={(e)=>{setPincode(e.target.value)}} type="text" className="form-control"  placeholder="980-789" />
    </div>  

    <button type="submit" onClick={onBranchManager} className="btn btn-success">
            Register
          </button>
          <div className="float-end">
            Existing Branch? <Link to="/branchSignin">Signin here</Link>
          </div>
   
      {branchManagerSignup.loading &&<div>waiting for result</div>}
      </form>
      </div>
          </div>
    )
}

export default BranchManagerRegisterScreen