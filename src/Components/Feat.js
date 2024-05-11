import React from 'react';

const Feat = () => {
    return(
        <div className="container my-1">
            <div
                className="rounded p-3 bg-light d-flex justify-content-between align-items-center"
                style={{
                    width: '25%', // Adjust the width as needed (e.g., '50%', '100%')
                    height: '35px', // Adjust the height as needed (e.g., '100px', '200px')
                    borderRadius: '20px', // Adjust the circularity using borderRadius (e.g., '10px', '50px')
                }}
            >


<div
                    className="rounded p-2 bg-secondary mx-2" // Classes for styling the inner box
                    style={{
                        width: '20%', // Adjust the width as needed (e.g., '10%', '20%', '30%')
                        height: '100%', // Make the inner box the same height as the outer box
                        borderRadius: '20px', // Adjust the circularity to match the outer box
                    }}
                >
                </div>
                <span className="fs-6">Check out the team dashboard</span>

                
            </div>
            
        </div>
    );
}

export default Feat;