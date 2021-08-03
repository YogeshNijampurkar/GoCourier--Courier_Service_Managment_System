import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

import {useDispatch,useSelector} from 'react-redux'

import { branchSignin } from '../actions/branchManagerActions'


import Navigation from "./navigation";

const BranchLogin = (props) => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const branchsignin =useSelector((store)=>store.branchSignin)
    const{loading,error,response}=branchsignin
    

    const dispatch=useDispatch()
    const onBranchSignin = ()=>{
        dispatch(branchSignin(email,password))
    }

    useEffect(()=>{
      console.log(sessionStorage.getItem('addressType'))
      if(response)
      props.history.push('/dashboard')
    
    },[loading,error,response])

  return (
    <div>
    {/* <Navigation/> */}
    <MDBContainer   style={{
             
             width: '28rem'
           }} className="mt-5">
            
      <MDBRow>
        <MDBCol md='6'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url(https://images.pexels.com/photos/6368894/pexels-photo-6368894.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
              width: '28rem'
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
              <MDBInput
              onChange={(e)=>{setPassword(e.target.value)}}
                label='Your password'
                group
                type='password'
                validate
                labelClass='white-text'  style={{color: "#FFFFFF"}} 
              />
           
              <MDBRow className='d-flex align-items-center mb-4'>
                <div className='text-center mb-3 col-md-12'>
                  <MDBBtn
                  onClick={onBranchSignin}
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
                  <a href='/branchsignup' className='green-text ml-1 font-weight-bold'>
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

export default BranchLogin;
