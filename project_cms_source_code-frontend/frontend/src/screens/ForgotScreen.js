import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const ForgotPassScreen=(props)=>{

    const [email,setemail]=useState('')
    const body={
        email
    }

    const url='http://localhost:8080/courier/user/forgotPassword'
    const dispatch =useDispatch()
    const onForgot=()=>{
        axios.post(url,body).then((res)=>{
            alert(res)

        }).catch()
    
        
}

useEffect(()=>{

    

},[])

    return (
        <div className="container">

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
                'url(https://image.freepik.com/free-vector/forgot-password-concept-illustration_114360-1095.jpg)',
              width: '28rem',
            }}
          >
            <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                  <strong>FORGOT</strong>
                  <a href='#!' className='green-text font-weight-bold'>
                    <strong> PASSWORD</strong>
                  </a>
                </h3>
              </div>
             
              <MDBInput onChange={(e)=>{setemail(e.target.value)}}
                label='Your email'
                group
                type='email'
                validate
                labelClass='white-text'  style={{color: "#FFFFFF"}} 
              />
           
            
           <MDBBtn onClick={onForgot}
                    color='success'
                    rounded
                    type='button'
                    className='btn-block z-depth-1'
                  >
                  Submit
                  </MDBBtn>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    {/* <div className="form-group">
      <label for="email">Email:</label>
      <input onChange={(e)=>{setemail(e.target.value)}} type="email" className="form-control"  placeholder="Enter Email" />
    </div> */}
     
    <button  className="btn btn-success">Submit</button>

        </div>
    )
}
export default ForgotPassScreen