import React from 'react';
import './index.css';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare, FaPhoneAlt, FaEnvelope, FaYoutube, FaWhatsappSquare, FaYoutubeSquare  } from "react-icons/fa";

const TopHeader = () => {
    return (
        <div id="topbar" className="d-flex align-items-center fixed-top">
            <div className="container d-flex justify-content-between">
                <div className="contact-info d-flex align-items-center">
                    <FaEnvelope className='contact-icon'/> <a href="mailto:nithanprabhu158@example.com">nithanprabhu158@gmail.com</a>
                    <FaPhoneAlt className='contact-icon'/> <a href="tel:+91 9384587577">+91 9384587577</a> 
                </div>
                <div className="d-none d-lg-flex social-links align-items-center">
                    <a href="#" target='_blank' rel="noreferrer" className="linkedin"><FaLinkedin /></a>
                    <a href="#" target='_blank' rel="noreferrer" className="facebook"><FaFacebookSquare /></a>
                    <a href="#" target='_blank' rel="noreferrer" className=""><FaGithubSquare /></a>
                    <a href="#" target='_blank' rel="noreferrer" className="instagram"><FaInstagramSquare /></a>
                    <a href="#" target='_blank' rel="noreferrer" className="youtube"><FaYoutubeSquare /></a>
                    <a href="#" target='_blank' rel="noreferrer" className="whatsapp"><FaWhatsappSquare /></a>
                    
                </div>
            </div>
        </div>
    );
};
export default TopHeader;