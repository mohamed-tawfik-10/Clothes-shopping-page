import React, { useEffect, useState } from 'react'
import Style from './MainSlider.module.css'
import mainSlid from '../../assets/1.png'
import mainSlid2 from '../../assets/2.png'
import mainSlid3 from '../../assets/3.png'
import mainSlid4 from '../../assets/4.png'
import mainSlid5 from '../../assets/5.png'
import Slider from "react-slick";

export default function MainSlider() {
    const [Counter, SetCounter] = useState(0);
    useEffect(() => { }, []);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        
    };

    1
    return <>
        <div className='row w-1/2 m-auto '>
            <div className='w-2/4'>
                <Slider {...settings}>
                    <img src={mainSlid} alt="" className='w-full h-[400px]' />
                    <img src={mainSlid2} alt="" className='w-full h-[400px]' />
                    <img src={mainSlid3} alt="" className='w-full h-[400px]' />

                </Slider>

            </div>
            <div className='w-2/4'>
                <img src={mainSlid4} alt="" className='w-full h-[200px]' />
                <img src={mainSlid5} alt="" className='w-full h-[200px]' />

            </div>
        </div>
    </>
}
