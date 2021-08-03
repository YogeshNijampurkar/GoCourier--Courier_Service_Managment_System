import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import HomeNavbar from "./HomeNavbar";
import Navigation from "./navigation";

import { useState, useEffect } from 'react'

import { branchRegister} from '../actions/branchManagerActions'
import { useDispatch, useSelector } from 'react-redux'


const BranchSignup = (props) => {
    const[branchName,setbranchName]=useState('')
    const[email,setemail]=useState('')
    const[phone,setPhone]=useState('')
    const[password,setPassword]=useState('')
    const[area,setArea]=useState('')
    const[city,setCity]=useState('')
    const[taluka,settaluka]=useState('')
    const[district,setdistrict]=useState('')
    const[pincode,setPincode]=useState('')


     const dispatch=useDispatch()

     const branchManagerSignup=useSelector((store)=>store.branchRegister)
     const{loading,response,error}=branchManagerSignup

     useEffect(()=>{
      if (response ) {
        alert('Signup Successfull...!!!!')
            props.history.push('/branchsignin')
          } else if (error) {
          alert('Something Went Wrong!!! Check details!!!')
          }
     },[loading,response,error])
     const onBranchManager = () => {
         dispatch(branchRegister(branchName,email,phone,password,area,city,taluka,district,pincode,))
     }
  return (
      <div>
          {/* <Navigation /> */}
      
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
                  <strong>BRANCH</strong>
                  <a href='#!' className='green-text font-weight-bold'>
                    <strong> Register</strong>
                  </a>
                </h3>
              </div>
              <MDBInput onChange={(e)=>{setbranchName(e.target.value)}}
                label='Your Branch Name'
                group
                type='text'
                validate
                labelClass='white-text'  style={{color: "#FFFFFF"}} 
              />
            
                <MDBInput onChange={(e)=>{setemail(e.target.value)}}
                label='Your Email'
                group
                type='email'
                validate
                labelClass='white-text' style={{color: "#FFFFFF"}}
              />
                <MDBInput onChange={(e)=>{setPassword(e.target.value)}}
                label='Your Password'
                group
                type='password'
                validate
                labelClass='white-text'  style={{color: "#FFFFFF"}} 
              />
              <MDBInput onChange={(e)=>{setPhone(e.target.value)}}
                label='Your Contact No.'
                group
                type='number'
                validate
                labelClass='white-text'  style={{color: "#FFFFFF"}} 
              />
                <MDBInput onChange={(e)=>{setArea(e.target.value)}}
                label='Branch Area'
                group
                type='text'
                validate
                labelClass='white-text'  style={{color: "#FFFFFF"}} 
              />
             
                <MDBInput onChange={(e)=>{setCity(e.target.value)}}
                label='Branch City'
                group
                type='text'
                validate
                labelClass='white-text'  style={{color: "#FFFFFF"}} 
              />
                <MDBInput onChange={(e)=>{setPincode(e.target.value)}}
                label='Pincode'
                group
                type='text'
                validate
                labelClass='white-text'  style={{color: "#FFFFFF"}} 
              />
           
              <MDBRow className='d-flex align-items-center mb-4'>
                <div className='text-center mb-3 col-md-12'>
                  <MDBBtn onClick={onBranchManager}
                    color='success'
                    rounded
                    type='button'
                    className='btn-block z-depth-1' 
                  >
                    Sign up
                  </MDBBtn>
                </div>
                {branchManagerSignup.loading &&<div>waiting for result</div>}
              </MDBRow>
              <MDBCol md='12'>
                <p className='font-small white-text d-flex justify-content-end'>
                  Have an account?
                  <a href='/branchsignin' className='green-text ml-1 font-weight-bold'>
                   Sign in
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

export default BranchSignup;
