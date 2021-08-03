import {
    REQUEST_FETCH_FAIL,
    REQUEST_FETCH_REQUEST,
    REQUEST_FETCH_SUCCESS,
  } from '../constatnts/requestConstant'
  import axios from 'axios'
  
  export const getRequest = () => {
    return (dispatch) => {
      dispatch({
        type: REQUEST_FETCH_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          token: sessionStorage['token'],
        },
      }
  
      const url = 'http://localhost:4000/notes/'
      axios
        .get(url, header)
        .then((response) => {
          dispatch({
            type: REQUEST_FETCH_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: REQUEST_FETCH_FAIL,
            payload: error,
          })
        })
    }
  }
  