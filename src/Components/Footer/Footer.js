import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer-section">
                <div className="row">
                    <div className="col-md-6 col-sm-12 mt-5">
                        <h5>Copyright @2021 <strong>Protyoy</strong> All rights Reserved</h5>
                    </div>
                    <div className="col-md-6 mt-5">
                        <Link>Privecy Policy ||</Link>
                        <Link> Contact Us ||</Link>
                        <Link> Supplier</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;