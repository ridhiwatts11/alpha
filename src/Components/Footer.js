// import React, {useState} from 'react';

// const Footer = () => {

//     const [hoveredItem, setHoveredItem] = useState(null);

//     // Function to handle mouse entering a list item
//     const handleMouseEnter = (index) => {
//         setHoveredItem(index);
//     };

//     // Function to handle mouse leaving a list item
//     const handleMouseLeave = () => {
//         setHoveredItem(null);
//     };
//     return(
//         <footer className="bg-white text-dark py-4">
//             <div className="container">
//                 {/* Footer row with six lists side by side */}
//                 <div className="row">
//                     {/* First list */}
//                     <div className="col-6 col-md-2">
//                         <h5>Product</h5>
//                         <ul className="list-unstyled">
//                             <li>Overview</li>
//                             <li>Features</li>
//                             <li>solutions</li>
//                             <li>Tutorials</li>
//                             <li>Pricing</li>
//                             <li>Releases</li>
//                         </ul>
//                     </div>

//                     {/* Second list */}
//                     <div className="col-6 col-md-2">
//                         <h5>Company</h5>
//                         <ul className="list-unstyled">
//                             <li>About Us</li>
//                             <li>Careers</li>
//                             <li>Press</li>
//                             <li>News</li>
//                             <li>Media Kit</li>
//                             <li>Contact</li>
//                         </ul>
//                     </div>

//                     {/* Third list */}
//                     <div className="col-6 col-md-2">
//                         <h5>Resources</h5>
//                         <ul className="list-unstyled">
//                             <li>Blog</li>
//                             <li>Newsletter</li>
//                             <li>Events</li>
//                             <li>Help Centre</li>
//                             <li>Tutorials</li>
//                             <li>Support</li>
//                         </ul>
//                     </div>

//                     {/* Fourth list */}
//                     <div className="col-6 col-md-2">
//                         <h5>Use Cases</h5>
//                         <ul className="list-unstyled">
//                             <li>Startups</li>
//                             <li>Enterprise</li>
//                             <li>Government</li>
//                             <li>SaaS centre</li>
//                             <li>Marketplace</li>
//                             <li>Ecommerce</li>
//                         </ul>
//                     </div>

//                     {/* Fifth list */}
//                     <div className="col-6 col-md-2">
//                         <h5>Social</h5>
//                         <ul className="list-unstyled">
//                             <li>Twitter</li>
//                             <li>Linkedin</li>
//                             <li>Facebook</li>
//                             <li>Github</li>
//                             <li>AngelList</li>
//                             <li>Dribble</li>
//                         </ul>
//                     </div>

//                     {/* Sixth list */}
//                     <div className="col-6 col-md-2">
//                         <h5>Legal</h5>
//                         <ul className="list-unstyled">
//                             <li>Terms</li>
//                             <li>Privacy</li>
//                             <li>Cookies</li>
//                             <li>Licenses</li>
//                             <li>Settings</li>
//                             <li>Contact</li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="container">
//                 <hr className="w-100 mx-auto my-4" style={{ border: 'none', borderTop: '1px solid #ccc' }} /> {/* 100% width and centered */}
            
                
//                 <div className="row align-center"></div>
//                 <div className="col-md-6 d-flex align-items-center">
//             <img
//                 src="Logomark (1).png" 
//                 alt="Company Logo"
//                 className="img-fluid me-2"
//                 style={{ width: '40px', height: '40px' }} 
//             />
//             <span>Untitled UI</span> 
            
//         </div>

//             </div>
//                 {/* Copyright Notice */}
//                 <div className="text-end mt-4">
//                     <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
//                 </div>
//             </div>
//         </footer>

        
//     );
// };


// export default Footer;



import React, { useState } from 'react';

