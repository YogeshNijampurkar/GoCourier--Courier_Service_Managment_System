import '../UserDashboard.css'

functionUserDashboard(props){
	return(

<div className="sidebar"> 
			<div className="sidebar-header">
				<h3 className="band"><span className="ti-truck"></span>
				<span>Courier Service</span>
				</h3>
				 <span className="ti-menu-alt"></span>
			</div>
			<div className="sidebar-menu">
				<ul>
					<li>
						<a href="">
							<span className="ti-home"></span>
							<span>Home</span>
						</a>
					</li>
            
					<li>
						<a href="">
							<span className="ti-plus"></span>
							<span>Add Courier</span>
						</a>
					</li>
					<li>
						<a href="">
							<span className="ti-location-pin "></span>
							<span>Track Status</span>
						</a>
					</li>
					
					
					<li>
						<a href="">
							<span className="ti-settings"></span>
							<span>Setting</span>
						</a>
					</li>
					<li>
						<a href="">
							<span className="ti-user"></span>
							<span>Sign-out</span>
						</a>
					</li>
					
				</ul>
			</div>
	</div>

		// <div className="main-content">
		// 	<header>
		// 		<h5>User Dashboard</h5>
		// 	</header>
			
			
			
	

    }
    
)
 export default UserDashboard