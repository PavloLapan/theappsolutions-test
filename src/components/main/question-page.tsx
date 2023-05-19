import React  from "react";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Accordion from 'react-bootstrap/Accordion';
//@ts-ignore
import asset from '../../images/asset2.png'
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";


const QuestionPage = () => {

    const accordions = [
        {
            header: 'What exactly is Wrapmate? ',
            body: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
                '                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n' +
                '                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
                '                        aliquip ex ea commodo consequat. Duis aute irure dolor in\n' +
                '                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
                '                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n' +
                '                        culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            header: 'What exactly is Wrapmate?2 ',
            body: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
                '                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n' +
                '                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
                '                        aliquip ex ea commodo consequat. Duis aute irure dolor in\n' +
                '                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
                '                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n' +
                '                        culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            header: 'What exactly is Wrapmate?3 ',
            body: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
                '                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n' +
                '                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
                '                        aliquip ex ea commodo consequat. Duis aute irure dolor in\n' +
                '                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
                '                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n' +
                '                        culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            header: 'What exactly is Wrapmate?4 ',
            body: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
                '                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n' +
                '                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
                '                        aliquip ex ea commodo consequat. Duis aute irure dolor in\n' +
                '                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
                '                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n' +
                '                        culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            header: 'What exactly is Wrapmate?5 ',
            body: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
                '                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n' +
                '                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
                '                        aliquip ex ea commodo consequat. Duis aute irure dolor in\n' +
                '                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
                '                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n' +
                '                        culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            header: 'What exactly is Wrapmate?6 ',
            body: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
                '                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n' +
                '                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
                '                        aliquip ex ea commodo consequat. Duis aute irure dolor in\n' +
                '                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
                '                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n' +
                '                        culpa qui officia deserunt mollit anim id est laborum.'
        },
    ]

    return (
        <div className='question-page'>

            <h2 className='text-center fw-bold'>Frequently asked questions:</h2>

            <Accordion className='accordions'>
                {
                    accordions.map((item, i) => {
                        return(
                            <Accordion.Item eventKey={`${i}`}>
                                <Accordion.Header>{item.header}</Accordion.Header>
                                <Accordion.Body>{item.body}</Accordion.Body>
                            </Accordion.Item>
                        )
                    })
                }
            </Accordion>

            <div className='d-flex justify-content-between packages'>
                <img src={asset} alt=""/>
                <Button className='button-3' variant="primary"><a href="#">See package options <FontAwesomeIcon icon={faArrowRight} /></a></Button>
            </div>

        </div>
    );
};


export default QuestionPage