import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon,MDBBtn } from "mdbreact";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Logout from "./LogoutScreen";


class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

// logout=()=>{
//   sessionStorage.removeItem('userId');
//   sessionStorage.removeItem('firstName');
//   sessionStorage.removeItem('lastName');
//   sessionStorage.removeItem('email');
  
//   sessionStorage.removeItem('phone');
//   sessionStorage.removeItem('role');

// }

logout = () => {
     sessionStorage.removeItem('userId');
  sessionStorage.removeItem('firstName');
  sessionStorage.removeItem('lastName');
   sessionStorage.removeItem('email');
  
   sessionStorage.removeItem('phone');
   sessionStorage.removeItem('role');
  window.location.href = "/usersignin";
}

render() {
  return (
    
      <MDBNavbar sticky="top"  color="default-color" dark expand="md">
        <MDBNavbarBrand>
     
          <strong className="white-text">Courier Services</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav  style={{position:'fixed'}} left>
            <MDBNavItem active>
              <MDBNavLink to="/getBranch">Home</MDBNavLink>
            </MDBNavItem>
           
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Services</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="/courier">Add Courier</MDBDropdownItem>
                  <MDBDropdownItem href="/payment">Payment</MDBDropdownItem>
                  <MDBDropdownItem href="/status">Track Status</MDBDropdownItem>
                 
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem >
              <MDBNavLink to="/edit">Edit Profile</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
            <button   className='btn btn-default ' onClick={this.logout} >Logout</button>
             {/* <Link to="/logout"  >logout</Link > */}
             {/* <Logout /> */}
            </MDBNavItem>
           
         
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
   
    );
  }
}

export default NavbarPage;

