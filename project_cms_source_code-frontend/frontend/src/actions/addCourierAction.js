import{
    COURIER_ADD_FAIL,
    COURIER_ADD_REQUEST,
    COURIER_ADD_SUCCESS,

 
   
  
}from '../constatnts/courierConstant'
import{
    BRANCH_FETCH_FAIL,
   BRANCH_FETCH_REQUEST,
    BRANCH_FETCH_SUCCESS,

 
   
  
}from '../constatnts/getBranchConstant'

import axios from 'axios'
import {  useState } from 'react'


export const addcourier=(length,breadth,weight,deliveryType,price,recipientfName,recipientlName,senderfName,senderlName,branchId,pickupDateTime,
    areasrc,housenosrc,citysrc,talukasrc,districtsrc,countrysrc,pincodesrc
    ,areadest,housenodest,citydest,talukadest,districtdest,countrydest,pincodedest)=>{
    return(dispatch)=>{
        dispatch({
            type:COURIER_ADD_REQUEST,
        })

        const header={
            headers:{
                'Content-Type':'application/json',
                token:sessionStorage.getItem['token']
                
            },
        }
        const body={
           length,breadth,weight,deliveryType,price,recipientfName,recipientlName,senderfName,senderlName,branchId,pickupDateTime,"sourceAddress":{
            "pincode":pincodesrc,
           "area":areasrc,
            "houseno":housenosrc,
            "city":citysrc,
            "taluka":talukasrc,
            "district":districtsrc,
            "country":countrysrc,
            "addressType":"SOURCE_ADDRESS"
            

         
        },"destinationAddress":{
            "pincode":pincodedest,
           "area":areadest,
            "houseno":housenodest,
            "city":citydest,
            "taluka":talukadest,
            "district":districtdest,
            "country":countrydest,
            "addressType":"DESTINATION_ADDRESS"

           }
            
        }
        
        var userid=sessionStorage.getItem('userId')
      const url='http://localhost:8080/courier/courier/addCourier/'+userid
        axios
        .post(url,body,header)
        .then((response)=>{
          sessionStorage.setItem("user", JSON.stringify(response.data));
          alert("courier added successfully")
            dispatch({
                type:COURIER_ADD_SUCCESS,
                payload:response.data,
            })
        })
        .catch((error)=>{
            dispatch({
                type:COURIER_ADD_FAIL,
                payload:error,
            })
        })
    }
}

export const getBranchName = () => {
    return (dispatch) => {
      dispatch({
        type:BRANCH_FETCH_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json'
          
        },
      }
  
      const url = 'http://localhost:8080/courier/api/listOfBranchName'
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
  

