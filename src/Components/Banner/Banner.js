import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/banner.png';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner">
                <div className="row">
                    <div className="col-md-6 banner-heading mb-5">
                        <div className="banner-content">
                            <h1 style={{ fontSize: '40px', fontWeight: '700' }} className=' ms-5'>We provide Total Health Care Solution</h1>
                            <p style={{ fontSize: '18px', fontWeight: '500' }} className='ms-3'>We are Commited to build a Positive,Safe,Patient focused Culture.ChekUp regullerly in order to lead a better life!! </p>
                            <button className='banner-button'> <Link style={{ textDecoration: 'none' }} to="/aboutus">About Us</Link></button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="banner-img mt-5">
                            <img className='w-75' src={banner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;