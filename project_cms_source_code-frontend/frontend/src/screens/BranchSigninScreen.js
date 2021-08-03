import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import Header from '../components/header'
import { branchSignin } from '../actions/branchManagerActions'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import UserNavigation from '../components/userNavigation'

const BranchSigninScreen =(props)=>{
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const branchsignin =useSelector((store)=>store.branchSignin)
    const{loading,error,response}=branchsignin
    

    const dispatch=useDispatch()
    const onBranchSignin = ()=>{
        dispatch(branchSignin(email,password))
    }

    useEffect(()=>{
      if(response)
      props.history.push('/branchdashboard')
    
    },[loading,error,response])

    return(
      <div>
      <UserNavigation />
                
    <div className="container">
    <div className="form-group">
      <label for="email">Email:</label>
      <input onChange={(e) =>{setEmail(e.target.value)}} type="email" class="form-control" placeholder="Enter email" />
    </div>
    
     <div className="form-group">
      <label for="pwd">Password:</label>
      <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control"  placeholder="Enter Password" />
    </div>
    
    
     
    <button onClick={onBranchSignin} class="btn btn-success"><Link to="/branchdashboard">SignIn</Link></button>
    <div className="float-end">
            New Branch? <Link to="/branchRegister">Register here</Link>
          </div>
            
            
    
        {loading && <div>Waiting for response</div>}
        </div>

            
    
 
</div>

    )
}

export default BranchSigninScreen