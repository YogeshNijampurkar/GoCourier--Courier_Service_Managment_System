import {
   COURIER_ADD_FAIL,
   COURIER_ADD_REQUEST,
   COURIER_ADD_SUCCESS,

   COURIER_FETCH_REQUEST,
   COURIER_FETCH_SUCCESS,
   COURIER_FETCH_FAIL,

   COURIER_STATUS_REQUEST,
   COURIER_STATUS_SUCCESS,
   COURIER_STATUS_FAIL,

   COURIER_ASSIGN_REQUEST,
   COURIER_ASSIGN_SUCCESS,
   COURIER_ASSIGN_FAIL
   
  } from '../constatnts/courierConstant'

  export const courierReducer=(state ={},action)=>{
    switch(action.type){
        case COURIER_ADD_REQUEST:
            return {loading:true}
        case COURIER_ADD_SUCCESS:
                return{loading:false,response:action.payload}
        case COURIER_ADD_FAIL:
            return {loading:false,error:action.payload}
            default:
                return state


    }
}


export const courierListReducer=(state ={},action)=>{
    switch(action.type){
        case COURIER_FETCH_REQUEST:
            return {loading:true}
        case COURIER_FETCH_SUCCESS:
                return{loading:false,response:action.payload}
        case COURIER_FETCH_FAIL:
            return {loading:false,error:action.payload}
            default:
                return state


    }
}

export const changeStatusReducer=(state ={},action)=>{
    switch(action.type){
        case COURIER_STATUS_REQUEST:
            return {loading:true}
        case COURIER_STATUS_SUCCESS:
                return{loading:false,response:action.payload}
        case COURIER_STATUS_FAIL:
            return {loading:false,error:action.payload}
            default:
                return state


    }
}

export const assignCourierReducer=(state ={},action)=>{
    switch(action.type){
        case COURIER_ASSIGN_REQUEST:
            return {loading:true}
        case COURIER_ASSIGN_SUCCESS:
                return{loading:false,response:action.payload}
        case COURIER_ASSIGN_FAIL:
            return {loading:false,error:action.payload}
            default:
                return state


    }
}
