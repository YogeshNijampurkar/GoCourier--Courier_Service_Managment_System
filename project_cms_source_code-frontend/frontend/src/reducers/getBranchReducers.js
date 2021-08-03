import {
    BRANCH_FETCH_FAIL,
    BRANCH_FETCH_REQUEST,
    BRANCH_FETCH_SUCCESS,
    BRANCH_FETCH_RESET
   
  } from '../constatnts/getBranchConstant'


  export const fetchBranchReducer = (state = {}, action) => {
    switch (action.type) {
      case BRANCH_FETCH_REQUEST:
        return { loading: true }
      case BRANCH_FETCH_SUCCESS:
        return { loading: false, response: action.payload }
      case BRANCH_FETCH_FAIL:
        return { loading: false, error: action.payload }
      case BRANCH_FETCH_RESET:
        return {}
      default:
        return state
    }
  }
  