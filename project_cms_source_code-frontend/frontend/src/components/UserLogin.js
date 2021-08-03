import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { Link } from 'react-router-dom';

import Navigation from "./navigation";
import {useState,useEffect} from 'react'

import {useDispatch,useSelector} from 'react-redux'


import { signin } from '../actions/userActions'

const UserLogin = (props) => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const userSignin =useSelector((store)=>store.userSignin)
    const{loading,error,response}=userSignin

    const dispatch=useDispatch()
    const onSignin = ()=>{
      
        dispatch(signin(email,password))
      
    }
useEffect(()=>{
    console.log(sessionStorage.getItem('role'))
    console.log(response)
    if(response)
    props.history.push("/getBranch")
},[response])

  return (
      <div >
          {/* <Navigation/> */}
      
    <MDBContainer 
            style={{
             
              width: '28rem',
            }} className="mt-5">
            
      <MDBRow>
        <MDBCol md='6'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg8Jzryz3LlQW32Kh-rWNJ3H6BwAzGW1RQXw&usqp=CAU)',
              width: '28rem',
            }}
          >
            <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                  <strong>SIGN</strong>
                  <a href='#!' className='green-text font-weight-bold'>
                    <strong> IN</strong>
                  </a>
                </h3>
              </div>
              <MDBInput
              onChange={(e) =>{setEmail(e.target.value)}}
                label='Your email'
                group
                type='text'
                validate
                labelClass='white-text'  style={{color: "#FFFFFF"}} 
              />
              <MDBInput onChange={(e)=>{setPassword(e.target.value)}}
                label='Your password'
                group
                type='password'
                validate
                labelClass='white-text'  style={{color: "#FFFFFF"}} 
              />
           
              <MDBRow className='d-flex align-items-center mb-4'>
                <div className='text-center mb-3 col-md-12'>
                
                  <MDBBtn onClick={onSignin}
                    color='success'
                    rounded
                    type='button'
                    className='btn-block z-depth-1'
                  >
                    Sign in
                  </MDBBtn>
                  <div>Forgot Password ?<Link to ="/forgot">Forgot Password</Link></div>
                <div></div>
                </div>
                {loading && <div>Waiting for response</div>}
              </MDBRow>
              <MDBCol md='12'>
                <p className='font-small white-text d-flex justify-content-end'>
                  Don't Have an account?
                  <a href='/usersignup' className='green-text ml-1 font-weight-bold'>
                   Sign up
                  </a>
                </p>
              </MDBCol>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
};

export default UserLogin;
