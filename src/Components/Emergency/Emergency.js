import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import img1 from '../../images/emergency.jpg';
import img2 from '../../images/medicine.jpg';

const Emergency = () => {
    return (
        <div>
            <Header></Header>
            <div className="emergency m-5">
                <h6 className='d-flex align-items-center justify-content-center mb-5'>
                    <span><img className='me-2' src="https://i.ibb.co/hcPnXvz/Heartbeat-304130-960-720.png" alt="" /></span>
                    CRITICAL CONDITION HANDELED
                    <span><img className='ms-2' src="https://i.ibb.co/hcPnXvz/Heartbeat-304130-960-720.png" alt="" /></span>
                </h6>
                <div className="row">
                    <div className="col-md-6">
                        <img className='w-100' src={img1} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1 style={{ fontWeight: '600', marginBottom: '30px' }}>Special Facilities and Equipment</h1>
                        <p>An ED requires different equipment and different approaches than most other hospital divisions. Patients frequently arrive with unstable conditions, and so must be treated quickly. They may be unconscious, and information such as their medical history, allergies, and blood type may be unavailable. ED staff are trained to work quickly and effectively even with minimal information.

                        </p>
                    </div>
                </div>
            </div>
            <div className="medicine">
                <h6 className='d-flex align-items-center justify-content-center mb-5 mt-3'>
                    <span><img className='me-2' src="https://i.ibb.co/hcPnXvz/Heartbeat-304130-960-720.png" alt="" /></span>
                    FREE HOME DELIVERY
                    <span><img className='ms-2' src="https://i.ibb.co/hcPnXvz/Heartbeat-304130-960-720.png" alt="" /></span>
                </h6>
                <div className="row">
                    <div className="col-md-6">
                        <h1 style={{ fontWeight: '600' }}>Effortless Online Medicine Orders from us
                        </h1>
                        <p className='p-2'>
                            Because ordering medicines online need not be complicated but rather a cakewalk. And at Apollo Pharmacy we ensure that.
                            For over 32 years, we been providing you with genuine medicines round-the-clock, through 24-hour pharmacies. And now through us, we intend to make your lives easier – by getting your medicines delivered to you. Yes, no more stepping out to get your medicines, no more standing in long queues, no more worrying about the genuineness of medicines, no more sweat! Here are more reasons why you should buy your medicines from us:



                        </p>
                    </div>
                    <div className="col-md-6 mb-5 mt-3">
                        <img className='w-75' src={img2} alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Emergency;