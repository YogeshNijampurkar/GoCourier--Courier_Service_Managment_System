import { useEffect } from 'react'
import  React,{ useDispatch, useSelector,useState } from 'react'
import { Link } from 'react-router-dom'
import BranchSidebar from '../components/BranchSidebar'
import Header from '../components/header'

import axios from 'axios'

function DisplayScrren (props) { 
      const [posts,setPosts] = useState([])
        
        useEffect(()=>{
    
            
            axios.get('http://localhost:8080/courier/courier/generateId/1')
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
               <div className="col-md-8">
            
             <Header title="" />
             
                
             
               
      
         
         {
       posts.map(post =>(
           <div >
           <div >
               <h3>Thank You!!!</h3>
                 <h3>Courier Added Suceessfully..</h3>
                 <h3>Your Courier Id is:<b>##{post.id}</b></h3>
                 <h3>Save Courier Id to view Status</h3>
               </div>
               </div>
      
            
        ))}
            </div>
            </div>
            </div>
          
           
        )
    }
    
    
      
    export default DisplayScrren