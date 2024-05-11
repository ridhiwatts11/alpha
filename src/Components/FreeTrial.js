import React from 'react';

const FreeTrial = () => {
    return(
        <div className = "container-fluid text-center my-4" style={{backgroundColor: '#F9FAFB', padding: '30px' }}>
            <div className="row justify-content-center align-items-center">
                <h1>Start your free trial</h1>
                <p>Join over 4,000+ startups already growing with Untitled.</p>
                <div className = "mt-4">
                        <button className="btn btn-secondary same-size-btn me-2 custom-demo-text" style ={{backgroundColor: '#FFFFFF'}}>Learn More</button>
                        <button className="btn btn-primary same-size-btn me-2 custom-sign-up-text">Get Started</button>
                    
                </div>
            </div>
        </div>
    );
}

export default FreeTrial;