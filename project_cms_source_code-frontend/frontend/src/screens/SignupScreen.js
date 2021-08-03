import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header'
import { signup } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import UserNavigation from '../components/userNavigation'
import Navigation from '../components/navigation'

const SignupScreen = (props) => {
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
     const [email, setEmail] = useState('')
     const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
   
    const dispatch = useDispatch()

    const userSignup = useSelector((store) => store.userSignup)
  const { loading, response, error } = userSignup

  useEffect(() => {
  if (response && response.status == 'success') {
  
      props.history.push('/signin')
    } else if (error) {
    
      console.log(error)
      alert('error while making API call')
    }
  }, [loading, response, error])

  const onSignup = () => {
    
    dispatch(signup(firstName,lastName, email,phone, password,))
  }
  return(
      <div>
        
        <UserNavigation />
          {/* <Header title="SignUp" /> */}
          <div className="container">
            <form onSubmit={onSignup}>
          <div className="form-group">
      <label for="name">FirstName:</label>
      <input onChange={(e)=>{setfirstName(e.target.value)}} type="text" className="form-control"  placeholder="JOhn Thomson" />
    </div>

    <div className="form-group">
      <label for="name">LastName:</label>
      <input onChange={(e)=>{setlastName(e.target.value)}} type="text" className="form-control"  placeholder="JOhn Thomson" />
    </div>  

    <div className="form-group">
      <label for="email">Email:</label>
      <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control"  placeholder="JOhn@gmail.com" />
    </div>


    <div className="form-group">
      <label for="password">Passsword:</label>
      <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control"  placeholder="*****" />
    </div>


    <div className="form-group">
      <label for="phone">Phone:</label>
      <input onChange={(e)=>{setPhone(e.target.value)}} type="number" className="form-control"  placeholder="94563117" />
    </div>
    <button type="submit"  className="btn btn-success">
            Sign Up
          </button>
          <div className="float-end">
            Existing user? <Link to="/signin">Signin here</Link>
          </div>
   
      {userSignup.loading &&<div>waiting for result</div>}
      </form>
      </div>
     
      </div>
  )
}

export default SignupScreen
