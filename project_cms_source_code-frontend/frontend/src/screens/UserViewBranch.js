import React from "react";
import { MDBContainer, MDBCol, MDBCard, MDBIcon, MDBBtn } from "mdbreact";
import NavbarPage from "./UserDashboardNew";

const GetBranch = () => {
  return (
      <div>

     
     <div style={{
                backgroundImage:
                  "url(https://cdn.wallpapersafari.com/11/52/YxRayv.jpeg)"
              }}>
  <section className="text-center my-5">
    <h2 className="h1-responsive font-weight-bold my-5">
      Our Branches
    </h2>
   

    <MDBContainer className="d-flex flex-wrap" >
      <MDBCol md="12" className="mb-4">
        <MDBCard className="card-image" style={{
                backgroundImage:
                  "url(https://mdbcdn.b-cdn.net/img/Photos/Others/img%20%2832%29.jpg)"
              }}>
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
            <div>
              <h6 className="purple-text">
                <MDBIcon icon="plane" />
                <strong> Delivery</strong>
              </h6>
              <h3 className="py-3 font-weight-bold">
                <strong>ABOUT BRANCHES</strong>
              </h3>
              <p className="pb-3">
              Parcelforce Worldwide offers a wide range of delivery services to suit your needs. We pride ourselves on offering courier services that are as flexible and convenient as possible for our customers. Our dedicated team delivers every parcel with care. We are a delivery company with a personal touch offering a huge range of services and locations convenient to you.
              </p>
              <MDBBtn color="secondary" rounded size="md">
                <MDBIcon far icon="clone" className="left" /> MDBView project
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol md="6" className="md-0 mb-4">
        <MDBCard className="card-image" style={{
                backgroundImage:
                  "url(https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)"
              }}>
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
            <div>
              <h6 className="pink-text">
                <MDBIcon icon="chart-pie" />
                <strong>Delivering</strong>
              </h6>
              <h3 className="py-3 font-weight-bold">
                <strong>Pune Branch</strong>
              </h3>
              <p className="pb-3">
               Email:pune@gmail.com
                
              </p>
              <p className="pb-3">
               Contact:9857483212
                
              </p>
              <p className="pb-3">
                Address:19T,Karve Nagar,Pune
                </p>
                <p className="pb-3"> 
                Pincode:789-407
                </p>
              
             
              <MDBBtn color="pink" rounded size="md">
                <MDBIcon far icon="clone" className="left" /> MDBView project
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol md="6" className="md-0 mb-4">
        <MDBCard className="card-image" style={{
                backgroundImage:
                  "url(https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)"
              }}>
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
            <div>
              <h6 className="green-text">
                <MDBIcon icon="eye" />
                <strong> Delivering</strong>
              </h6>
              <h3 className="py-3 font-weight-bold">
                <strong>Mumbai Branch</strong>
              </h3>
              <p className="pb-3">
               Email:mumbai@gmail.com
                
              </p>
              <p className="pb-3">
               Contact:9857364787
                
              </p>
              <p className="pb-3">
                Address:12B,Firojshaha Nagar,Mumbai
                </p>
                <p className="pb-3"> 
                Pincode:123-456
                </p>
              <MDBBtn color="success" rounded size="md">
                <MDBIcon far icon="clone" className="left" /> MDBView project
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>

      <MDBCol md="6" className="md-0 mb-4">
        <MDBCard className="card-image" style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKe3tJMhL7ncFYgYgFa4gUm0GQDILACy6xCw&usqp=CAU)"
              }}>
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
            <div>
              <h6 className="green-text">
                <MDBIcon icon="eye" />
                <strong> Delivering</strong>
              </h6>
              <h3 className="py-3 font-weight-bold">
                <strong>Delhi Branch</strong>
              </h3>
              <p className="pb-3">
               Email:delhi@gmail.com
                
              </p>
              <p className="pb-3">
               Contact:9345364787
                
              </p>
              <p className="pb-3">
                Address:Oriental 1St And 2Nd Floor, 86, Janpath, New Delhi
                </p>
                <p className="pb-3"> 
                Pincode:789-456
                </p>
              <MDBBtn color="success" rounded size="md">
                <MDBIcon far icon="clone" className="left" /> MDBView project
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>

      <MDBCol md="6" className="md-0 mb-4">
        <MDBCard className="card-image" style={{
                backgroundImage:
                  "url(https://www.dtdc.in/images/packagingSol.gif)"
              }}>
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
            <div>
              <h6 className="pink-text">
                <MDBIcon icon="chart-pie" />
                <strong>Delivering</strong>
              </h6>
              <h3 className="py-3 font-weight-bold">
                <strong>Nagpur Branch</strong>
              </h3>
              <p className="pb-3">
               Email:nagpur@gmail.com
                
              </p>
              <p className="pb-3">
               Contact:8765483212
                
              </p>
              <p className="pb-3">
                Address:23,IT Park Road,Pratap nagar,Nagpur
                </p>
                <p className="pb-3"> 
                Pincode:345-908
                </p>
              
             
              <MDBBtn color="pink" rounded size="md">
                <MDBIcon far icon="clone" className="left" /> MDBView project
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBContainer>
  </section>
  </div>
  </div>
  );
}

export default GetBranch;