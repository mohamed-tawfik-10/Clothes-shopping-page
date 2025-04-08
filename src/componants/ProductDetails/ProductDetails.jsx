import React, { useEffect, useState } from 'react'
import Style from './ProductDetails.module.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Slider from "react-slick";



export default function ProductDetails() {
    let { id, category } = useParams();

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    const [productDetails, setProductDetails] = useState(null);
    const [relatedProducts, setrelatedProducts] = useState([]);
    function getProductDetails(id) {
        axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
            .then((response) => {
                console.log(response.data);
                setProductDetails(response.data.data);

            })
            .catch(() => {
                // setapiError(error);

            })
    }
    function getrelatedProducts(category) {
        axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
            .then((response) => {
                let allProducts = (response.data.data);
                console.log(allProducts);
                let related = allProducts.filter((product) => product.category.name == category);
                console.log(related);

                setrelatedProducts(related);

            })
            .catch(() => {
                // setapiError(error);

            })
    }

    console.log(id);

    useEffect(() => {
        getProductDetails(id);
        getrelatedProducts(category);
    }, [id, category])

    return <>
        <div className="row">
            <div className='w-1/4'>

                <Slider {...settings}>
              {productDetails?.images.map((src)=><img className='w-full' src={src} alt={productDetails?.title} />
)}
                </Slider>
            </div>
            <div className='w-3/4 p-6'>
                <h2 className='text-lg font-normal text-gray-900'>{productDetails?.title}</h2>
                <p className='text-gray-600 font-light'>{productDetails?.description}</p>
                <div className='flex justify-between items-center mt-5'>
                    <span className=''>{productDetails?.price} EGP</span>
                    <span className=''>{productDetails?.ratingsAverage} <i className='fas fa-star text-yellow-400'></i></span>
                </div>
                <button className=' px-4 py-2 text-white w-full rounded-lg bg-green-600'>add to card</button>
            </div>

        </div>

        <div className="row">
            {relatedProducts.map((product) =>
                <div key={product.id} className='w-1/6'>
                    <div className='product py-4'>
                        <Link to={`/ProductDetails/${product.id}/${product.category.name}`}>
                            <img className='w-full' src={product.imageCover} alt={product.title} />
                            <span className='block font-light mt-2 text-green-700'>{product.category.name}</span>
                            <h2 className='text-lg font-normal text-gray-800 mb-4'>{product.title.split(' ').slice(0, 2).join(' ')}</h2>
                            <div className='flex justify-between items-center'>
                                <span className=''>{product.price} EGP</span>
                                <span className=''>{product.ratingsAverage} <i className='fas fa-star text-yellow-400'></i></span>
                            </div>
                            <button className='btn'>add to card</button>
                        </Link>
                    </div>
                </div>)}
        </div>
    </>
}
