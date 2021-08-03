import{
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
   EDIT_PROFILE_REQUEST,
   EDIT_PROFILE_SUCCESS,
   EDIT_PROFILE_FAIL,
}from '../constatnts/userConstants'

import axios from 'axios'


export const logout=()=>{
    return(dispatch)=>{
      
        sessionStorage.removeItem("userId");
        sessionStorage.removeItem("firstName");
        sessionStorage.removeItem("lastName");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        sessionStorage.removeItem("role");
        dispatch({type:USER_SIGNOUT})
        document.location.href='/signin'
    }
}

export const signup=(firstName,lastName,email,phone,password,)=>{
    return(dispatch)=>{
        dispatch({
            type:USER_SIGNUP_REQUEST,
        })

        const header={
            headers:{
                'Content-Type':'application/json',
            },
        }
        const body={
            firstName,
            lastName,
            email,
            phone,
            password,
            
        }
       
        const url='http://localhost:8080/courier/user/userSignup'
        axios
        .post(url,body,header)
        .then((response)=>{
            dispatch({
                type:USER_SIGNUP_SUCCESS,
                payload:response.data,
            })
        })
        .catch((error)=>{
            dispatch({
                type:USER_SIGNUP_FAIL,
                payload:error,
            })
        })
    }
}

export const signin=(email,password)=>{
    return(dispatch)=>{
        dispatch({
            type:USER_SIGNIN_REQUEST,
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
    const url = 'http://localhost:8080/courier/user/signin'
    axios
    .post(url,body,header)
    .then((response)=>{
        if(null!=response.data && response.data!=""){
        sessionStorage.setItem("userId", response.data.userid);
        sessionStorage.setItem("firstName", response.data.firstName);
        sessionStorage.setItem("lastName", response.data.lastName);
        sessionStorage.setItem("email", response.data.email);
        sessionStorage.setItem("phone", response.data.phone);
        sessionStorage.setItem("role", response.data.role);
        }
        dispatch({
            type:USER_SIGNIN_SUCCESS,
            payload:response.data,
        })
    })
    .catch((error)=>{
        dispatch({
            type:USER_SIGNIN_FAIL,
            payload:error,
        })

    })
}
}


export const courierBoySignup=(firstName,lastName,email,phone,password,city,)=>{
    return(dispatch)=>{
        dispatch({
            type:COURIERBOY_SIGNUP_REQUEST,
        })

        const header={
            headers:{
                'Content-Type':'application/json',
            },
        }
        const body={
            firstName,
            lastName,
            email,
            phone,
            password,
            city,
            
        }
       
        const url='http://localhost:8080/courier/courierboy/courierBoySignup'
        axios
        .post(url,body,header)
        .then((response)=>{
            dispatch({
                type:COURIERBOY_SIGNUP_SUCCESS,
                payload:response.data,
            })
        })
        .catch((error)=>{
            dispatch({
                type:COURIERBOY_SIGNUP_FAIL,
                payload:error,
            })
        })
    }
}

export const courierBoySignin=(email,password)=>{
    return(dispatch)=>{
        dispatch({
            type:COURIERBOY_SIGNIN_REQUEST,
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
    const url = 'http://localhost:8080/courier/courierboy/signin'
    axios
    .post(url,body,header)
    .then((response)=>{
        if(null!=response.data && response.data!=""){
        sessionStorage.setItem("userId", response.data.userid);
        sessionStorage.setItem("firstName", response.data.firstName);
        sessionStorage.setItem("lastName", response.data.lastName);
        sessionStorage.setItem("email", response.data.email);
        sessionStorage.setItem("phone", response.data.phone);
        sessionStorage.setItem("role", response.data.role);
        sessionStorage.setItem("city", response.data.city);
        }
        dispatch({
            type:USER_SIGNIN_SUCCESS,
            payload:response.data,
        })
    })
    .catch((error)=>{
        dispatch({
            type:USER_SIGNIN_FAIL,
            payload:error,
        })

    })
}
}

export const editProfile=(firstName,lastName,email,phone)=>{
    return(dispatch)=>{
        dispatch({
            type:EDIT_PROFILE_REQUEST,
        })

        const header={
            headers:{
                'Content-Type':'application/json',
            },
        }
        const body={
            firstName,
            lastName,
            email,
            phone,
           
            
        }
       
        const url='http://localhost:8080/courier/user/update/'+sessionStorage.getItem("userId")
        axios
        .put(url,body,header)
        .then((response)=>{
            dispatch({
                type:EDIT_PROFILE_SUCCESS,
                payload:response.data,
            })
        })
        .catch((error)=>{
            dispatch({
                type:EDIT_PROFILE_FAIL,
                payload:error,
            })
        })
    }
}