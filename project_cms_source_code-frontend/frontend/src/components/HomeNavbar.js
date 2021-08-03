import React from "react";

import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';




const HomeNavbar = () => {
  return (
      <div>
           <MDBNav tabs color="indigo">
      <MDBNavItem>
        <MDBNavLink active to="adminlogin">Active</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="userlogin">Link 1</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="courierboylogin">Link 2</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="branchlogin">Link 3</MDBNavLink>
      </MDBNavItem>
    </MDBNav>
      </div>
    
  )
};

export default HomeNavbar;
