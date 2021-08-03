import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon,MDBBtn} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class BranchDashboardNew extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

logout = () => {
  sessionStorage.removeItem('addressType');
sessionStorage.removeItem('branchManagerId');
sessionStorage.removeItem('branchName');
sessionStorage.removeItem('email');
sessionStorage.removeItem('city');
sessionStorage.removeItem('phone');


window.location.href = "/couriersignin";
}


render() {
  return (
    <div >
      <MDBNavbar fixed="top"  color="default-color" dark expand="md" >
        <MDBNavbarBrand>
          <strong className="white-text">Courier Services</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav  style={{position:'fixed'}} left>
            <MDBNavItem active>
              <MDBNavLink to="/dashboard">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/bview">View CourierList</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/courierBoy">View Courier Boy</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="/assign">Assign Courier Boy</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="/changeStatus">Change Status</MDBNavLink>
            </MDBNavItem>
          
            <MDBNavItem >
              <MDBNavLink to="/edit">Edit Profile</MDBNavLink>
            </MDBNavItem>
          
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
              <button   className='btn btn-default ' onClick={this.logout} >Logout</button>
                
              </MDBNavLink>
            </MDBNavItem>
       
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      </div>
   
    );
  }
}

export default BranchDashboardNew;

