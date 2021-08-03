import { useEffect } from 'react'
import  React,{ useDispatch, useSelector,useState } from 'react'
import "../App.css"

import { getBranch } from '../actions/getBranchAction'
import axios from 'axios'
import NavigationOfUser from '../components/navigationOfUser'

import Sidebar from '../components/sidebar'

import BranchSidebar from '../components/BranchSidebar'




function BranchDisplayScreen(props){
    const [posts,setPosts] = useState([])
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


    
    return(
       
        <div>
            <div className="row">
                <div className="col-md-2">
                    <BranchSidebar />
                </div>
            <div className="col-md-10">
                <div className="row">
                    <div className="col-md-4">

       <div className="branchCard">
               <div>
          
            <p> Branchname:Mumbai Branch</p>
             <p>Email:mumbai@gmail.com </p>
           <p>phone:9843321023</p>
          <p>Address:19T,FirojSHahaNagar,Vikroli </p>
          <p>Mumbai </p>
          <p> Pincode:345-789 </p>
        </div>
        </div>
        </div>


        <div className="col-md-4">
        <div className="branchCard">
               <div>
          
            <p> Branchname:Pune Branch</p>
             <p>Email:pune@gmail.com </p>
           <p>phone:9843321023</p>
          <p>Address:45T,Karve Nagar,Pune </p>
          <p>Pune </p>
          <p> Pincode:345-789 </p>
        </div>
        </div>
        </div>

        <div className="row">
            <div className="col-md-4">
        <div className="branchCard">
               <div>
          
            <p> Branchname:Delhi Branch</p>
             <p>Email:delhi@gmail.com </p>
           <p>phone:937861023</p>
          <p>Address:60T,ANnad Nagar,Delhi </p>
          <p>Delhi </p>
          <p> Pincode:345-789 </p>
        </div>
        </div>
        </div>


        <div className="col-md-4">
        <div className="branchCard">
               <div>
          
            <p> Branchname:Nagpur Branch</p>
             <p>Email:nagpur@gmail.com </p>
           <p>phone:99832023</p>
          <p>Address:80T,Pratap Nagar,Nagpur </p>
          <p>Nagpur </p>
          <p> Pincode:123-789 </p>
        </div>
        </div>
        </div>
       </div>
       </div>
        </div>
        </div>
        </div>
  

       
    )
}
export default  BranchDisplayScreen
