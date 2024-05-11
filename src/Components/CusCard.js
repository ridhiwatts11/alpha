import React, {useState} from 'react';

const CusCard = () => {

    const [hoveredCard, setHoveredCard] = useState(null);
    return(
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
                                                        <p className="card-text">The lates industry news, updates and info</p>
                                                    </div>
                                                </div>
                                                <div className="card"
                                                onMouseEnter={() => setHoveredCard(2)}
                                                onMouseLeave={() => setHoveredCard(null)}
                                                style={{marginLeft: '10px', marginBottom: '20px', border: 'none',transition: 'background-color 0.3s',
                                                backgroundColor: hoveredCard === 2 ? '#f0f0f0' : 'inherit'}}>
                                                    
                                                    <div className="card-body">
                                                        <h5 className="card-title">Customer Stories</h5>
                                                        <p className="card-text">Learn how our customers are making big change</p>
                                                    </div>
                                                </div>
                                                <div className="card"
                                                onMouseEnter={() => setHoveredCard(3)}
                                                onMouseLeave={() => setHoveredCard(null)}
                                                style={{marginLeft: '10px', border: 'none',transition: 'background-color 0.3s',
                                                backgroundColor: hoveredCard === 3 ? '#f0f0f0' : 'inherit'}}>
                                                    
                                                    <div className="card-body">
                                                        <h5 className="card-title">Video Tutorials</h5>
                                                        <p className="card-text">Get up and running on new featured and technologies</p>
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
    );
}

export default CusCard;