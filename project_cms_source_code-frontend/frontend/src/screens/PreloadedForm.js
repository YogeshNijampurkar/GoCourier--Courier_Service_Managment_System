import { useEffect } from 'react'
import  React,{ useDispatch, useSelector,useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';



const PreloadedForm=({courier})=>{
    
const [posts,setPosts] = useState([])

useEffect(()=>{

    
    axios.get('http://localhost:8080/courier/api/listOfCourier/'+courier)
    .then(res =>{
        console.log(res)
        setPosts(res.data)
        
    })
    .catch(err => {
        console.log(err)
    })
},[])
   
    return(
        <div>

<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
        { <div>
            {
               posts.map(post =>(

                <form>
        <p className="h5 text-center mb-4">Sign up</p>
        <div className="grey-text">
        <MDBInput label="Sender Name" value={post.name}cm  group type="text" validate error="wrong"
            success="right" />
             <MDBInput label="Receipient Name" value={post.name}cm  group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Length" value={post.length}cm  group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="breadth" value={post.breadth}cm  group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Weight"  value={post.weight}kg  group type="text" validate
            error="wrong" success="right" />
          <MDBInput label="Source ADdress" value={post.address}kg group type="password" validate />

          <MDBInput label="Destination ADdress" value={post.address}kg group type="password" validate />

          <MDBInput label="Pickup Date time" value={post.address}kg group type="password" validate />
          <MDBInput label="courier bpy email" value={post.address}kg group type="password" validate />
        </div>
        <div className="text-center">
          <MDBBtn color="primary">Register</MDBBtn>
        </div>
      </form>
    ))
}
                  
</div>
               
             }
               </MDBCol>
               </MDBRow>
             </MDBContainer>
               </div>
            
       
            
            
               )
            }

export default PreloadedForm
