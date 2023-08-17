import {FC} from "react";

import Star from '../../../assets/star.svg'

import './ReviewsSlide.scss'

const ReviewsSlide = ({review}) => {
    return (
        <div className='reviews-slide'>
            <div className='reviews-slide__head'>
                <div className='reviews-slide__info'>
                    <img src={review.img} alt={'Person'}/>
                    <div>
                        <h6>{review.name}</h6>
                        <span>{review.status}</span>
                    </div>
                </div>
                <div className='reviews-slide__rating'>
                    <img src={Star} alt='Star'/>
                    <span>{review.rating}</span>
                </div>
            </div>
            <div className='reviews-slide__description'>
                <p>{review.description}</p>
            </div>
        </div>
    )
}

export default ReviewsSlide