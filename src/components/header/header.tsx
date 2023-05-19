import React, {useCallback} from "react";
import Button from 'react-bootstrap/Button';
import './header.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faBehance, faTelegramPlane, faInstagram, } from "@fortawesome/free-brands-svg-icons";
// @ts-ignore
import bg from '../../images/bg.png'
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

const Header = () => {

    return (
        <div className="container-fluid content-middle header-container p-0">
            <div className="info-container">
                <h1>Hold the keys to success, literally</h1>
                <p className='p-2'>Grow your lawn care business the easy way. Wrapmate is the preferred provider for the Spring Green graphics. Order your vehicle spot graphics online and reap the marketing rewards </p>
                <Button className='button-1' variant="primary"><a href="#">See package options <FontAwesomeIcon icon={faArrowRight} /></a></Button>
            </div>

            <div className="head-image">
                <img style={{maxWidth: '100%', marginTop: '180px'}} src={bg} alt={'alt'}/>
            </div>
        </div>
    )
}

export default Header