const Footer = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    // Function to handle mouse entering a list item
    const handleMouseEnter = (index) => {
        setHoveredItem(index);
    };

    
    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    return (
        <footer className="bg-white text-dark py-4">
            <div className="container">
                {/* Footer row with six lists side by side */}
                <div className="row">
                    {/* First list */}
                    <div className="col-6 col-md-2">
                        <h5>Product</h5>
                        <ul className="list-unstyled">
                            <li onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 1 ? '#666' : '#333', cursor:'default' }}>Overview</li>
                            <li onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 2 ? '#666' : '#333' ,cursor:'default' }}>Features</li>
                            <li onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 3 ? '#666' : '#333', cursor:'default' }}>Solutions</li>
                            <li onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 4 ? '#666' : '#333', cursor:'default' }}>Tutorials</li>
                            <li onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 5 ? '#666' : '#333', cursor:'default' }}>Pricing</li>
                            <li onMouseEnter={() => handleMouseEnter(6)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 6 ? '#666' : '#333', cursor:'default' }}>Releases</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2">
                        <h5>Company</h5>
                        <ul className="list-unstyled">
                            <li onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 1 ? '#666' : '#333', cursor:'default' }}>About Us</li>
                            <li onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 2 ? '#666' : '#333' ,cursor:'default' }}>Careers</li>
                            <li onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 3 ? '#666' : '#333', cursor:'default' }}>Press</li>
                            <li onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 4 ? '#666' : '#333', cursor:'default' }}>News</li>
                            <li onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 5 ? '#666' : '#333', cursor:'default' }}>Media Kit</li>
                            <li onMouseEnter={() => handleMouseEnter(6)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 6 ? '#666' : '#333', cursor:'default' }}>Contact</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2">
                        <h5>Resources</h5>
                        <ul className="list-unstyled">
                            <li onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 1 ? '#666' : '#333', cursor:'default' }}>Blog</li>
                            <li onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 2 ? '#666' : '#333' ,cursor:'default' }}>Newseletter</li>
                            <li onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 3 ? '#666' : '#333', cursor:'default' }}>Events</li>
                            <li onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 4 ? '#666' : '#333', cursor:'default' }}>Help centre</li>
                            <li onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 5 ? '#666' : '#333', cursor:'default' }}>Tutorials</li>
                            <li onMouseEnter={() => handleMouseEnter(6)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 6 ? '#666' : '#333', cursor:'default' }}>Support</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2">
                        <h5>Use Cases</h5>
                        <ul className="list-unstyled">
                            <li onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 1 ? '#666' : '#333', cursor:'default' }}>Startups</li>
                            <li onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 2 ? '#666' : '#333' ,cursor:'default' }}>Enterprise</li>
                            <li onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 3 ? '#666' : '#333', cursor:'default' }}>Government</li>
                            <li onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 4 ? '#666' : '#333', cursor:'default' }}>SaaS centre</li>
                            <li onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 5 ? '#666' : '#333', cursor:'default' }}>Marketplaces</li>
                            <li onMouseEnter={() => handleMouseEnter(6)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 6 ? '#666' : '#333', cursor:'default' }}>Ecommerce</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2">
                        <h5>Social</h5>
                        <ul className="list-unstyled">
                            <li onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 1 ? '#666' : '#333', cursor:'default' }}>Twitter</li>
                            <li onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 2 ? '#666' : '#333' ,cursor:'default' }}>Linkedin</li>
                            <li onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 3 ? '#666' : '#333', cursor:'default' }}>Facebook</li>
                            <li onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 4 ? '#666' : '#333', cursor:'default' }}>Github</li>
                            <li onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 5 ? '#666' : '#333', cursor:'default' }}>AngelList</li>
                            <li onMouseEnter={() => handleMouseEnter(6)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 6 ? '#666' : '#333', cursor:'default' }}>Dribble</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2">
                        <h5>Legal</h5>
                        <ul className="list-unstyled">
                            <li onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 1 ? '#666' : '#333', cursor:'default' }}>Terms</li>
                            <li onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 2 ? '#666' : '#333' ,cursor:'default' }}>Privacy</li>
                            <li onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 3 ? '#666' : '#333', cursor:'default' }}>Cookies</li>
                            <li onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 4 ? '#666' : '#333', cursor:'default' }}>Licenses</li>
                            <li onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 5 ? '#666' : '#333', cursor:'default' }}>Settings</li>
                            <li onMouseEnter={() => handleMouseEnter(6)} onMouseLeave={handleMouseLeave} style={{ color: hoveredItem === 6 ? '#666' : '#333', cursor:'default' }}>Contact</li>
                        </ul>
                    </div>

                    

                </div>
                <div className="container">
                    <hr className="w-100 mx-auto my-4" style={{ border: 'none', borderTop: '1px solid #ccc' }} />
                    
                    <div className="row align-center">
                        <div className="col-md-6 d-flex align-items-center">
                            <img
                                src="Logomark (1).png"
                                alt="Company Logo"
                                className="img-fluid me-2"
                                style={{ width: '40px', height: '40px' }}
                            />
                            <span className="company-name align-center" style={{marginRight: '10px'}}>Untitled UI</span>
                            
                        </div>
                        <div className="col-md-6">
                                <p className="text-end mt-1">&copy; {new Date().getFullYear()} Untitled UI. All rights reserved.</p>
                            </div>
                        
                    </div>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;
