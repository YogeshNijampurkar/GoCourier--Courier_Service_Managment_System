import {
    
    PAYMENT_ADD_FAIL,
    PAYMENT_ADD_REQUEST,
    PAYMENT_ADD_SUCCESS,

    CONFIRM_OTP_FAIL,
    CONFIRM_OTP_REQUEST,
    CONFIRM_OTP_SUCCESS,
  } from '../constatnts/paymentConstants'

  export const addPaymentReducer=(state ={},action)=>{
    switch(action.type){
        case PAYMENT_ADD_REQUEST:
            return {loading:true}
        case PAYMENT_ADD_SUCCESS:
                return{loading:false,response:action.payload}
        case PAYMENT_ADD_FAIL:
            return {loading:false,error:action.payload}
            default:
                return state


    }

 
}
export const confirmOtpReducer=(state ={},action)=>{
    switch(action.type){
        case CONFIRM_OTP_REQUEST:
            return {loading:true}
        case CONFIRM_OTP_SUCCESS:
                return{loading:false,response:action.payload}
        case CONFIRM_OTP_FAIL:
            return {loading:false,error:action.payload}
            default:
                return state


    }
}