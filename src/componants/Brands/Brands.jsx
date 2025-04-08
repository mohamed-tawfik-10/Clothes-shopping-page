import React, { useEffect, useMemo, useState } from 'react'
import Style from './Brands.module.css'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { ClipLoader } from 'react-spinners';

export default function Brands() {
    const [Counter1, SetCounter1] = useState(0);
    const [Counter2, SetCounter2] = useState(0);
   
    function getBrands() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/brands')

    }

     
    let { data, error, isError, isLoading, isFetching } = useQuery({
        queryKey: ['brandsProducts'],
        queryFn: getBrands,
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
     <h2 className='text-green-500 text-6xl font-bold pb-16'>All Brands     </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {data?.data?.data.map((product, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300 bg-white"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full  bg-gray-50 "
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
