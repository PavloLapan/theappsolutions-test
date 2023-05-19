import React from "react";

//@ts-ignore
import truck from '../../images/truck.png'
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

const CardPage = () => {
    const carInfo = [
        {
            title: 'tank truck1',
            image: truck,
            list: ['Lorem ipsum dolor sit amet, consectetur adipisicing.', 'Lorem ipsum dolor sit amet, consectetur adipisicing.', 'Lorem ipsum dolor sit amet, consectetur adipisicing.'],
            secondaryBtn: 'Graphics only 575$',
            primaryBtn: 'Graphics & installation: 1000$'
        },
        {
            title: 'tank truck2',
            image: truck,
            list: ['Lorem ipsum dolor sit amet, consectetur adipisicing.', 'Lorem ipsum dolor sit amet, consectetur adipisicing.', 'Lorem ipsum dolor sit amet, consectetur adipisicing.'],
            secondaryBtn: 'Graphics only 575$',
            primaryBtn: 'Graphics & installation: 1000$'
        },
        {
            title: 'tank truck3',
            image: truck,
            list: ['Lorem ipsum dolor sit amet, consectetur adipisicing.', 'Lorem ipsum dolor sit amet, consectetur adipisicing.', 'Lorem ipsum dolor sit amet, consectetur adipisicing.'],
            secondaryBtn: 'Graphics only 575$',
            primaryBtn: 'Graphics & installation: 1000$'
        }
    ]


    return (

        <div className='container cardPage mt-5'>
            <h2 className='text-center'>Choose from 8 design options</h2>
            <div className='d-flex justify-content-center'>
                {
                    carInfo.map((car, i) => {
                        return (
                            <div key={car.title} className='borderedCard text-center'>
                                <img src={car.image} alt=""/>
                                <h6>{car.title}</h6>
                                <ul>
                                    {
                                        car.list.map(item => <li key={i}>{item}</li>)
                                    }
                                </ul>
                                <div className='d-flex flex-column w-75 m-auto'>
                                    <Button className='button-2 m-1' variant="secondary"><a href="#">{car.secondaryBtn}
                                        <FontAwesomeIcon className='arrow'  icon={faArrowRight}/></a></Button>
                                    <Button className='button-1  m-1' variant="primary"><a href="#">{car.primaryBtn}
                                        <FontAwesomeIcon className='arrow'
                                                         icon={faArrowRight}/></a></Button>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default CardPage