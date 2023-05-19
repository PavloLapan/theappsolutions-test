import React from "react";
import './footer.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faMarker, faHeart} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin, faTwitter, faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (

        <div className='footer'>

            <div className='footer-info d-flex justify-content-between'>
                <div className='text-start'>
                    <h1>wrapmate</h1>
                    <p><FontAwesomeIcon icon={faPhone}/> 303-329-2323</p>
                    <p><FontAwesomeIcon icon={faMarker}/> 5555 DTC Parkway <br/> Greenwood Village, CO</p>

                    <div className='social d-flex justify-content-between'>
                        <FontAwesomeIcon icon={faTwitter}/>
                        <FontAwesomeIcon icon={faLinkedin}/>
                        <FontAwesomeIcon icon={faFacebook}/>
                        <FontAwesomeIcon icon={faInstagram}/>
                    </div>
                </div>

                <div className='text-start'>
                    <h2>Company</h2>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>Reviews</p>
                </div>

                <div className='text-start'>
                    <h2>Contact</h2>
                    <p>Help</p>
                    <p>Sales</p>
                    <p>FAQ</p>
                </div>

                <div className='text-start'>
                    <h2>Partnerships</h2>
                    <p>Become a pro</p>
                    <p>Deallerships</p>
                    <p>Franchisors</p>
                </div>

            </div>


         <div className='additional-content d-flex justify-content-between'>
             <div className='d-flex'>
                 <p>©2023 Wraomate. All rights Reserved.</p> |
                 <p>Terms of conditions</p> |
                 <p>Privacy policy</p>
             </div>
             <div>
                 <p>made with <FontAwesomeIcon style={{color: 'blue'}} icon={faHeart}/> at our HQ in Lviv. Pavlo Lapan.</p>
             </div>
         </div>
        </div>)

}

export default Footer