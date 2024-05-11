import React from 'react';

const Features = () => {

    const imageUrl = '3_2 screen mockup.png';
    const newImageUrl = 'iPhone 12 Pro Mockup.png';

    const features = [
        {
            title: 'Share team inboxes',
            description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
            imageUrl: 'message-chat-circle.png',
            },
        {
            title: 'Deliver instant answers',
            description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
            imageUrl: 'zap.png',
            },
        {
            title: 'Manage your team with reports',
            description: 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
            imageUrl: 'chart-breakout-square.png',
            },
    ];

    return(
        <div className = "container text-center my-4">
            <p className ="text-center" style={{fontSize: '30px', fontWeight: 'bold'}}>Cutting-edge features for advanced analytics</p>
            <p className = "text-center">powerful, self-serve product and growth analytics to help you convert, engage,<br/> and retain more users. Trusted by over 4,000 startups.</p>
            <div className="row justify-content-center">
            <div className="col-12 col-md-8 position-relative d-flex justify-content-center">
            
            <img src={imageUrl} alt="Description of the image" className="img-fluid" style={{height: 'auto'}} />

            
            <img
                src={newImageUrl}
                alt="Description of the overlapping image"
                className="img-fluid position-absolute"
                style={{ left: '0', width: '27%', height: '90%', top: '70px' }} 
            />
            </div>
            
        </div>
        <div className="container my-4">
                <div className="row justify-content-center">
                    
                    {features.map((feature, index) => (
                        <div key={index} className="col-12 col-md-4 mb-4">
                            <div className="card h-100" style={{border: 'none'}}>
                                <div className="card-body text-center">
                                <img src={feature.imageUrl} alt={`${feature.title} Logo`} className="img-fluid mb-3" />
                                    <h5 className="card-title">{feature.title}</h5>
                                    <p className="card-text">{feature.description}</p>
                                    <a href={feature.learnMoreUrl} className="btn"
                                    style={{
                                        backgroundColor: '#fff', 
                                        border: 'none',
                                        color: '#6941C6',
                                    }}
                                    >
                                    Learn More 
                                    <span>→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container">
                <hr className="w-100 mx-auto my-4" style={{ border: 'none', borderTop: '1px solid #ccc' }} />
            </div>
        </div>
        


        

    );

}

export default Features;