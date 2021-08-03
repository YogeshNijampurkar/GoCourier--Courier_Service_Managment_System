import { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'



import {changeStatus} from '../actions/branchManagerActions'
import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';


const CourierBoyChangeStatus = (props) => {
    
    const [id, setcourierId] = useState('')
    const [branchId, setbranchId] = useState('')
    const [status, setstatus] = useState('')
     
    const dispatch = useDispatch()

    const changeStatu = useSelector((store) => store.changeStatus)
  const { loading, response, error } = changeStatu

  useEffect(() => {
    if (response ) {
      alert('Status Changed Successfully...!!!!')
          
        } else if (error) {
        alert('Something Went Wrong!!! Check details!!!')
        }
  }, [loading, response, error])

  const onUpdate = () => {
      console.log("bid"+branchId)
      console.log("st"+status)
    
    dispatch(changeStatus(id,branchId,status,))
  }
  return(
      <div >
        <div >
   <div style={{height:"10px"}}>
        <img src="https://image.shutterstock.com/image-vector/delivery-logo-template-260nw-327587036.jpg" className="rounded-circle img-fluid mb-0" />
      </div>
        <MDBContainer  style={{
              backgroundImage:
                'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5RTnwp5vY964sGXaJ78sj-pXpCGUhuvqpQ&usqp=CAU)',
              width: '28rem', marginTop:"100px",
            }} >
        
  <MDBRow >
    <MDBCol md="12" className="block-example border border-primary">
      <form>
        <p className="h5 text-center mb-4">Change Status</p>
        <div className="grey-text">
          <MDBInput   label="Courier id"  group type="number" validate error="wrong"
            success="right" onChange={(e)=>{setcourierId(e.target.value)}} />
          <MDBInput label="Branch Id"  group type="number" validate error="wrong"
            success="right" onChange={(e)=>{setbranchId(e.target.value)}} />
            <MDBInput label="Status"  group type="text" validate error="wrong"
            success="right" onChange={(e)=>{setstatus(e.target.value)}} />
        </div>
        <div className="text-center">
          <MDBBtn outline color="info"  onClick={onUpdate}>
            Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</div>
    
      
      </div>
    
      
  )
}

export default CourierBoyChangeStatus
