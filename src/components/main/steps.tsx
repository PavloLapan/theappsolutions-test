import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// @ts-ignore
import stepImage from '../../images/stepImage.png'

const Steps = () => {

    const steps = [
        {
            subtitle: 'step 1',
            title: 'Purchase your graphics online',
            list: {
                title: 'you can get wrap design complete with...',
                listItems: [
                    'Spring Green logo',
                    'Your phone number',
                    '\"Owned & opreated by\" your company name'
                ]
            }
        },
        {
            subtitle: 'step 2',
            title: 'Purchase your graphics online',
            stepInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, recusandae!'
        },
        {
            subtitle: 'step 3',
            title: 'Purchase your graphics online',
            stepInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, recusandae!'
        }
    ]

    return (
        <>
            <div id='stepsArea' className='content-middle steps-area'>

                <h2 className='text-center mb-5 mt-5'><span className='borderedSpan'>Grow</span> your lawn care business 3 easy way</h2>
                <div className='d-flex'>
                    <img src={stepImage} alt=""/>


                    <div className='p-2'>
                        {
                            steps.map((step, i) => {
                                return (
                                    <div className='steps'>
                                        <p className='color-blue'>{step.subtitle}</p>
                                        <h3>{step.title}</h3>
                                        {step.stepInfo && <p>{step.stepInfo}</p>}
                                        {step.list &&
                                            <>
                                                <p>{step.list.title}</p>
                                                <ul>
                                                    {
                                                        step.list.listItems.map(item => <li>{item}</li>)
                                                    }
                                                </ul>
                                            </>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )

}

export default Steps