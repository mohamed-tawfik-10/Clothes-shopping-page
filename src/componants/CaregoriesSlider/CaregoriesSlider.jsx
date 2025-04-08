import React, { useEffect, useState } from 'react'
import Style from './CaregoriesSlider.module.css'
import Slider from "react-slick";
import axios from 'axios';

export default function CaregoriesSlider() {
    const [Caregories, SetCaregories] = useState([]);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 3,
    };

    function getCaregories() {
        axios.get('https://ecommerce.routemisr.com/api/v1/categories')
            .then((response) => {
                SetCaregories(response.data.data)
            })
            .catch((error) => {
                // setapiError(error);

            })
    }
    useEffect(() => {
        getCaregories();
    }, []);

    return <>
<div className='py-5'>
    <h2 className='text-start text-xl text-gray-800 py-4 font-medium'>Shop popular categories</h2>
    <Slider {...settings}>
            {Caregories.map((category) => <div>
                <img className='categori-hiegh w-full' src={category.image} alt={category.name} />
                <h3 className='font-light mt-2'>{category.name}</h3>
                </div>
            )}
        </Slider> 
        
</div>
        </>
}
