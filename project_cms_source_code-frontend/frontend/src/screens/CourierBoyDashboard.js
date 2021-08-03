import React from 'react';
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { useState, useEffect } from 'react'
import {  MDBCardBody, MDBCardImage,  MDBCardText} from 'mdbreact';

import axios from 'axios'

import Header from '../components/header'
import { signup } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
const CourierBoyDashboard = () => {
    
const [posts,setPosts] = useState([])


    useEffect(()=>{

        
        axios.get('http://localhost:8080/courier/api/count/'+sessionStorage.getItem('userId'))
        .then(res =>{
            console.log(res)
            setPosts(res.data)
            
        })
        .catch(err => {
            console.log(err)
        })
    },[])

 
  return (
    
    <MDBRow className="container">

<MDBCol md="4">
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://image.shutterstock.com/image-vector/electronic-request-message-concept-flat-260nw-794025517.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>New Request:{posts}</MDBCardTitle>
          
          
          <MDBBtn href="#">View</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

   

     
    
     <h2 className="h1-responsive font-weight-bold my-5 text-center">
      Our Branches
    </h2>   
   
      <MDBCol md='4'>
        <MDBCard
          className='card-image'
          style={{
            backgroundImage:
              "url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
          }}
        >
          <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
            <div>
              <h5 className='pink-text'>
                <MDBIcon icon='chart-pie' />Delivering
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>Delhi Branch</strong>
              </MDBCardTitle>
              <p className="pb-3">
               Email:delhi@gmail.com
                
              </p>
              <p className="pb-3">
               Contact:9345364787
                
              </p>
              <p className="pb-3">
                Address:Oriental 1St And 2Nd Floor, 86, Janpath, New Delhi
                </p>
                <p className="pb-3"> 
                Pincode:789-456
                </p>
              <MDBBtn color='pink'>
                <MDBIcon icon='clone left' /> View Branch
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>

      <MDBCol md='4'>
        <MDBCard
          className='card-image'
          style={{
            backgroundImage:
              "url('https://images-platform.99static.com/9Vl4ZPZ_Xvn9ao5RrZ3DghhU-Z0=/500x500/top/smart/99designs-contests-attachments/18/18093/attachment_18093570')"
          }}
        >
          <div className='text-white text-center d-flex align-items-center rgba-green-strong py-5 px-4'>
            <div>
              <h5 className='orange-text'>
                <MDBIcon icon='desktop' /> Delivering
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>Mumbai Branch</strong>
              </MDBCardTitle>
              <p className="pb-3">
               Email:mumbai@gmail.com
                
              </p>
              <p className="pb-3">
               Contact:9857364787
                
              </p>
              <p className="pb-3">
                Address:12B,Firojshaha Nagar,Mumbai
                </p>
                <p className="pb-3"> 
                Pincode:123-456
                </p>
              <MDBBtn color='deep-orange'>
                <MDBIcon icon='clone left' /> View Branch
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>

      <MDBCol md='4'>
        <MDBCard
          className='card-image'
          style={{
            backgroundImage:
              "url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
          }}
        >
          <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
            <div>
              <h5 className='pink-text'>
                <MDBIcon icon='chart-pie' />Delivering
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>Nagpur Branch</strong>
              </MDBCardTitle>
              <p className="pb-3">
               Email:nagpur@gmail.com
                
              </p>
              <p className="pb-3">
               Contact:8765483212
                
              </p>
              <p className="pb-3">
                Address:23,IT Park Road,Pratap nagar,Nagpur
                </p>
                <p className="pb-3"> 
                Pincode:345-908
                </p>
              <MDBBtn color='pink'>
                <MDBIcon icon='clone left' /> View Branch
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>


      <MDBCol  className="container"
      md='4'>
        <MDBCard
          className='card-image'
          style={{
            backgroundImage:
              "url('https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2019/01/2019-01-28.jpg')"
          }}
        >
          <div className='text-white text-center d-flex align-items-center rgba-green-strong py-5 px-4'>
            <div>
              <h5 className='orange-text'>
                <MDBIcon icon='desktop' /> Delivering
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>Pune Branch</strong>
              </MDBCardTitle>
              <p className="pb-3">
               Email:pune@gmail.com
                
              </p>
              <p className="pb-3">
               Contact:9857483212
                
              </p>
              <p className="pb-3">
                Address:19T,Karve Nagar,Pune
                </p>
                <p className="pb-3"> 
                Pincode:789-407
                </p>
              <MDBBtn color='deep-orange'>
                <MDBIcon icon='clone left' /> View Branch
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

export default CourierBoyDashboard;