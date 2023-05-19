import React, {useMemo} from "react";
//@ts-ignore
import asset1 from '../../images/asset1.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TrustPage = () => {
    const reviews = useMemo(() => [
        {
            name: 'Jennifer',
            job: 'Co-founder of Tap Trailer Co.',
            image: asset1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab delectus doloremque nulla suscipit? Architecto atque beatae distinctio dolor dolore doloribus earum id, maiores, natus, quae saepe sed ullam vel voluptates.\n'
        },
        {
            name: 'Jennifer1',
            job: 'Co-founder of Tap Trailer Co.',
            image: asset1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab delectus doloremque nulla suscipit? Architecto atque beatae distinctio dolor dolore doloribus earum id, maiores, natus, quae saepe sed ullam vel voluptates.\n'
        },
        {
            name: 'Jennifer2',
            job: 'Co-founder of Tap Trailer Co.',
            image: asset1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab delectus doloremque nulla suscipit? Architecto atque beatae distinctio dolor dolore doloribus earum id, maiores, natus, quae saepe sed ullam vel voluptates.\n'
        },
        {
            name: 'Jennifer3',
            job: 'Co-founder of Tap Trailer Co.',
            image: asset1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab delectus doloremque nulla suscipit? Architecto atque beatae distinctio dolor dolore doloribus earum id, maiores, natus, quae saepe sed ullam vel voluptates.\n'
        },

    ], [])

    if(!reviews){
        return null
    }
    return (

        <div id='trustPage' className='trust-page'>
            <h2 className='text-center'>Trusted by <span className='borderedSpan'>thousand</span> of business owners nationwide.</h2>

            <OwlCarousel className="owl-theme" loop margin={10} dots={false}  autoplay={false} nav={true} navClass={['nav-owl-left', 'nav-owl-right']} responsive={{
                0: {
                    items: 1
                },
                700: {
                    items: 1
                }
            }}>
                {
                    reviews.map((review, index) =>{
                        return(
                            <div className='owl-carousel-item d-flex'>
                                <div key={review.name} className="content-area text-center">
                                    <div>
                                        <FontAwesomeIcon color='blue' icon={faStar}/>
                                        <FontAwesomeIcon color='blue' icon={faStar}/>
                                        <FontAwesomeIcon color='blue' icon={faStar}/>
                                        <FontAwesomeIcon color='blue' icon={faStar}/>
                                        <FontAwesomeIcon color='blue' icon={faStar}/>
                                    </div>
                                    <p className=''>"{review.text}"</p>
                                </div>
                                <div style={{width: '30%'}}>
                                    <img src={review.image} alt=""/>
                                    <h6>{review.name}</h6>
                                    <p>{review.job}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </OwlCarousel>
        </div>
    )

}

export default TrustPage