import React, { useEffect, useState } from 'react'
import Style from './Products.module.css'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import useProducts from '../../Hooks/useProducts';



export default function Products() {
    const [Counter, SetCounter] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => { }, [])

    let { data, error, isError, isLoading, isFetching } = useProducts();

    if (isLoading) {
        return <div className='py-8'>
            <ClipLoader color='green' />
        </div>
    }

    if (isError) {
        return <div className='py-8'>
            <h3> {error}</h3>
        </div>
    }

    const filteredProducts = data?.data?.data?.filter((product) =>
        product.title.toLowerCase().includes(searchTerm?.toLowerCase())
    );

    return <>

        <div className="row">
            <input
                type="text"
                placeholder="search...."
                className="border-2 w-[80%] m-auto mt-10  border-blue-300 rounded-lg p-3 w-full mb-6 focus:outline-none focus:ring focus:ring-blue-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredProducts?.map((product) => <div key={product.id} className='w-1/4 px-4'>
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
