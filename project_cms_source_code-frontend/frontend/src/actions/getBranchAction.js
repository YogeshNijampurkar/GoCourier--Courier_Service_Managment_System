import{
   BRANCH_FETCH_FAIL,
   BRANCH_FETCH_REQUEST,
   BRANCH_FETCH_SUCCESS,
   
  
}from '../constatnts/getBranchConstant'

import axios from 'axios'


export const getBranch = () => {
    return (dispatch) => {
      dispatch({
        type:BRANCH_FETCH_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json'
        },
      }
  
      const url = 'http://localhost:8080/courier/api/listOfBranch'
      axios
        .get(url, header)
        .then((response) => {
          dispatch({
            type: BRANCH_FETCH_SUCCESS,
            payload:response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type:BRANCH_FETCH_FAIL,
            payload: error,
          })
        })
    }
  }
  