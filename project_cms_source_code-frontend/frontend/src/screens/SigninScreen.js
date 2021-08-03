import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import Header from '../components/header'
import Navigation from '../components/navigation'
import { signin } from '../actions/userActions'
import UserNavigation from '../components/userNavigation'
import UserNavbar from '../components/UserNavbar'
import b2 from '../image/b2.jpg';

const SigninScreen =(props)=>{
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const userSignin =useSelector((store)=>store.userSignin)
    const{loading,error,response}=userSignin

    const dispatch=useDispatch()
    const onSignin = ()=>{
      
        dispatch(signin(email,password))
        props.history.push("/courier")
    }
useEffect(()=>{
    console.log(sessionStorage.getItem('role'))
},[response])

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
    
    
     
    <button onClick={onSignin} class="btn btn-success"><Link to="/changestatus">SignIn</Link></button>
    <div className="float-end">
            New User? <Link to="/signup">Signup here</Link>
          </div>
            
            
    
        {loading && <div>Waiting for response</div>}
        </div>
        </div>
      
    )
}

export default SigninScreen