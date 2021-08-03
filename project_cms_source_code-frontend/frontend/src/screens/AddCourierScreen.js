import Header from '../components/header'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { addcourier,getBranchName} from '../actions/addCourierAction'
import { useDispatch, useSelector } from 'react-redux'
import UserNavigation from '../components/userNavigation'
import React from 'react';
import axios from 'axios'
import Select from 'react-select'
import Sidebar from '../components/sidebar'
import UserNavbar from '../components/UserNavbar'
import UserDashboardNew from './UserDashboardNew'




const AddCourierScreen = (props) => {

  var branchList=[
    {
      value:1,
      label:"Mumbai"
    },
    {
      value:2,
      label:"PUNE"
    },
    {
      value:3,
      label:"DELHI"
    },
    {
      value:4,
      label:"NAGPUR"
    },
  ]
  
    const[length,setlength]=useState('')
    const[breadth,setbreadth]=useState('')
    const[Weight,setWeight]=useState('')
    const[deliveryType,setdeliveryType]=useState('')
    const[price,setPrice]=useState('')
    const[pickupDateTime,setpickupDateTime]=useState('')
    const[recipientfName,setRecipientfName]=useState('')
    const[recipientlName,setRecipientlName]=useState('')
    const[senderfName,setSenderfName]=useState('')
    const[senderlName,setSenderlName]=useState('')
    
    const [branchId,branchListValue]=useState(branchList.value)
    const [pickuptime,setPickuptime]=useState('')
    
    
    const[areasrc,setAreasrc]=useState('')
    const[housenosrc,sethousenosrc]=useState('')
    const[citysrc,setCitysrc]=useState('')
    const[countrysrc,setcountrysrc]=useState('')
    const[talukasrc,settalukasrc]=useState('')
    const[districtsrc,setdistrictsrc]=useState('')
    const[pincodesrc,setPincodesrc]=useState('')

    const[areadest,setAreadest]=useState('')
    const[housenodest,sethousenodest]=useState('')
    const[citydest,setCitydest]=useState('')
    const[talukadest,settalukadest]=useState('')
    const[districtdest,setdistrictdest]=useState('')
    const[countrydest,setcountrydest]=useState('')
    const[pincodedest,setPincodedest]=useState('')

    const dispatch=useDispatch()
    

     const addCourier=useSelector((store)=>store.courier)
     const{loading,response,error}=addCourier

   
     const onAddCourier = () => {
      
     
  const time=pickupDateTime+" "+pickuptime
  
         dispatch(addcourier(length,breadth,Weight,type,total,recipientfName,recipientlName,senderfName,senderlName,branchId,time,
            areasrc,housenosrc,citysrc,talukasrc,districtsrc,countrysrc,pincodesrc
            ,areadest,housenodest,citydest,talukadest,districtdest,countrydest,pincodedest))
           
     }
     useEffect(()=>{

     },[])
     useEffect(()=>{
      if(response!=0)
      sessionStorage.setItem("courierPayId",response)
      // props.history.push('/payment')
    },[loading,response,error])


const branchHandler = (e) =>{
  return (
     branchListValue(e.value)
     
  )
  

}
    
var deliveryTypeList=[
  {
      value:1,
      label:"FAST"
  },
  {
      value:2,
      label:"NORMAL"
  }
];


const [total, setTotal] = useState(Weight);
const [type,deliveryTypeValue]=useState(deliveryTypeList.label)
  // Function to add numbers and update total in state
function calculateTotal() {
    if(Weight <=2 && type =="FAST")
    setTotal((Weight *70)+120)
    else if(Weight>=5 && Weight<=10 && type =="FAST")
    setTotal((Weight * 90)+120)
    else if(Weight>=10 && Weight<=15 && type =="FAST")
    setTotal((Weight * 110)+120)
    else if(Weight <=2 && type =="NORMAL")
    setTotal((Weight *50)+70)
    else if(Weight>=5 && Weight<=10 && type =="NORMAL")
    setTotal((Weight * 90)+70)
    else if(Weight>=10 && Weight<=15 && type =="NORMAL")
    setTotal((Weight * 110)+70)
 
}
  useEffect(()=>{
      setWeight(Weight)
      deliveryTypeValue(type)
      calculateTotal()

  },[Weight,type])


  const deliveryHandler = (e) =>{
      return (
          deliveryTypeValue(e.label)
         
      )
      

  }
    
    return(
   
    <div >
     {/* <UserDashboardNew /> */}






          <Header title="" />
          <div className="back-image "  
              >
          <div className="container " >
          {/* <form > */}
          <div className="form-group col-md-12" style={{
                    backgroundImage:
                      'url(https://cdn.shopify.com/s/files/1/1095/6418/products/L-2005_504x.png?v=1574507124g)',
                    width: '28rem',
                  }}>

            
          <div className="row">
    <div className="form-group col-md-6">
      <label for="name">Sender First Name:</label>
      <input onChange={(e)=>{setSenderfName(e.target.value)}} type="text" className="form-control"   />
    </div>  


    <div className="form-group col-md-6">
      <label for="name">Sender Last Name:</label>
      <input onChange={(e)=>{setSenderlName(e.target.value)}} type="text" className="form-control"   />
    </div>  
</div>

          <div className="row">
    <div className="form-group col-md-6">
      <label for="name">Recipeint First Name:</label>
      <input onChange={(e)=>{setRecipientfName(e.target.value)}} type="text" className="form-control"   />
    </div>  


    <div className="form-group col-md-6">
      <label for="name">Recipeint Last Name:</label>
      <input onChange={(e)=>{setRecipientlName(e.target.value)}} type="text" className="form-control"   />
    </div>  
</div>
            <div className="row">
          <div className="form-group col-md-6">
      <label for="name">Length:</label>
      <input onChange={(e)=>{setlength(e.target.value)}} type="number" className="form-control"   />
    </div>

    <div className="form-group col-md-6">
      <label for="email">Breadth:</label>
      <input onChange={(e)=>{setbreadth(e.target.value)}} type="number" className="form-control"   />
    </div>
    </div>

    <div className="row">
        
    <div className="form-group col-md-6">
      <label for="password">weight:</label>
      <input value={Weight}
          onChange={e =>setWeight(+e.target.value)}  type="number" className="form-control"  />
    </div>

    


    <div className="form-group col-md-6">
      <label for="password">Select DeliveryType:</label>
      <Select options={deliveryTypeList} onChange={deliveryHandler}/>
    </div>
    </div>
    <div className="row">
    <div className="form-group col-md-6">
      <label for="email">Price</label>
      <input  type="number"  onChange={e =>setPrice(e.target.value)}  value={total} className="form-control"   readonly />
    </div>

   

    <div className="form-group col-md-6">
      <label for="password">Select Branch:</label>
      <Select options={branchList} onChange={branchHandler}/>
    </div>
    </div>
   
   
    



  <div className="row">
    <div className="form-group col-md-6">
      <label for="password">Pickup Date:</label>
      <input onChange={(e)=>{setpickupDateTime(e.target.value)}} type="date" className="form-control"   />
    </div> 
    

    
    <div className="form-group col-md-6">
      <label for="password">Pickup Time:</label>
      <input onChange={(e)=>{setPickuptime(e.target.value)}} type="time" className="form-control"  />
    </div>
    </div>
    <div className="row">
      <div className="col-md-6">
    <label >Source Address : </label>
    </div>
    <div className="col-md-6">
  <label >Destination Address : </label>
  </div>
    </div>
  
   <div className="row">
    <div className="form-group col-md-6">
      <label for="password">Area:</label>
      <input onChange={(e)=>{setAreasrc(e.target.value)}} type="text" className="form-control"   />
    </div> 
    

    
    <div className="form-group col-md-6">
      <label for="password">Area:</label>
      <input onChange={(e)=>{setAreadest(e.target.value)}} type="text" className="form-control"   />
    </div>
    </div>

    <div className="row">
    <div className="form-group col-md-6">
      <label for="phone">Houseno:</label>
      <input onChange={(e)=>{sethousenosrc(e.target.value)}} type="text" className="form-control"   />
    </div>

    <div className="form-group col-md-6">
      <label for="phone">Houseno:</label>
      <input onChange={(e)=>{sethousenodest(e.target.value)}} type="text" className="form-control"  />
    </div>

</div>


<div className="row">
 <div className="form-group col-md-6">
      <label for="name">City:</label>
      <input onChange={(e)=>{setCitysrc(e.target.value)}} type="text" className="form-control"   />
    </div>  
    <div className="form-group col-md-6">
      <label for="name">City:</label>
      <input onChange={(e)=>{setCitydest(e.target.value)}} type="text" className="form-control"   />
    </div>  
    </div>




<div className="row">
    <div className="form-group col-md-6">
      <label for="name">District:</label>
      <input onChange={(e)=>{setdistrictsrc(e.target.value)}} type="text" className="form-control"   />
    </div> 
    <div className="form-group col-md-6">
      <label for="name">District:</label>
      <input onChange={(e)=>{setdistrictdest(e.target.value)}} type="text" className="form-control"   />
    </div>  
 
    </div>

    <div className="row">
    <div className="form-group col-md-6">
      <label for="name">Country:</label>
      <input onChange={(e)=>{setcountrysrc(e.target.value)}} type="text" className="form-control"  />
    </div>

    
    <div className="form-group col-md-6">
      <label for="name">Country:</label>
      <input onChange={(e)=>{setcountrydest(e.target.value)}} type="text" className="form-control"  />
    </div>
    </div>


    <div className="row">
    <div className="form-group col-md-6">
      <label for="name">Pincode:</label>
      <input onChange={(e)=>{setPincodesrc(e.target.value)}} type="text" className="form-control"  />
    </div>  
    


    <div className="form-group col-md-6">
      <label for="name">Pincode:</label>
      <input onChange={(e)=>{setPincodedest(e.target.value)}} type="text" className="form-control"   />
    </div>  
    </div>
    </div>

    <button type="submit" onClick={onAddCourier} className="btn btn-success">
    Add Courier
          </button>
        
   
      {loading &&<div>waiting for result</div>}
      
      </div>
      </div>
      </div>
     
        
          
        
        
          
    )
}


export default AddCourierScreen