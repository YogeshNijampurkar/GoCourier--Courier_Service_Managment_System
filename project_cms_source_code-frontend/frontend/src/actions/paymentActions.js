import{
    PAYMENT_ADD_FAIL,
    PAYMENT_ADD_REQUEST,
    PAYMENT_ADD_SUCCESS,

    CONFIRM_OTP_REQUEST ,
 CONFIRM_OTP_SUCCESS, 
 CONFIRM_OTP_FAIL
   
  
}from '../constatnts/paymentConstants'

import axios from 'axios'



export const addPayment=(acctHolderName,cardNo,cvc,validUpto,paymentType,amount,courierId)=>{
    return(dispatch)=>{
        dispatch({
            type:PAYMENT_ADD_REQUEST,
        })

        const header={
            headers:{
                'Content-Type':'application/json',
            },
        }
        const body={
            acctHolderName,cardNo,cvc,validUpto,paymentType,amount,courierId

            
        }
      
       var userid=sessionStorage.getItem('userId')
        const url='http://localhost:8080/courier/user/addPayment/'+userid
        axios
        .post(url,body,header)
        .then((response)=>{
             sessionStorage.setItem("user", JSON.stringify(response.data));
        //   sessionStorage.setItem('paymentid',response.data)
           dispatch({
                type:PAYMENT_ADD_SUCCESS,
                payload:response.data,
            })
        })
        .catch((error)=>{
            dispatch({
                type:PAYMENT_ADD_FAIL,
                payload:error,
            })
        })
    }
}

export const confirmOtp=(otp)=>{
    return(dispatch)=>{
        dispatch({
            type:CONFIRM_OTP_REQUEST,
        })

        const header={
            headers:{
                'Content-Type':'application/json',
            },
        }
        const body={
           otp

            
        }
        var paymentid=sessionStorage.getItem('user')
        const url='http://localhost:8080/courier/user/addPayment/otp/'+paymentid
        axios
        .post(url,body,header)
        .then((response)=>{
            dispatch({
                type:CONFIRM_OTP_SUCCESS,
                payload:response.data,
            })
        })
        .catch((error)=>{
            dispatch({
                type:CONFIRM_OTP_FAIL,
                payload:error,
            })
        })
    }
}
