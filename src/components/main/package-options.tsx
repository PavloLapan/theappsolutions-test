import React from "react";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

const PackageOptions = () => {
    return (
        <div id='package-options' className='package-options'>
            <h2>You trust your vehicle. Trust us with your <br/> marketing.</h2>
            <Button className='button-1' variant="primary"><a href="#">See package options <FontAwesomeIcon icon={faArrowRight} /></a></Button>
        </div>)

}

export default PackageOptions