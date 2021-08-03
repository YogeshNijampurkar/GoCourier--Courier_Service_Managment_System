import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProfile } from '../actions/userActions';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

const  EditProfile=(props)=> {
  const [profile, setProfile] = useState({
   firstName: "",
    lastName: "",
    email: "",
    phone:""
  });
  const dispatch=useDispatch()
// const updateProfile=useSelector((store)=>store.editProfile)
// const [loading,response,error]=updateProfile
  useEffect(() => {
    setProfile({
        firstName:sessionStorage.getItem("firstName"),
        lastName: sessionStorage.getItem("lastName"),
        email: sessionStorage.getItem("email"),
        phone:sessionStorage.getItem("phone"),
    });
  }, []);
  const onUpdate=()=>{
      dispatch(editProfile(profile.firstName,profile.lastName,profile.email,profile.phone))

  }

  return (

    <MDBContainer>
    <MDBRow>
      <MDBCol md="6">
        <MDBCard>
          <MDBCardBody>
            <form>
              <p className="h4 text-center py-4">Edit Profile</p>
              <div className="grey-text">
                <MDBInput
                  label="Your First name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  name="firstName" 
                  value={profile.firstName} onChange={e => {
                               setProfile({ ...profile, [e.target.firstName]: e.target.value });
                             }}
                />

            <MDBInput
                  label="Your Last name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  value={profile.lastName}
                  name="lastName"  onChange={e => {
                               setProfile({ ...profile, [e.target.name]: e.target.value });
                             }}
                />
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  name="email"
                  value={profile.email}
                  onChange={e => {
                    setProfile({ ...profile, [e.target.name]: e.target.value });
                  }} readonly
                />
              
                <MDBInput
                  label="Your phone"
                  icon="blender-phone"
                  group
                  type="number"
                  validate
                  name="phone"
                  value={profile.phone}
                  onChange={e => {
                    setProfile({ ...profile, [e.target.name]: e.target.value });
                  }}
                />
              </div>
              <div className="text-center py-4 mt-3">
                <MDBBtn color="cyan" onClick={onUpdate} type="submit">
                 Update
                </MDBBtn>
              </div>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
);

//     <div class="card">

//     <h5 class="card-header info-color white-text text-center py-4">
//         <strong>Subscribe</strong>
//     </h5>

   
//     <div class="card-body px-lg-5">

      
//         <form class="text-center" style="color: #757575;" action="#!">

//             <p>Join our mailing list. We write rarely, but only the best content.</p>

//             <p>
//                 <a href="" target="_blank">See the last newsletter</a>
//             </p>

           
//             <div class="md-form mt-3">
//                 <input type="text" id="materialSubscriptionFormPasswords" class="form-control"  value={profile.firstName}
//         name="firstName"
//         type="text"
//         onChange={e => {
//           setProfile({ ...profile, [e.target.name]: e.target.value });
//         }} />
//                 <label for="materialSubscriptionFormPasswords">Name</label>
//             </div>

//             <div class="md-form mt-3">
//                 <input type="text" id="materialSubscriptionFormPasswords" class="form-control"  value={profile.firstName}
//         name="lastName"
//         type="text"
//         onChange={e => {
//           setProfile({ ...profile, [e.target.name]: e.target.value });
//         }} />
//                 <label for="materialSubscriptionFormPasswords">Name</label>
//             </div>

           
//             <div class="md-form">
//                 <input type="phone" id="materialSubscriptionFormEmail" class="form-control"   onChange={e => {
//           setProfile({ ...profile, [e.target.name]: e.target.value });
//         }}/>
//                 <label for="materialSubscriptionFormEmail">E-mail</label>
//             </div>

        
//             <button class="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" onClick={onUpdate} type="submit">Update</button>

//         </form>
     

//     </div>

// </div>

}
 export default EditProfile;
  
      {/* <input
       
      />

<input
        value={profile.lastName}
        name="lastName"
        type="text"
        onChange={e => {
          setProfile({ ...profile, [e.target.name]: e.target.value });
        }}
      />
      <input
        value={profile.phone}
        name="phone"
        type="text"
       
      />

      <input
        value={profile.email}
        name="email"
        type="text"
        onChange={e => {
          setProfile({ ...profile, [e.target.name]: e.target.value });
        }}
      />

      <p>First name: {profile.firstName}</p>
      <p>LastName: {profile.lastName}</p>
      <p>email: {profile.email}</p>
      <p>Phone: {profile.phone}</p>
      <button type="submit" onClick={onUpdate}>update</button>
      {/* {loading && <div>waiting for result</div>} */}
  {/* */} 
  
