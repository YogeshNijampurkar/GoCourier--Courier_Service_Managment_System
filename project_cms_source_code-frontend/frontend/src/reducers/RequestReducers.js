import {
    
   REQUEST_FETCH_REQUEST,
   REQUEST_FETCH_SUCCESS,
   REQUEST_FETCH_FAIL,
   REQUEST_FETCH_RESET,
  } from '../constants/requestConstants'
  

  
  export const fetchRequestReducer = (state = {}, action) => {
    switch (action.type) {
      case REQUEST_FETCH_REQUEST:
        return { loading: true }
      case REQUEST_FETCH_SUCCESS:
        return { loading: false, response: action.payload }
      case REQUEST_FETCH_FAIL:
        return { loading: false, error: action.payload }
      case REQUEST_FETCH_RESET:
        return {}
      default:
        return state
    }
  }
  