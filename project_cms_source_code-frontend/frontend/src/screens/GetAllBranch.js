import { useEffect } from 'react'
import  React,{ useDispatch, useSelector,useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import { MDBBtn } from "mdbreact";



const GetAllBranch=(props)=>{
    
const [posts,setPosts] = useState([])
const brachId=sessionStorage.getItem('branchManagerId')



useEffect(()=>{
  


    
    axios.get('http://localhost:8080/courier/api/listOfBranch')
    .then(res =>{
        console.log(res)
        setPosts(res.data)
        
    })
    .catch(err => {
        console.log(err)
    })
},[])
const onAssign=()=>{
    props.history.push('/assign')
}

const onSend=()=>{
    props.history.push('/changeStatus')
}
   
    return(
        <div style={{
            backgroundImage:
          'linear-gradient(to right top, #050537, #004482, #00819e, #00bc76, #a8eb12)'
          }} className="mt-5" >
        <div >
            <table className="table ">
            <thead class="thead-dark table-success">
                    <th scope="col">BranchId</th>
                   <th scope="col">Branch Name</th>
                   <th >Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col"> Address</th>
                   
                    <th scope="col">Action</th>
                    </thead>
                    
               
          
         

     
           
   { <tbody>{
   posts.map(post =>(
       <tr  >
           
        <th  style={{color:'white'}}><h3>{post.branchId}</h3></th>
         <td style={{color:'white'}}><h3>{post.branchName}</h3>
             
           
         </td>
         <td style={{color:'white'}}><h3>{post.email}</h3>
             
           
             </td>
             <td style={{color:'white'}}><h3>{post.phone}</h3>
             
           
             </td>
       
         
         <td style={{color:'white'}}> <h3>{post.area}</h3>
          <p style={{color:'white'}} ><h3>{post.houseno}</h3></p>
          <p style={{color:'white'}}><h3>{post.city}</h3></p>
          <p style={{color:'white'}}><h3>{post.taluka}</h3></p>
          <p style={{color:'white'}} ><h3>{post.district}</h3></p>
          <p style={{color:'white'}}><h3>{post.country}</h3></p>
          <p style={{color:'white'}}> <h3> {post.pincode}</h3></p>
          </td>
 
         
          <td style={{color:'white'}}><MDBBtn rounded color="danger">Delete</MDBBtn></td>
       
          

         
     
       </tr> 
      
       
      
      




   ))}</tbody> }
     </table>
  
        </div>
        </div>
       
    )
}
export default GetAllBranch
