import { useEffect } from 'react'
import { useDispatch, useSelector,useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import BranchSidebar from '../components/BranchSidebar'




import {changeStatus} from '../actions/branchManagerActions'


import Header from '../components/header'

function GetCourierBoyList(props){ 
      

    const city=sessionStorage.getItem('city')
    

    

const [posts,setPosts] = useState([])
const body={
    city
       }
    const [id,setId] = useState('')
    useEffect(()=>{
console.log(body.city)
        
        axios.post('http://localhost:8080/courier/api/listOfCourierBoy',body)
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
          <div style={{
            backgroundImage:
          'linear-gradient(to right top, #050537, #004482, #00819e, #00bc76, #a8eb12)'
          }} >
        
         <Header title="View Courier Boy List" />
         <table className="table mt-5 ">
             <tr class="thead-dark table-success">
                 <th>First Name</th>
                 <th>Last Name</th>
                 <th> Email</th>
                 <th> Phone</th>
                 <th>Action</th>
               
                 
             </tr>
            
         
           
  
     
     <tbody>{
   posts.map(post =>(
    <tr>
     
          <td style={{color:'white'}}><h3>{post.firstName}</h3></td>
          <td style={{color:'white'}}><h3> {post.lastName}</h3></td>
           <td style={{color:'white'}}><h3>{post.email}</h3></td>
           <td style={{color:'white'}}><h3>{post.phone}</h3></td>
          
       
           <td > <Link to="/changeStatus" style={{color:'white'}}><h3>Send Request</h3></Link>



</td>
                     
       
      
      </tr>
        
    ))}</tbody>
    </table>
        </div>
        </div>
    
      
       
    )
}


  
export default GetCourierBoyList



