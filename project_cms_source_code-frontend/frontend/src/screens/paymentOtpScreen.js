import Header from '../components/header'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { confirmOtp} from '../actions/paymentActions'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from '../components/sidebar'

const PaymentOtpScreen = (props) => {
    const[otp,setOtp]=useState('')
  


     const dispatch=useDispatch()

     const otp1=useSelector((store)=>store.otp)
     const{loading,response,error}=otp1
     useEffect(()=>{
         if(response){
             props.history.push('/otp')
         }else if(error){
             console.log(error)
             alert('error while making API call')
         }
     },[loading,response,error])
     const onaddotp = () => {
         dispatch(confirmOtp(otp))
     }
    
    return(
      
            <div className="row">
  <div className="col-md-2">
        {/* <Sidebar  /> */}
        </div>
         <form onSubmit={onaddotp}>
            <div className="form-group">
                
      <label for="name">OTP:</label>
      <input onChange={(e)=>{setOtp(e.target.value)}}  type="number" className="form-control"  placeholder="JOhn Thomson" />
    </div>

    <button type="submit"  onClick={onaddotp} className="btn btn-success"> Submit
        
        </button>
        </form>
                    </div>
                   
    )

}

export default PaymentOtpScreen