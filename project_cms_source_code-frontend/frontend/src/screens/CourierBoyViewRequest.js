import { useEffect } from 'react'
import { useDispatch, useSelector,useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'




import {changeStatus} from '../actions/branchManagerActions'

import UserNavigation from '../components/userNavigation'
import Header from '../components/header'
import CourierBoySidebar from '../components/CourierBoySidebar'

function GetCourier(props){ 
      
    

const [posts,setPosts] = useState([])
    
    useEffect(()=>{

        
        axios.get('http://localhost:8080/courier/request/viewRequest/'+sessionStorage.getItem("userId"))
        .then(res =>{
            console.log(res)
            setPosts(res.data)
            
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    //useEffect({},[])
   
  
   
    return(
     
       
        <div style={{
            backgroundImage:
          'linear-gradient(to right top, #050537, #004482, #00819e, #00bc76, #a8eb12)'
          }} className="mt-5" >
        <div >
            <table className="table ">
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
           
        <th  style={{color:'white'}}><h3>{post.courierId}</h3></th>
         <td>
             <p style={{color:'white'}}><h3>Length:{post.length}cm</h3></p>
             <p style={{color:'white'}}><h3>Breadth:{post.breadth}cm</h3></p>
             <p style={{color:'white'}}><h3>Weight:{post.weight}kg</h3></p>
             <p style={{color:'white'}}><h3>Pickup Date Time:{post.pickupDateTime}</h3></p>
           
         </td>
         <td>
         <p style={{color:'white'}}><h3>Sender Name:{post.senderfName}{post.senderlName}</h3></p>
         <p style={{color:'white'}}><h3>Receiver Name:{post.receipientfName}{post.receipientlName}</h3></p>
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
       
          {/* <td > */}
         {/* <p> <button type="button"  className=" badge-pill badge-primary btn-lg bg-#00C9B7" onClick={onAssign}>Assign CourierBoy</button></p>
          <p><button type="button"  className=" badge-pill badge-primary btn-lg bg-#00C9B7" onClick={onSend}>Send Request</button></p></td> */}


         
     
       </tr> 
      
       
      
      




   ))}</tbody> }
     </table>
  
        </div>
        </div>
      
       
    )
}


  
export default GetCourier



