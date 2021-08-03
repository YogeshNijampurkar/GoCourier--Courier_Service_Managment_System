import {
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNOUT,
    USER_SIGNUP_FAIL,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,

    COURIERBOY_SIGNIN_FAIL,
    COURIERBOY_SIGNIN_REQUEST,
    COURIERBOY_SIGNIN_SUCCESS,
    COURIERBOY_SIGNOUT,
    COURIERBOY_SIGNUP_FAIL,
    COURIERBOY_SIGNUP_REQUEST,
    COURIERBOY_SIGNUP_SUCCESS,

    EDIT_PROFILE_FAIL,
    EDIT_PROFILE_REQUEST,
    EDIT_PROFILE_SUCCESS,
  } from '../constatnts/userConstants'
  export const userSignupReducer=(state ={},action)=>{
      switch(action.type){
          case USER_SIGNUP_REQUEST:
              return {loading:true}
          case USER_SIGNUP_SUCCESS:
                  return{loading:false,response:action.payload}
          case USER_SIGNUP_FAIL:
              return {loading:false,error:action.payload}
              default:
                  return state


      }
  }

  export const userSigninReducer=(state ={},action)=>{
      switch(action.type){
        case USER_SIGNIN_REQUEST:
            return {loading:true}
        case USER_SIGNIN_SUCCESS:
            return{loading:false,response:action.payload}
         case USER_SIGNIN_FAIL:
             return {loading:false,error:action.payload} 
         case USER_SIGNOUT:
             return {}
             default:
                 return state       

      }
  
  }

  export const courierBoySignupReducer=(state ={},action)=>{
    switch(action.type){
        case COURIERBOY_SIGNUP_REQUEST:
            return {loading:true}
        case COURIERBOY_SIGNUP_SUCCESS:
                return{loading:false,response:action.payload}
        case COURIERBOY_SIGNUP_FAIL:
            return {loading:false,error:action.payload}
            default:
                return state


    }
}

export const courierBoySigninReducer=(state ={},action)=>{
    switch(action.type){
      case COURIERBOY_SIGNIN_REQUEST:
          return {loading:true}
      case COURIERBOY_SIGNIN_SUCCESS:
          return{loading:false,response:action.payload}
       case COURIERBOY_SIGNIN_FAIL:
           return {loading:false,error:action.payload} 
       case COURIERBOY_SIGNOUT:
           return {}
           default:
               return state       

    }
}


    export const editProfileReducer=(state ={},action)=>{
        switch(action.type){
          case EDIT_PROFILE_REQUEST:
              return {loading:true}
          case EDIT_PROFILE_SUCCESS:
              return{loading:false,response:action.payload}
           case EDIT_PROFILE_FAIL:
               return {loading:false,error:action.payload} 
        
               default:
                   return state       
    
        }

    }