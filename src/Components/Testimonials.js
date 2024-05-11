import React from 'react';

const Testimonials = () => {

    const logoUrl = 'logomark.png';
    const companyName = 'Sisyphus';
    const imageUrl = 'avatar.png';

    return(
        <div className = "container-fluid text-center my-4" style={{backgroundColor: '#F9FAFB', padding: '30px' }}>
            <div className="row justify-content-center align-items-center">
                
                <div className="col-auto">
                    <img src={logoUrl} alt="Company Logo" className="img-fluid" style={{ height: '50px', marginRight: '20px' }} />
                </div>
                
                
                <div className="col-auto">
                    <h1>{companyName}</h1>
                </div>
            </div>
            <div className="row mt-3 justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <p style={{fontFamily: 'inter', fontSize: '20px', fontWeight: 'bold'}}>We’ve been using Untitled to kick start every new<br/> project and can’t imagine working without it.</p>
                    <img src={imageUrl} alt="Description of the image" className="img-fluid mt-4" />
                    <p style={{fontWeigh: 'bold'}}>Candice Wu,<br/> Product Manager, Sisyphus</p>
                    
                </div>
            </div>
        </div>
    );
}

export default Testimonials;