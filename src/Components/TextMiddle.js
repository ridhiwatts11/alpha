import React, {useState} from 'react';
import './TextMiddle.css';

const TextMiddle = () => {
    const [isHovered, setIsHovered] = useState(null);
    return (
        <div className="container">
            
            <div className="row justify-content-center align-items-center" style={{ height: '20vh', marginTop: '50px' }}>
                <div className="col-12 col-md-8 col-lg-6 text-center">
                    <h2 className = "custom-h2">Beautiful analytics to grow smarter</h2>
                    <p className = "custom-p">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                
                    <div className = "mt-4">
                        
                        <button className={`btn btn-secondary same-size-btn me-2 custom-demo-text ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                            <img src="Icon (3).png" alt="" className="me-1" />
                            Demo
                        </button>
                        <button className={`btn btn-primary same-size-btn me-2 custom-sign-up-text ${isHovered ? 'hovered' : ''}`}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}>
                            Sign Up
                        </button>
                    
                    </div>

                    
                    
                
                </div>
                
            </div>
            
            
            
        </div>
        
    );
}

export default TextMiddle;