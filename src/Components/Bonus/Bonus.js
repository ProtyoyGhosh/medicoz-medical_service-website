import React from 'react';
import aboutImg from '../../images/about.png'

const Bonus = () => {
    return (
        <div>
            <div>
                <div className="about-section">
                    <h6 className='d-flex align-items-center justify-content-center mt-5'>
                        <span><img className='me-2' src="https://i.ibb.co/hcPnXvz/Heartbeat-304130-960-720.png" alt="" /></span>
                        ABOUT US
                        <span><img className='ms-2' src="https://i.ibb.co/hcPnXvz/Heartbeat-304130-960-720.png" alt="" /></span>
                    </h6>
                    <div className="row">
                        <div className="col-md-6">
                            <img className='w-75' src={aboutImg} alt="" />
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <div className="about-details">
                                <h3 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '20px' }}>We're setting Standards in Research what's more, Clinical Care.
                                </h3>
                                <p>We provide the most full medical services, so every person could have the pportunity o receive qualitative medical help.

                                    Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of uality training and experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bonus;