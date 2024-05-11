import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CusCard from './CusCard';
import './NavBar.css';


const Navbar = () => {

  const [hoveredCard, setHoveredCard] = useState(null);
    return(
        <>
        <div className = "container fluid nav_bg">
            <div className = "row">
                <div className = "col-12 col-md-8 col-lg-10 mx-auto">

                
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container-fluid">
  <img
                src="Logomark (1).png" 
                alt="Company Logo"
                className="img-fluid me-2"
                style={{ width: '40px', height: '40px' }} 
            />
    <a className="navbar-brand" href="#">Untitled UI</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#"  id="homeDropdown" role="button" data-bs-toggle="dropdown" aria-disabled="false">Home</a>
        <CusCard/> 
          
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="productDropdown"
                                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Products
                                            </a>
          <ul className="dropdown-menu dropdown-menu-lg-start" aria-labelledby="productsDropdown" style={{width: '500px'}}>
                                                <li className="pricing-dropdown-item" style={{overflow: 'hidden'}}>
                                                    <div className="row">
                                                      
                                                        <div className="col-6 bg-white">
                                                        <div className="card"
                                                        onMouseEnter={() => setHoveredCard(1)}
                                                        onMouseLeave={() => setHoveredCard(false)}
                                                        style={{marginLeft: '10px', marginBottom: '20px', border: 'none',transition: 'background-color 0.3s',
                                                        backgroundColor: hoveredCard===1 ? '#f0f0f0' : 'inherit'}}>
                                                    
                                                    <div className="card-body">
                                                        <h5 className="card-title">Blog</h5>
                                                        <p className="card-text">The latest industry news, updates and info.</p>
                                                    </div>
                                                </div>
                                                <div className="card"
                                                onMouseEnter={() => setHoveredCard(2)}
                                                onMouseLeave={() => setHoveredCard(null)}
                                                style={{marginLeft: '10px', marginBottom: '20px', border: 'none',transition: 'background-color 0.3s',
                                                backgroundColor: hoveredCard === 2 ? '#f0f0f0' : 'inherit'}}>
                                                    
                                                    <div className="card-body">
                                                        <h5 className="card-title">Customer Stories</h5>
                                                        <p className="card-text">Learn how our customers are making big change.</p>
                                                    </div>
                                                </div>
                                                <div className="card"
                                                onMouseEnter={() => setHoveredCard(3)}
                                                onMouseLeave={() => setHoveredCard(null)}
                                                style={{marginLeft: '10px', border: 'none',transition: 'background-color 0.3s',
                                                backgroundColor: hoveredCard === 3 ? '#f0f0f0' : 'inherit'}}>
                                                    
                                                    <div className="card-body">
                                                        <h5 className="card-title">Video Tutorials</h5>
                                                        <p className="card-text">Get up and running on new features and techniques</p>
                                                    </div>
                                                </div>
                                                            
                                                        </div>
                                                        <div className="col-6 bg-light" >
                                                            <div className="py-2 px-3">
                                                                <img src='th (2).jpeg' alt='im' className="card-img-top" style={{marginBottom: '10px'}} />
                                                                <h6 className="mb-0">We have just released an update!</h6>
                                                                <p className="mb-0">Check out all the new dashboard view. Pages now load faster.</p>
                                                            </div>
                                                            <div className = "mt-4">
                                                              <button className="btn btn-secondary same-size-btn me-2 custom-demo-text" style={{backgroundColor: '#F9FAFB', border: 'none'}}>Dismiss</button>
                                                              <button className="btn btn-primary same-size-btn me-2 custom-sign-up-text" style={{backgroundColor: '#F9FAFB', color: '#7F56D9', border: 'none'}}>Changelog</button>
                    
                    </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="resourcesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"  >
            Resources
          </a>
          <CusCard/>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#"  id = "pricingDropdown" role="button" data-bs-toggle="dropdown" aria-disabled="false">Pricing</a>
          <CusCard/>
        </li>
      </ul>
      <div className="dropdown">
                            
                            <button
                                className="btn btn-light" 
                                type="button"
                                id="profileDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{ padding: 0, border: 'none' }}
                            >
                                <img
                                    src="Avatar (1).png" 
                                    alt="Profile"
                                    className="rounded-circle"
                                    style={{ width: 40, height: 40 }}
                                />
                            </button>

                            
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="profileDropdown" style={{width: '250px'}}
                            >

                                <div className="d-flex align-items-center">
                                    <img src='Avatar (1).png' alt="Profile" className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} />
                                    <div>
                                        <p className="mb-0">Olivia Rhye</p>
                                        <p className="text-muted mb-0">olivia@untitledui.com</p>
                                    </div>
                                </div>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">View Profile</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Keyboard Shortcuts</a></li>
                                <li><a className="dropdown-item" href="#">Company Profile</a></li>
                                <li><a className="dropdown-item" href="#">Team</a></li>
                                <li><a className="dropdown-item" href="#">Invite Colleagues</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Changelog</a></li>
                                <li><a className="dropdown-item" href="#">Slack Community</a></li>
                                <li><a className="dropdown-item" href="#">Support</a></li>
                                <li><a className="dropdown-item" href="#">API</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </div>
    </div>
  </div>
</nav>
</div>
            </div>
        </div>
        </>
    )

}

export default Navbar;