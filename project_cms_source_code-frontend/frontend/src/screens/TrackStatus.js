import { useEffect } from 'react'
import { useDispatch, useSelector,useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import React from "react";

import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { MDBContainer, MDBInput} from 'mdbreact';




function TrackStatus(props){ 
      
    

const [posts,setPosts] = useState('')
    const [id,setId] = useState()
    useEffect(()=>{

        
        axios.get('http://localhost:8080/courier/user/trackStatus/'+id)
        .then(res =>{
            console.log(res)
            console.log(id)
            setPosts(res.data)
            
        })
        .catch(err => {
            console.log(err)
        })
    },[id])
    //useEffect({},[])
   
  
   
    return(
     
    
        
       
         <div  className="block-example border border-primary container"  md="4">
{/* <MDBCard
            className='card-image'
           
          > */}
<MDBContainer  style={{
              backgroundImage:
                'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwuyXM2boIiSD9Ud_qyoE5gZZ-ZgLXvClTCw&usqp=CAU)',
              width: '28rem',
            }} >

  <MDBRow >

    <MDBCol md="6" className="container">
      <form>
        <p className="h5 text-center mb-4">Track Status Here!!!</p>
        <div className=" h5" style={{color:'black'}}>
          <MDBInput  label="Type your Courier Id" onChange={(e)=>{setId(e.target.value)}}  icon="truck" group type="number" validate error="wrong"
            success="right" />
          
        </div>
       
      </form>
    </MDBCol>
    
  </MDBRow>
 
 
  </MDBContainer>
  {/* </MDBCard> */}

            
     

         
   {id && <MDBRow>
      <MDBCol className="container mb-5" md='4' >
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
                <MDBIcon icon='truck' /> Tracking
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>Track Status</strong>
              </MDBCardTitle>
              <p>
               Your Courier Has Been <h3>{posts}</h3>!!!...
              </p>
              <MDBBtn color='pink'>
                <MDBIcon icon='clone left' /> View Status
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      </MDBRow>
  
      
}
    
      </div>
        
      
      
       
    )
}


  
export default TrackStatus



