import React from 'react';
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { useState, useEffect } from 'react'
import {  MDBCardBody, MDBCardImage,  MDBCardText} from 'mdbreact';

import axios from 'axios'

import Header from '../components/header'
import { signup } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
const BranchDashboard = () => {
    
const [posts,setPosts] = useState([])
const [data,setData] = useState([])
const [count,setCount] = useState([])

const [posts1,setPosts1] = useState([])
const [data1,setData1] = useState([])
const [count1,setCount1] = useState([])


const [posts2,setPosts2] = useState([])
const [data2,setData2] = useState([])
const [count2,setCount2] = useState([])

const [posts3,setPosts3] = useState([])
const [data3,setData3] = useState([])
const [count3,setCount3] = useState([])

    useEffect(()=>{

        
        axios.get('http://localhost:8080/courier/api/count/1')
        .then(res =>{
            console.log(res)
            setPosts(res.data)
            
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    useEffect(()=>{

        
        axios.get('http://localhost:8080/courier/api/countDelivered/1')
        .then(res =>{
            console.log(res)
            setData(res.data)
            
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    useEffect(()=>{

        
        axios.get('http://localhost:8080/courier/api/countTotalCourier/1')
        .then(res =>{
            console.log(res)
            setCount(res.data)
            
        })
        .catch(err => {
            console.log(err)
        })
    },[])



	useEffect(()=>{

        
        axios.get('http://localhost:8080/courier/api/count/2')
        .then(res =>{
            console.log(res)
            setPosts1(res.data)
            
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    useEffect(()=>{

        
        axios.get('http://localhost:8080/courier/api/countDelivered/2')
        .then(res =>{
            console.log(res)
            setData1(res.data)
            
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    useEffect(()=>{

        
        axios.get('http://localhost:8080/courier/api/countTotalCourier/2')
        .then(res =>{
            console.log(res)
            setCount1(res.data)
            
        })
        .catch(err => {
            console.log(err)
        })
    },[])



	useEffect(()=>{

        
        axios.get('http://localhost:8080/courier/api/count/3')
        .then(res =>{
            console.log(res)
            setPosts1(res.data)
            
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    useEffect(()=>{

        
        axios.get('http://localhost:8080/courier/api/countDelivered/3')
        .then(res =>{
            console.log(res)
            setData1(res.data)
            
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    useEffect(()=>{

        
        axios.get('http://localhost:8080/courier/api/countTotalCourier/3')
        .then(res =>{
            console.log(res)
            setCount1(res.data)
            
        })
        .catch(err => {
            console.log(err)
        })
    },[])




	useEffect(()=>{

        
        axios.get('http://localhost:8080/courier/api/count/4')
        .then(res =>{
            console.log(res)
            setPosts1(res.data)
            
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    useEffect(()=>{

        
        axios.get('http://localhost:8080/courier/api/countDelivered/4')
        .then(res =>{
            console.log(res)
            setData1(res.data)
            
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    useEffect(()=>{

        
        axios.get('http://localhost:8080/courier/api/countTotalCourier/4')
        .then(res =>{
            console.log(res)
            setCount1(res.data)
            
        })
        .catch(err => {
            console.log(err)
        })
    },[])





  return (
    
    <MDBRow>

<MDBCol md="3">
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ctUejxpAp2hya9xFo-YSAAig419qvgg4FA&usqp=CAU" waves />
        <MDBCardBody>
		<MDBCardTitle className="indigo-text">Mumbai Branch</MDBCardTitle>
          <MDBCardTitle>New Request:{posts}</MDBCardTitle>
          
          
		  <MDBCardTitle>Total Delivered:{data}</MDBCardTitle>
		 
		  <MDBCardTitle>Total Courier:{count}</MDBCardTitle>
		 
          <MDBBtn href="#">View</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    <MDBCol md="3">
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWCzOTMH-YBDED_DRgA4RaHfMZrTRduvQRQ&usqp=CAU" waves />
        <MDBCardBody>
	
        <MDBCardTitle className="indigo-text">Pune Branch</MDBCardTitle>
          <MDBCardTitle>New Request:{posts1}</MDBCardTitle>
          
          
		  <MDBCardTitle>Total Delivered:{data1}</MDBCardTitle>
		 
		  <MDBCardTitle>Total Courier: {count1}</MDBCardTitle>
		  
          <MDBBtn href="#">View</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

	<MDBCol md="3">
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYSbtr5_im3El8jGSlecsjEvZkscSxD2Gcg&usqp=CAU" waves />
        <MDBCardBody>
		<MDBCardTitle className="indigo-text">Delhi Branch</MDBCardTitle>
          <MDBCardTitle>New Request:{posts2}</MDBCardTitle>
          
         
		  <MDBCardTitle>Total Delivered:{data2}</MDBCardTitle>
		 
		  <MDBCardTitle>Total Courier:{count2}</MDBCardTitle>
		 
          <MDBBtn href="#">View</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    <MDBCol md="3">
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNSNGK9NgpHdG_gcj6UF_a7NRWTYW2HFHC9A&usqp=CAU" waves />
        <MDBCardBody>
		<MDBCardTitle className="indigo-text">Nagpur Branch</MDBCardTitle>
          <MDBCardTitle>New Request:  {posts3}</MDBCardTitle>
          
          <MDBCardText>
         
          </MDBCardText>
		  <MDBCardTitle>Total Delivered: {data3}</MDBCardTitle>
		  <MDBCardText>
          
          </MDBCardText>
		  <MDBCardTitle>Total Courier{count3}</MDBCardTitle>
		 
          <MDBBtn href="#">View</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    
   

     

     


   
    </MDBRow>
  )
}

export default BranchDashboard;