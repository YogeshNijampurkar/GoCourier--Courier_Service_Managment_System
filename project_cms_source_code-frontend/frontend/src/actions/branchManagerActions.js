import{
    BRANCH_SIGNIN_FAIL,
    BRANCH_SIGNIN_REQUEST,
    BRANCH_SIGNIN_SUCCESS,
    BRANCH_SIGNOUT,
    BRANCH_SIGNUP_FAIL,
    BRANCH_SIGNUP_REQUEST,
    BRANCH_SIGNUP_SUCCESS,

   

   

}from '../constatnts/branchManagerConstants'

import{
    COURIER_FETCH_FAIL,
    COURIER_FETCH_REQUEST,
    COURIER_FETCH_SUCCESS,

    COURIER_STATUS_FAIL,
    COURIER_STATUS_REQUEST,
    COURIER_STATUS_SUCCESS,
    COURIER_ASSIGN_REQUEST,
    COURIER_ASSIGN_SUCCESS,
    COURIER_ASSIGN_FAIL

}from '../constatnts/courierConstant'

import axios from 'axios'

export const logout=()=>{
    return(dispatch)=>{
        // sessionStorage.removeItem('token')
        dispatch({type:BRANCH_SIGNOUT})
        document.location.href='/signin'
    }
}


export const branchRegister=(branchName,email,phone,password,area,city,pincode)=>{
    return(dispatch)=>{
        dispatch({
            type:BRANCH_SIGNUP_REQUEST,
        })

        const header={
            headers:{
                'Content-Type':'application/json',
            },
        }
        const body={
            branchName,
            email,
            phone,
            password,
            area,
            city,
           pincode
            
        }
       
        const url='http://localhost:8080/courier/api/signUp'
        axios
        .post(url,body,header)
        .then((response)=>{
            dispatch({
                type:BRANCH_SIGNUP_SUCCESS,
                payload:response.data,
            })
        })
        .catch((error)=>{
            dispatch({
                type:BRANCH_SIGNUP_FAIL,
                payload:error,
            })
        })
    }
}

export const branchSignin=(email,password)=>{
    return(dispatch)=>{
        dispatch({
            type:BRANCH_SIGNIN_REQUEST,
        })

        const header={
            headers:{
                'Content-Type':'application/json',
            },
        }
    
    const body={
        email,
        password,
    }
    const url = 'http://localhost:8080/courier/api/signin'
    axios
    .post(url,body,header)
    .then((response)=>
    {
        if(null!=response.data && response.data!=""){
        sessionStorage.setItem("branchManagerId",response.data.branchId);
        sessionStorage.setItem("branchName",response.data.branchName);
        sessionStorage.setItem("email",response.data.email);
        sessionStorage.setItem("phone",response.data.phone);
        sessionStorage.setItem("addressType",response.data.addressType);
        sessionStorage.setItem("city",response.data.city);
        }
        dispatch({
            type:BRANCH_SIGNIN_SUCCESS,
            payload:response.data,
        })
    })
    .catch((error)=>{
        dispatch({
            type:BRANCH_SIGNIN_FAIL,
            payload:error,
        })

    })
}
}

export const getList=()=>{
    return(dispatch)=>{
        dispatch({
            type:COURIER_FETCH_REQUEST,
        })

        const header={
            headers:{
                'Content-Type':'application/json',
            },
        }
    
  
    const url = 'http://localhost:8080/courier/api/listOfCourier/1'
    axios
    .get(url,header)
    .then((response)=>{
        dispatch({
            type:COURIER_FETCH_SUCCESS,
            payload:response.data,
        })
    })
    .catch((error)=>{
        dispatch({
            type:COURIER_FETCH_FAIL,
            payload:error,
        })

    })
}
}


export const changeStatus=(id,branchId,status)=>{
    return(dispatch)=>{
        dispatch({
            type:COURIER_STATUS_REQUEST,
        })

        const header={
            headers:{
                'Content-Type':'application/json',
            },
        }
        const body={
           id,branchId,status
            
        }
    
  
    const url = 'http://localhost:8080/courier/api/changeStatus'
    axios
    .put(url,body,header)
    .then((response)=>{
        dispatch({
            type:COURIER_STATUS_SUCCESS,
            payload:response.data,
        })
    })
    .catch((error)=>{
        dispatch({
            type:COURIER_STATUS_FAIL,
            payload:error,
        })

    })
}
}

export const assignCourierBoy=(id,email,branchId,status)=>{
    return(dispatch)=>{
        dispatch({
            type:COURIER_ASSIGN_REQUEST,
        })

        const header={
            headers:{
                'Content-Type':'application/json',
            },
        }
        const body={
           id,email,branchId,status
            
        }
    
  
    const url = 'http://localhost:8080/courier/request/assignCourierBoy'
    axios
    .post(url,body,header)
    .then((response)=>{
        dispatch({
            type:COURIER_ASSIGN_SUCCESS,
            payload:response.data,
        })
    })
    .catch((error)=>{
        dispatch({
            type:COURIER_ASSIGN_FAIL,
            payload:error,
        })

    })
}
}