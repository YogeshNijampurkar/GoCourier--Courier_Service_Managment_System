import { useEffect } from 'react'
import { useDispatch, useSelector,useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'




import {changeStatus} from '../actions/branchManagerActions'

import UserNavigation from '../components/userNavigation'
import Header from '../components/header'
import BranchSidebar from '../components/BranchSidebar'
import AdminDashboard from './AdminDashboard'

function GetCourier(props){ 
      
    

const [posts,setPosts] = useState([])
    const [id,setId] = useState('')
    useEffect(()=>{

        
        axios.get('http://localhost:8080/courier/api/listOfCourier/3')
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
     
       
        <div>
           
            <div className="row">
                <div className="col-md-2">
                    <BranchSidebar />
                </div>
            <div className="col-md-10">
        
         <Header title="Courier List" />
         <table className="table table-bordered table-hover table-responsive">
             <tr>
                 <th>Courier Id</th>
                 <th> Length</th>
                 <th> Breadth</th>
                 <th> Weight</th>
                 <th> SourceAddress</th>
                 <th> Destination ADdress</th>
                 <th> Status</th>
                 
                 
             </tr>
             <tbody>
             <td>1</td>
                     <td>12</td>
                     <td>2</td>
                     <td>5</td>
                     <td>20T,Anand Nagar Mumbai,456-789</td>
                     <td>19B,Karve Nagar,Pune ,486-799</td>
                     <td>Requested</td>
             </tbody>
         
           
  
     
     {/* <tbody>{
   posts.map(post =>(
    <tr>
     
          <td>{post.id}</td>
          <td> {post.length} cm</td>
           <td>{post.weight} kg</td>
           <td>{post.breadth} cm</td>
          
        <td>
          
           <p>{post.sourceAddress.area}</p>
           <p>{post.sourceAddress.houseno}</p>
           <p>{post.sourceAddress.city}</p>
           <p>{post.sourceAddress.taluka}</p>
           <p>{post.sourceAddress.district}</p>
           <p>{post.sourceAddress.country}</p>
           <p>:{post.sourceAddress.pincode}</p>
           </td>

           <td>
           <p>{post.destinationAddress.area}</p>
           <p>{post.destinationAddress.houseno}</p>
           <p>{post.destinationAddress.city}</p>
           <p>{post.destinationAddress.taluka}</p>
           <p>{post.destinationAddress.district}</p>
           <p>{post.destinationAddress.country}</p>
           <p>{post.destinationAddress.pincode}</p>
           </td>
           <td>{post.status}</td>
           <td> <Link to="/changeStatus">Change Status</Link>



</td>
                     
       
      
      </tr>
        
    ))}</tbody> */}
    </table>
        </div>
        </div>
        </div>
      
       
    )
}


  
export default GetCourier



