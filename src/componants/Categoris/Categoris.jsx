import React, { useEffect, useState } from 'react'
import Style from './Categoris.module.css'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

export default function Categoris() {
    const [Counter, SetCounter] = useState(0);
    function getResent() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/categories')

    }

     
    let { data, error, isError, isLoading, isFetching } = useQuery({
        queryKey: ['catagorisProducts'],
        queryFn: getResent,
        staleTime: 50000,
        // retry:6,
        // retryDelay:5000,
        // refetchInterval:5000,
    });
    console.log(data?.data?.data);


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




    return <>
   <div className="p-8 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data?.data?.data.map((product, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300 bg-white"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover bg-gray-50 "
            />
            <div className="text-center p-10 text-green-700 text-4xl font-semibold">
              {product.name}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
}
