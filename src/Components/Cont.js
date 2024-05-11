import React from 'react';

const Cont = () => {

    const features = [
        {
            title: 'Share team inboxes',
            description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
            imageUrl: 'message-chat-circle.png',
            content: (
                <>
                    <p>Additional content for feature 1:</p>
                    <ul>
                        <li>Point 1</li>
                        <li>Point 2</li>
                        <li>Point 3</li>
                    </ul>
                    <button className="btn btn-primary">Learn More</button>
                </>
            )
        },
        {
            title: 'Deliver instant answers',
            description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
            imageUrl: 'zap.png',
            content: (
                <>
                    <p>Additional content for feature 2:</p>
                    <ul>
                        <li>Point 1</li>
                        <li>Point 2</li>
                        <li>Point 3</li>
                    </ul>
                    <button className="btn btn-secondary">Get Started</button>
                </>
            )
        },
        {
            title: 'Manage your team with reports',
            description: 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
            imageUrl: 'chart-breakout-square.png',
            content: (
                <>
                    <p>Additional content for feature 3:</p>
                    <ul>
                        <li>Point 1</li>
                        <li>Point 2</li>
                        <li>Point 3</li>
                    </ul>
                    <button className="btn btn-success">Explore</button>
                </>
            )
        },
        {
            title: 'Connect with customers',
            description: 'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
            imageUrl: 'message-smile-circle.png',
            content: (
                <>
                    <p>Additional content for feature 3:</p>
                    <ul>
                        <li>Point 1</li>
                        <li>Point 2</li>
                        <li>Point 3</li>
                    </ul>
                    <button className="btn btn-success">Explore</button>
                </>
            )
        },
        {
            title: 'Connect the tools you already use',
            description: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
            imageUrl: 'Icon (1).png',
        },
        {
            title: 'Our people make the difference',
            description: 'We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.',
            imageUrl: 'message-heart-circle.png',
            content: (
                <>
                    <p>Additional content for feature 3:</p>
                    <ul>
                        <li>Point 1</li>
                        <li>Point 2</li>
                        <li>Point 3</li>
                    </ul>
                    <button className="btn btn-success">Explore</button>
                </>
            )
        },
        
    ];

    return(
        <div className="container" style={{marginTop: '50px'}}>
            <h1 className="text-center my-4">Analytics that feels like it's from the future</h1>
            <p className="text-center">Powerful, self-serve product and growth analytics to help you convert, engage,<br/> and retain more users. 
            Trusted by over 4,000 startups.</p>

            <div className="container my-4">
                <div className="row justify-content-center">
                    
                    {features.map((feature, index) => (
                        <div key={index} className="col-12 col-md-4 mb-4">
                            <div className="card h-100" style={{border: 'none'}}>
                                <div className="card-body text-center">
                                <img src={feature.imageUrl} alt={`${feature.title} Logo`} className="img-fluid mb-3" />
                                    <h5 className="card-title">{feature.title}</h5>
                                    <p className="card-text">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cont;