import {
    BRANCH_SIGNIN_FAIL,
    BRANCH_SIGNIN_REQUEST,
    BRANCH_SIGNIN_SUCCESS,
    BRANCH_SIGNOUT,
    BRANCH_SIGNUP_FAIL,
    BRANCH_SIGNUP_REQUEST,
    BRANCH_SIGNUP_SUCCESS,
  } from '../constatnts/branchManagerConstants'

  export const branchRegisterReducer=(state ={},action)=>{
    switch(action.type){
        case BRANCH_SIGNUP_REQUEST:
            return {loading:true}
        case BRANCH_SIGNUP_SUCCESS:
                return{loading:false,response:action.payload}
        case BRANCH_SIGNUP_FAIL:
            return {loading:false,error:action.payload}
            default:
                return state


    }
}

export const branchSigninReducer=(state ={},action)=>{
    switch(action.type){
      case BRANCH_SIGNIN_REQUEST:
          return {loading:true}
      case BRANCH_SIGNIN_SUCCESS:
          return{loading:false,response:action.payload}
       case BRANCH_SIGNIN_FAIL:
           return {loading:false,error:action.payload} 
       case BRANCH_SIGNOUT:
           return {}
           default:
               return state       

    }

}
