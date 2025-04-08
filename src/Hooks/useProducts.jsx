import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

// هذا هوك

export default function useProducts() {
    function getResent() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/products')

    }
    let responseObject= useQuery({
        queryKey: ['recentProducts'],
        queryFn: getResent,
        staleTime:50000,
        // retry:6,
        // retryDelay:5000,
        // refetchInterval:5000,
    });
  return responseObject;

}
