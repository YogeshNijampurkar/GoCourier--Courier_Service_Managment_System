import { useState, useEffect } from 'react'

import Header from '../components/header'
import { signup } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import Navigation from '../components/navigation'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

import {assignCourierBoy} from '../actions/branchManagerActions'
import BranchSidebar from '../components/BranchSidebar'

const AssignCourierBoyScreen = (props) => {
    
    const [id, setcourierId] = useState('')
    const [email, setEmail] = useState('')
    const [branchId, setbranchId] = useState(sessionStorage.getItem("branchManagerId"))
    const [status, setStatus] = useState('')
  
     
    const dispatch = useDispatch()

    const changeStatu = useSelector((store) => store.assign)
  const { loading, response, error } = changeStatu

  const onUpdate = () => {
    
    dispatch(assignCourierBoy(id,email,branchId,status))
  }
  useEffect(() => {
  if (response ) {
  
      props.history.push('/branchdashborad')
    } else if (error) {
    
      console.log(error)
      alert('error while making API call')
    }
  }, [loading, response, error])

  
  return(
    <div >
    <div className="">


   <div > 
   <div style={{height:"10px"}}>
        <img src="https://image.shutterstock.com/image-vector/delivery-logo-template-260nw-327587036.jpg" className="rounded-circle img-fluid mb-0" />
      </div>
    <MDBContainer  style={{
              backgroundImage:
                'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5RTnwp5vY964sGXaJ78sj-pXpCGUhuvqpQ&usqp=CAU)',
              width: '28rem', marginTop:"100px",
            }}  >


<MDBRow >
<MDBCol md="12" className="block-example border border-primary">
  <form>
    <p className="h5 text-center mb-4">Assign Courier Boy</p>
    <div className="grey-text">
      <MDBInput   label="Your Courier id"  group type="number" validate error="wrong"
        success="right"  onChange={(e)=>{setcourierId(e.target.value)}} />
      <MDBInput label="Email"  group type="number" validate error="wrong"
        success="right" o onChange={(e)=>{setEmail(e.target.value)}} type="email" />
        
    </div>
    <div className="text-center">
      <MDBBtn outline color="info"  onClick={onUpdate}>
        Send
        <MDBIcon far icon="paper-plane" className="ml-1" />
      </MDBBtn>
    </div>
    {loading &&<div>waiting for result</div>}
  </form>
</MDBCol>
</MDBRow>
</MDBContainer>
</div>

  
  </div>

  </div>
     

  )
}

export default AssignCourierBoyScreen
