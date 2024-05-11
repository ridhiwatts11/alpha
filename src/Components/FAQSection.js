import React, {useState} from 'react';

const FAQSection = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const imageUrl = 'Avatar group.png'

    const toggleIcon = (index) => {
        if(expandedIndex === index){
            setExpandedIndex(null);
        }else{
            setExpandedIndex(index);
        }
    };

    const faqs = [
        {question: 'Is there a free trial available?', answer: 'Yes, you can try us free for 30 days. if you wnat, we will provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'},
        {question: 'Can I change my plan later?', answer: 'Yes, you can try us free for 30 days. if you want, we will provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'},
        {question: 'What is your cancellation policy?', answer: 'Yes, you can try us free for 30 days. if you wnat, we will provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'},
        {question: 'Can other info be added to the invoice?', answer: 'Yes, you can try us free for 30 days. if you wnat, we will provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'},
        {question: 'How does billing work?', answer: 'Yes, you can try us free for 30 days. if you wnat, we will provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'},
        {question: 'How can I change my account email?', answer: 'Yes, you can try us free for 30 days. if you wnat, we will provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'},
    ];

    return(
        <div className="container my-4">
            <h2 className ="text-center">Frequently Asked Questions</h2>
            <p className = "text-center">Everything you need to know about the product and billing.</p>
            
            <div className="row justify-content-center">
                
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="accordion" id="faqAccordion">
                        {faqs.map((faq, index) => (
                            <div key={index} className="accordion-item">
                                <h2 className="accordion-header" id={`heading${index}`}>
                                    <button
                                        className={`accordion-button ${expandedIndex === index ? '' : 'collapsed'}`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${index}`}
                                        aria-expanded={expandedIndex === index ? 'true' : 'false'}
                                        aria-controls={`collapse${index}`}
                                        onClick={() => toggleIcon(index)}
                                    >
                                        {faq.question}
                                        
                                        
                                    </button>
                                </h2>
                                <div
                                    id={`collapse${index}`}
                                    className={`accordion-collapse collapse ${expandedIndex === index ? 'show' : ''}`}
                                    aria-labelledby={`heading${index}`}
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className = "container-fluid text-center my-4" style={{backgroundColor: '#F9FAFB', padding: '30px' }}>
                <img src={imageUrl} alt="Description of the image" className="img-fluid mt-4" />
                <p>Still have questions?</p>
                <p>Can't find the answer you are looking for?Please chat to our friendly team.</p>
                <button className="btn btn-primary same-size-btn me-2 custom-sign-up-text" style={{backgroundColor: "#7F56D9"}}>Get in Touch</button>
            </div>
            <div className="container">
                <hr className="w-100 mx-auto my-4" style={{ border: 'none', borderTop: '1px solid #ccc' }} /> 
            </div>
        </div>
    );
} 


export default FAQSection;



// import React from 'react';

// const FAQSection = () => {
//     const faqs = [
//         { question: 'Is there a free trial available?', answer: 'Yes, you can try us free for 30 days. If you want, we will provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' },
//         // Add more FAQ items as needed
//     ];

//     return (
//         <div className="container my-4">
//             <h2 className="text-center">Frequently Asked Questions</h2>
//             <p className="text-center">Everything you need to know about the product and billing.</p>
//             {/* Wrap FAQ section in a row and column */}
//             <div className="row justify-content-center">
//                 {/* Adjust column width for responsiveness */}
//                 <div className="col-12 col-md-8 col-lg-6">
//                     <div className="accordion" id="faqAccordion">
//                         {faqs.map((faq, index) => (
//                             <div key={index} className="accordion-item">
//                                 <h2 className="accordion-header" id={`heading${index}`}>
//                                     <button
//                                         className="accordion-button collapsed"
//                                         type="button"
//                                         data-bs-toggle="collapse"
//                                         data-bs-target={`#collapse${index}`}
//                                         aria-expanded="false"
//                                         aria-controls={`collapse${index}`}
//                                     >
//                                         {faq.question}
//                                     </button>
//                                 </h2>
//                                 <div
//                                     id={`collapse${index}`}
//                                     className="accordion-collapse collapse"
//                                     aria-labelledby={`heading${index}`}
//                                     data-bs-parent="#faqAccordion"
//                                 >
//                                     <div className="accordion-body">
//                                         {faq.answer}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             <div className="container-fluid text-center my-4" style={{ backgroundColor: '#F9FAFB', padding: '30px' }}>
//                 {/* Add your image and button here */}
//             </div>
//             <div className="container">
//                 <hr className="w-100 mx-auto my-4" style={{ border: 'none', borderTop: '1px solid #ccc' }} /> {/* 100% width and centered */}
//             </div>
//         </div>
//     );
// }

// export default FAQSection;


