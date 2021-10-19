import React from 'react';
import ambulance from '../../images/ambulance.jpg';

const Ambulance = () => {
    return (
        <div>
            <div className="ambulance-service m-5">
                <h6 className='d-flex align-items-center justify-content-center mb-5'>
                    <span><img className='me-2' src="https://i.ibb.co/hcPnXvz/Heartbeat-304130-960-720.png" alt="" /></span>
                    24/7 AMBULANCE SERVICE
                    <span><img className='ms-2' src="https://i.ibb.co/hcPnXvz/Heartbeat-304130-960-720.png" alt="" /></span>
                </h6>
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <div className="ambulence-detail">
                            <h3 style={{ fontWeight: '600' }}>Call 999 & We will be there</h3>
                            <p>You can call an ambulance by using 999 or 112. If you are deaf, hard of hearing or speech-impaired you can contact us by texting from your mobile. This facility is available in any type of emergency and is for people who can't use the standard 999 voice or the RNID's text relay services.</p>
                            <h3 style={{ fontWeight: '600' }}>How to call 999</h3>
                            <p>You can call an ambulance by using 999 or 112.

                                If you are deaf, hard of hearing or speech-impaired you can contact us by texting from your mobile. This facility is available in any type of emergency and is for people who can’t use the standard 999 voice or the RNID’s text relay services.</p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5 mt-3">
                        <img className='w-75' src={ambulance} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ambulance;