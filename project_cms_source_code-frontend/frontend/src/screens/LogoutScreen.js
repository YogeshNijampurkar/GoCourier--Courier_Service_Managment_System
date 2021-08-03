
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'

const LogoutScreen =(props)=>{
  

    const onlogout = ()=>{
      
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('firstName');
            sessionStorage.removeItem('lastName');
            sessionStorage.removeItem('email');
          
            sessionStorage.removeItem('phone');
            sessionStorage.removeItem('role');
     
    }
useEffect(()=>{
    console.log(sessionStorage.getItem('role'))
},[])

    return(
        
        <div>
           <button   className='btn btn-default ' onClick={onlogout} >Logout</button>
        </div>
      
    )
}

export default LogoutScreen