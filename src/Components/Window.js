import React from 'react';


const Window = () => {
    return(
        // <div className="row justify-content-center align-items-center" style={{ height: '50vh' }}>
        //         {/* Column with appropriate width */}
                
        //         <div className="col-12 col-md-10 col-lg-10 px-0">

                    
        //             {/* Card */}
        //             <div className="card custom-card" style={{ width: '100%' }}>
        //                 <div className="card-body" style={{height: "300px"}}>
        //                 <div className="row">
        //                         {/* First column (1/3 of card width) */}
        //                         <div className="col-3">
        //                             <div className="vertical-part">
        //                                 <h6>Part 1</h6>
        //                                 <p>Content for part 1</p>
        //                             </div>
        //                         </div>
                                
        //                         {/* Second column (1/3 of card width) */}
        //                         <div className="col-4">
        //                             <div className="vertical-part">
        //                                 <h6>Part 2</h6>
        //                                 <p>Content for part 2</p>
        //                             </div>
        //                         </div>
                                
        //                         {/* Third column (1/3 of card width) */}
        //                         <div className="col-4">
        //                             <div className="vertical-part">
        //                                 <h6>Part 3</h6>
        //                                 <p>Content for part 3</p>
        //                             </div>
        //                         </div>
        //                     </div>
                            
        //                 </div>
        //             </div>
        //         </div> 
        //     </div>

        <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
            
            <div className="col-12 col-md-8 col-lg-10 px-0 ">
                
                <img
                    src="container.png" 
                    alt="Description of the image"
                    className="img-fluid" 
                    style={{ width: '100%', height: '500px' }} 
                />

                
                <div className="row position-absolute" style={{ top: 0, left: 0, width: '100%' }}>
                    
                    

                    
                    
                </div>
            </div>
        </div>

            
            
    );
}

export default Window;