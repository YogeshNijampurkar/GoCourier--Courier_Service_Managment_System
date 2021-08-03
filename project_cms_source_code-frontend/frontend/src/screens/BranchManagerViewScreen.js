import { useEffect } from 'react'
import  React,{ useDispatch, useSelector,useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import NavigationOfUser from '../components/navigationOfUser'

import Navigation from '../components/navigation'
import Sidebar from '../components/sidebar'

import UserNavigation from '../components/userNavigation'
import PreloadedForm from './PreloadedForm'



const GetRequest=(props)=>{
    
const [posts,setPosts] = useState([])
const brachId=sessionStorage.getItem('branchManagerId')



useEffect(()=>{
  
// alert(branchCity)

    
    axios.get('http://localhost:8080/courier/api/listOfCourier/'+sessionStorage.getItem('branchManagerId'))
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
            <table className="table mt-5">
            <thead class="thead-dark table-success">
                    <th scope="col">CourierId</th>
                   <th scope="col">Courier Details</th>
                   <th >Sender/Receiver</th>
                    <th scope="col">Source Address</th>
                    <th scope="col">Destination Address</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    </thead>
                    
               
          
         

     
           
   { <tbody>{
   posts.map(post =>(
       <tr  >
           
        <th  style={{color:'white'}}><h3>{post.id}</h3></th>
         <td>
             <p style={{color:'white'}}><h3>Length:{post.length}cm</h3></p>
             <p style={{color:'white'}}><h3>Breadth:{post.breadth}cm</h3></p>
             <p style={{color:'white'}}><h3>Weight:{post.weight}kg</h3></p>
             <p style={{color:'white'}}><h3>Delivery type:{post.deliveryType}</h3></p>
             <p style={{color:'white'}}><h3>Pickup Date Time:{post.pickupDateTime}</h3></p>
           
         </td>
         <td>
         <p style={{color:'white'}}><h3>Sender Name:{post.senderfName}{post.senderlName}</h3></p>
         <p style={{color:'white'}}><h3>Receiver Name:{post.recipientfName}{post.recipientlName}</h3></p>
         </td>
         
         <td style={{color:'white'}}> <h3>{post.sourceAddress.area}</h3>
          <p style={{color:'white'}} ><h3>{post.sourceAddress.houseno}</h3></p>
          <p style={{color:'white'}}><h3>{post.sourceAddress.city}</h3></p>
          <p style={{color:'white'}}><h3>{post.sourceAddress.taluka}</h3></p>
          <p style={{color:'white'}} ><h3>{post.sourceAddress.district}</h3></p>
          <p style={{color:'white'}}><h3>{post.sourceAddress.country}</h3></p>
          <p style={{color:'white'}}> <h3> {post.sourceAddress.pincode}</h3></p>
          </td>
 
          <td style={{color:'white'}}><h3> {post.destinationAddress.area}</h3>
          <p style={{color:'white'}}><h3>{post.destinationAddress.houseno}</h3></p>
          <p style={{color:'white'}}><h3>{post.destinationAddress.city}</h3></p>
          <p style={{color:'white'}}><h3>{post.destinationAddress.taluka}</h3></p>
          <p style={{color:'white'}}><h3>:{post.destinationAddress.district}</h3></p>
          <p style={{color:'white'}}><h3>{post.destinationAddress.country}</h3></p>
          <p style={{color:'white'}}><h3>  {post.destinationAddress.pincode}</h3></p>
         
          </td> 
          <td style={{color:'white'}}><h3>{post.status}</h3></td>
       
          <td >
         <p> <button type="button"  className=" badge-pill badge-primary btn-lg bg-#00C9B7" onClick={onAssign}>Assign CourierBoy</button></p>
          <p><button type="button"  className=" badge-pill badge-primary btn-lg bg-#00C9B7" onClick={onSend}>Send Request</button></p></td>


         
     
       </tr> 
      
       
      
      




   ))}</tbody> }
     </table>
  
        </div>
        </div>
       
    )
}
export default GetRequest
