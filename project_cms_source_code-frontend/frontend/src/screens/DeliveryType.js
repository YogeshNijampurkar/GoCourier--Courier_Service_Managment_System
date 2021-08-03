import React,{useEffect, useState} from 'react'
import Select from 'react-select'

function DeliveryType(){

    var deliveryTypeList=[
        {
            value:1,
            label:"Delhi"
        },
        {
            value:2,
            label:"Mumbai"
        }
    ];
    const [Weight, setWeight] = useState(0);
 
  const [total, setTotal] = useState(Weight);
  const [type,deliveryTypeValue]=useState(deliveryTypeList.value)
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
   // const [type,deliveryTypeValue]=useState(deliveryTypeList.label)
    const deliveryHandler = (e) =>{
        return (
            deliveryTypeValue(e.value)
           
        )
        
  
    }
  
    return(
        <div>
<Select options={deliveryTypeList} onChange={deliveryHandler}/>
<h1>{type}</h1>

<div className="number-inputs">
       Weight: <input
          type="number"
          value={Weight}
          onChange={e => setWeight(+e.target.value)}
          placeholder="0"
        />
      Price:<input type="number" value={total} readonly />
      </div>
      
      

      
    </div>
       
    );
}
export default  DeliveryType