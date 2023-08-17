import {FC} from "react";
import SliderSlick from "react-slick";
import useEmblaCarousel from 'embla-carousel-react'

import SliderItem from "./SliderItem/index.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss'

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
    ]
};

const Slider = ({sliderData, type = "product", title}) => {
    return (
        <div className='slider'>
            <SliderSlick style={{width: '100%'}} {...settings}>
                {sliderData.map((item, index) => (
                    <div className="slider__slide-wrapper">
                        <SliderItem key={item.id} item={item} type={type}/>
                    </div>
                ))}
            </SliderSlick>
        </div>
    )
}

export default Slider