import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import HomeNavbar from "./HomeNavbar";
import Navigation from "./navigation";
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header'
import { signup } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const UserSignup = (props) => {
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
     const [email, setEmail] = useState('')
     const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
   
    const dispatch = useDispatch()

    const userSignup = useSelector((store) => store.userSignup)
  const { loading, response, error } = userSignup

  useEffect(() => {
    if (response ) {
      alert('Signup Successfull...!!!!')
          props.history.push('/usersignin')
        } else if (error) {
        alert('Something Went Wrong!!! Check details!!!')
        }
  }, [loading, response, error])

  const onSignup = () => {
    
    dispatch(signup(firstName,lastName, email,phone, password,))
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
                'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg8Jzryz3LlQW32Kh-rWNJ3H6BwAzGW1RQXw&usqp=CAU)',
              width: '28rem'
            }}
          >
            <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                  <strong>SIGN</strong>
                  <a href='#!' className='green-text font-weight-bold'>
                    <strong> Up</strong>
                  </a>
                </h3>
              </div>
              <MDBInput onChange={(e)=>{setfirstName(e.target.value)}}
                label='Your FirstName'
                group
                type='text'
                validate
                labelClass='white-text' style={{color: "#FFFFFF"}}  
              />
              <MDBInput
              onChange={(e)=>{setlastName(e.target.value)}}
                label='Your LastName'
                group
                type='text'
                validate
                labelClass='white-text'  style={{color: "#FFFFFF"}} 
              />
                <MDBInput
                onChange={(e)=>{setEmail(e.target.value)}}
                label='Your Email'
                group
                type='email'
                validate
                labelClass='white-text'  style={{color: "#FFFFFF"}} 
              />
                <MDBInput
                 onChange={(e)=>{setPassword(e.target.value)}}
                label='Your Password'
                group
                type='password'
                validate
                labelClass='white-text'  style={{color: "#FFFFFF"}} 
              />
               { password && <div style={{color:" #ffb3b3"}}>Password must contain [A-Z] ,[$,#,@] ,[0-9] </div>}
              <MDBInput
              onChange={(e)=>{setPhone(e.target.value)}}
                label='Your Contact No.'
                group
                type='number'
                validate
                labelClass='white-text'  style={{color: "#FFFFFF"}} 
              />
             
              
           
              <MDBRow className='d-flex align-items-center mb-4'>
                <div className='text-center mb-3 col-md-12'>
                  <MDBBtn
                    color='success'
                    rounded
                    type='button'
                    className='btn-block z-depth-1'onClick={onSignup}
                  >
                    Sign up
                  </MDBBtn>
                </div>
                {userSignup.loading &&<div>waiting for result</div>}
              </MDBRow>
              <MDBCol md='12'>
                <p className='font-small white-text d-flex justify-content-end'>
                  Have an account?
                  <a href='/usersignin' className='green-text ml-1 font-weight-bold'>
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

export default UserSignup;
