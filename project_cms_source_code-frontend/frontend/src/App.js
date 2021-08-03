import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom'
import AboutScreen from './screens/AboutScreen'
import SigninScreen from './screens/SigninScreen'
import SignupScreen from './screens/SignupScreen'
import DisplayScreen from './screens/DisplayScrren'
import BranchManagerScreen from './screens/BranchManagerScreen'
import PaymentScreen from './screens/PaymentScreen'
import paymentOtpScreen from './screens/paymentOtpScreen'
import BranchSigninScreen from './screens/BranchSigninScreen'
import UserViewBranch from './screens/UserViewBranch'
import ChangeStatusScreen from './screens/changeStatus'
// import Branchdashboard from './screens/Branchdashboard'


import BranchManagerViewScreen from './screens/BranchManagerViewScreen'
import Navigation from './components/navigation'
import Header from './components/header'
import Slider from './components/slider'
import sidebar from './components/sidebar'


import './App.css';
import AddCourierScreen from './screens/AddCourierScreen'
import UserNavigation from './components/userNavigation'
import CourierListScreen from './screens/BranchManagerScreen'
import GetCourierBoyList from './screens/ViewCourierBoy'
import BranchManagerRegisterScreen from './screens/BranchManagerRegisterScreen'
import AssignCourierBoyScreen from './screens/AssignCourierBoy'
import TrackStatus from './screens/TrackStatus'
import PriceScreen from './screens/PriceScreen'
import DeliveryType from './screens/DeliveryType'
import Sidebar from './components/sidebar'

import UserNavbar from './components/UserNavbar'
import BranchDisplayScreen from './screens/BrannchDisplayScreen'
import CourierBoyViewRequest from './screens/CourierBoyViewRequest'
import AdminDashboard from './screens/AdminDashboard'
import UserLogin from './components/UserLogin'
import UserSignup from './components/UserSignup'
import BranchLogin from './components/BranchLogin'
import BranchSignup from './components/BranchSignup'
import CourierBoyLogin from './components/CourierBoyLogin'
import CourierBoySignup from './components/CourierBoySignup'
import AdminLogin from './components/AdminLogin'
import HomeNavbar from './components/HomeNavbar'
import AppPage from './screens/UserDashboardNew'
import NavbarPage from './screens/UserDashboardNew'
import Payment from './screens/Payment'
import PaymentOtp from './screens/PaymentOtp'
import BranchDashboardNew from './screens/BranchDashboardNew'


import CourierBoyChangeStatus from './screens/CourierBoyChangeStatus'
import BranchDashboard from './screens/BranchDashboard'
import CourierBoyDashboardNew from './screens/CourierBoyDashboardNew'
import EditProfile from './screens/EditProfile'
import GetAllBranch from './screens/GetAllBranch'
import CourierBoyDashboard from './screens/CourierBoyDashboard'
import ForgotPassScreen from './screens/ForgotScreen'
import Logout from './screens/LogoutScreen'
import CourierAbout from './screens/CourierAbout'






function App() {
  return (
    <div>
      <Router>
        
    
    
  
      {/* <HomeNavbar /> */}
     { sessionStorage.getItem("role") != "USER" && sessionStorage.getItem("addressType") != "BRANCH_ADDRESS"&& sessionStorage.getItem("role") != "COURIERBOY"&& sessionStorage.getItem("role") != "ADMIN" && <Navigation />}
    
    {sessionStorage.getItem("role")=="USER"&& <NavbarPage />} 
    {sessionStorage.getItem("addressType")=="BRANCH_ADDRESS"&& <BranchDashboardNew/>} 
    {sessionStorage.getItem("role")=="COURIERBOY"&& <CourierBoyDashboardNew />}
     {sessionStorage.getItem("role")=="ADMIN"&& <AdminDashboard />} 
 
        <Switch>
        
          <Route path="/signin" component={SigninScreen} />
          <Route path="/signup" component={SignupScreen} />
          <Route path="/about" component={AboutScreen} />
         

          {/* <Route path="/branchdashboard" component={Branchdashboard} /> */}
          <Route path="/branchRegister" component={BranchManagerRegisterScreen} />
          {/* <Route path="/branchSignin" component={BranchSigninScreen} /> */}
          <Route path="/bview" component={BranchManagerViewScreen} />
          <Route path="/branchScreen" component={BranchDisplayScreen} />
          <Route path="/changeStatus" component={ChangeStatusScreen} />
          <Route path="/courierBoy" component={GetCourierBoyList} />
          <Route path="/assign" component={AssignCourierBoyScreen} />
          <Route path="/branchCourier" component={BranchManagerScreen} />



         
          <Route path="/sidebar" component={sidebar} />


          <Route path="/courier" component={AddCourierScreen} />
          <Route path="/paymentforuser" component={PaymentScreen} />
          <Route path="/otp" component={paymentOtpScreen} />
          <Route path="/getbranch" component={UserViewBranch} />
          <Route path="/status" component={TrackStatus} />
          <Route path="/display" component={DisplayScreen} />
          <Route path="/getCourierList" component={CourierListScreen} />

          <Route path="/forgot" component={ForgotPassScreen} />
          <Route path="/logout" component={Logout} />

         
          <Route path="/courierBoyViewRequest" component={CourierBoyViewRequest} />
         
          
          
          <Route path="/price" component={PriceScreen} />
          <Route path="/delivery" component={DeliveryType} />
        
         
          <Route path="/navbar" component={UserNavbar} />
          <Route path="/usernavbar" component={UserNavigation} />
        
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/userdashboard" component={AdminDashboard} />


          <Route path="/courierabout" component={CourierAbout} />
          <Route path="/usersignin" component={UserLogin} />
          <Route path="/usersignup" component={UserSignup} />
          <Route path="/branchsignin" component={BranchLogin} />
          <Route path="/branchsignup" component={BranchSignup} />
          <Route path="/couriersignin" component={CourierBoyLogin} />
          <Route path="/couriersignup" component={CourierBoySignup} />
          <Route path="/adminsignin" component={AdminLogin} />
          <Route path="/homenavbar" component={Navigation} />
          <Route path="/payment" component={Payment} />
          <Route path="/paymentOtp" component={PaymentOtp} />
          {/* <Route path="/usernewdashboard" component={NavbarPage} /> */}

         
          
        
          <Route path="/cchangeStatus" component={CourierBoyChangeStatus} />
          <Route path="/dashboard" component={BranchDashboard} />

          <Route path="/edit" component={EditProfile} />
          <Route path="/getAllBranch" component={GetAllBranch} />
          <Route path="/cdashboard" component={CourierBoyDashboard} />
        
         
     
         
      </Switch>
   
   
  
 

     
        </Router>


     
     
    </div>
  );
}

export default App;
