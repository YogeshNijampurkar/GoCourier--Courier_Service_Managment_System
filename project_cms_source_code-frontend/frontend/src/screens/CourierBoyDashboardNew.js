import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { logout } from "../actions/userActions";
import { useDispatch } from "react-redux";

class  CourierBoyDashboardNew extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
logout = () => {
  sessionStorage.removeItem('role');
sessionStorage.removeItem('city');
sessionStorage.removeItem('user');
sessionStorage.removeItem('userId');
sessionStorage.removeItem('firstName');
sessionStorage.removeItem('lastName');
sessionStorage.removeItem('email');
sessionStorage.removeItem('phone');

sessionStorage.removeItem('branchName');

window.location.href = "/branchsignin";
}

render() {

  
  
  return (
    <div >
      <MDBNavbar  color="default-color" dark expand="md" >
        <MDBNavbarBrand>
          <strong className="white-text">Courier Services</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav  style={{position:'fixed'}} left>
            <MDBNavItem active>
              <MDBNavLink to="/cdashboard">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/courierBoyViewRequest">View Request</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/cchangeStatus">Change Status</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem >
              <MDBNavLink to="/edit">Edit Profile</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
              <button className='btn btn-default ' onClick={this.logout}> Log out</button>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      </div>
   
    );
  }
}

export default CourierBoyDashboardNew;

