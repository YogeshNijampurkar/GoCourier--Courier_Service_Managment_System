import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { useState, useEffect } from 'react'

import { addPayment} from '../actions/paymentActions'
import { useDispatch, useSelector } from 'react-redux'


const Payment = (props) => {
    const[acctHolderName,setacctholdername]=useState('')
    const[cardNo,setcardno]=useState('')
    const[cvc,setcvc]=useState('')
    const[validUpto,setvalidupto]=useState('')
    const[paymentType,setpaymentype]=useState('')
    const[amount,setamount]=useState('')
    


     const dispatch=useDispatch()

     const payment=useSelector((store)=>store.payment)
     const{loading,response,error}=payment
  const courierId=sessionStorage.getItem("courierPayId")

     
     const onaddPayment = () => {
      dispatch(addPayment(acctHolderName,cardNo,cvc,validUpto,paymentType,amount,courierId))
  }
 
     useEffect(()=>{
       if(response)
       props.history.push('/paymentOtp')
     },[loading,response,error])

  return (
      <div  >
         
    
    <MDBContainer   style={{
             
             width: '28rem'
           }} className="mt-5">
            
      <MDBRow>
        <MDBCol md='6'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url(data:image/jpeg;base64,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)',
              width: '28rem',
            }}
          >
            <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                  <strong>PAYMENT</strong>
                  <a href='#!' className='green-text font-weight-bold'>
                    <strong> </strong>
                  </a>
                </h3>
              </div>
              <MDBInput onChange={(e)=>{setacctholdername(e.target.value)}}
                label='Account holder name'
                group
                type='text'
                validate
                labelClass='white-text' style={{color: "#FFFFFF"}}  
              />
              <MDBInput
              onChange={(e)=>{setcardno(e.target.value)}}
                label='Card Number'
                group
                type='number'
                validate
                labelClass='white-text'  style={{color: "#FFFFFF"}} 
              />
                <MDBInput
                onChange={(e)=>{setcvc(e.target.value)}}
                label='CVC'
                group
                type='text'
                validate
                labelClass='white-text'  style={{color: "#FFFFFF"}} 
              />
              <MDBInput
                onChange={(e)=>{setpaymentype(e.target.value)}}
                label='Payment type'
                value="Card" readonly
                group
                type='text'
                validate
                labelClass='white-text'  style={{color: "#FFFFFF"}} 
              />
                <MDBInput
                 onChange={(e)=>{setvalidupto(e.target.value)}}
                label='Valid Upto'
                group
                type='text'
                validate
                labelClass='white-text'  style={{color: "#FFFFFF"}} 
              />
              <MDBInput
              onChange={(e)=>{setamount(e.target.value)}}
                label='Amount'
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
                    className='btn-block z-depth-1'onClick={onaddPayment}
                  >
                    Submit
                  </MDBBtn>
                </div>
                {payment.loading &&<div>waiting for result</div>}
              </MDBRow>
            
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    </div>
  );
};

export default Payment;
