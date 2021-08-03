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
import { courierBoySignup } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const CourierBoySignup = (props) => {
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
     const [email, setEmail] = useState('')
     const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const[city,setCity]=useState('')
   
    const dispatch = useDispatch()

    const userSignup = useSelector((store) => store.courierBoySignup)
  const { loading, response, error } = userSignup

  useEffect(() => {
  if (response ) {
  alert('Signup Successfull...!!!!')
      props.history.push('/couriersignin')
    } else if (error) {
    alert('Something Went Wrong!!! Check details!!!')
    }
  }, [loading, response, error])

  const onSignup = () => {
    
    dispatch(courierBoySignup(firstName,lastName, email,phone, password,city,))
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
                'url(https://images.pexels.com/photos/4604599/pexels-photo-4604599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
              width: '28rem'
            }}
          >
            <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                  <strong>SIGN</strong>
                  <a href='#!' className='green-text font-weight-bold'>
                    <strong> UP</strong>
                  </a>
                </h3>
              </div>
              <MDBInput onChange={(e)=>{setfirstName(e.target.value)}}
                label='Your FirstName'
                group
                type='text'
                validate
                labelClass='white-text'  style={{color: "#2BBBAD"}} 
              />
              <MDBInput
              onChange={(e)=>{setlastName(e.target.value)}}
                label='Your LastName'
                group
                type='text'
                validate
                labelClass='white-text'  style={{color: "#2BBBAD"}} 
              />
                <MDBInput
                onChange={(e)=>{setEmail(e.target.value)}}
                label='Your Email'
                group
                type='email'
                validate
                labelClass='white-text'  style={{color: "#2BBBAD"}} 
              />
                <MDBInput
                 onChange={(e)=>{setPassword(e.target.value)}}
                label='Your Password'
                group
                type='password'
                validate
                labelClass='white-text'  style={{color: "#2BBBAD"}} 
              />
              { password && <div style={{color:" #ffb3b3"}}>Password must contain [A-Z] ,[$,#,@] ,[0-9] </div>}
              <MDBInput
               onChange={(e)=>{setPhone(e.target.value)}}
                label='Your Contact No.'
                group
                type='number'
                validate
                labelClass='white-text'  style={{color: "#2BBBAD"}} 
              />
              <MDBInput
               onChange={(e)=>{setCity(e.target.value)}}
                label='Your City.'
                group
                type='text'
                validate
                labelClass='white-text'  style={{color: "#2BBBAD"}} 
              />
           
              <MDBRow className='d-flex align-items-center mb-4'>
                <div className='text-center mb-3 col-md-12'>
                  <MDBBtn
                    color='success'
                    rounded
                    type='button'
                    className='btn-block z-depth-1' onClick={onSignup}
                  >
                    Sign up
                  </MDBBtn>
                </div>
              </MDBRow>
              <MDBCol md='12'>
                <p className='font-small white-text d-flex justify-content-end'>
                  Have an account?
                  <a href='/couriersignin' className='green-text ml-1 font-weight-bold'>
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

export default CourierBoySignup;
