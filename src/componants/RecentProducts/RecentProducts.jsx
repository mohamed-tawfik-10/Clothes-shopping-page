import React, { useContext, useEffect, useState } from 'react'
import Style from './RecentProducts.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductDetails from '../ProductDetails/ProductDetails';
import { useQuery } from '@tanstack/react-query';
// import ClipLoader from "react-spinners/ClipLoader";
import ClipLoader from "react-spinners/ClipLoader";
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';
import { WichContext } from '../../Context/WichContext';
import HeartButton from '../HeartButton/HeartButton';


export default function RecentProducts() {
    const [Loading, setLoading] = useState(false);
    const [CurentProduct, setCurentProduct] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");

    const handleFavoriteToggle = (productId, isNowFavorite) => {
        console.log(`${productId} is now ${isNowFavorite ? 'favorite' : 'not favorite'}`)
    }
  

    let { addProductToCart, setCart } = useContext(CartContext);
    async function addProduct(productId) {
        setLoading(true);
        setCurentProduct(productId);
        let response = await addProductToCart(productId);
        if (response.data.status === "success") {
            setLoading(false);
            setCart(response.data);
            toast.success(response.data.message, {
                duration: 1000,
                position: 'top-left'
            })
        } else {
            setLoading(false);
            toast.error(response.data.message, {
                duration: 1000,
                position: 'top-left'
            })
        }
        // toast("added success");
        console.log(response);


    }

    let { addProductToWich } = useContext(WichContext);
    async function addWich(productId) {
        let response = await addProductToWich(productId);
        if (response.data.status === "success") {
            setLoading(false);
            toast.success(response.data.message, {
                duration: 1000,
                position: 'top-left'
            })
        } else {
            toast.error(response.data.message, {
                duration: 1000,
                position: 'top-left'
            })
        }
        // toast("added success");
        console.log(response);


    }



    function getResent() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/products')

    }
    let { data, error, isError, isLoading, isFetching } = useQuery({
        queryKey: ['recentProducts'],
        queryFn: getResent,
        staleTime: 50000,
        // retry:6,
        // retryDelay:5000,
        // refetchInterval:5000,
    });
    console.log(data);


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
    // const [recentProducts, setrecentProducts] = useState([]);
    // function getRecentProducts() {
    //     axios.get('https://ecommerce.routemisr.com/api/v1/products')
    //         .then((response) => {
    //             console.log(response.data);
    //             setrecentProducts(response.data.data)
    //         })
    //         .catch((error) => {
    //             console.log(error);

    //         })
    // }
    // const [Counter, SetCounter] = useState(0);
    // useEffect(() => {
    //     getRecentProducts();
    // }, [])

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
                    </Link>
                    <div className='flex '>   <button onClick={() => addProduct(product.id)} className='btn'>
                        {CurentProduct === product.id && Loading ? <i className='fas fa-spinner fs-span'></i> : 'add to card'}</button>
                        <HeartButton
                            productId={product.id}
                            onToggleFavorite={handleFavoriteToggle}
                            addWich={addWich}
                            className="bg-transparent"
                        />

                    </div>



                </div>
            </div>)}
        </div>
    </>
}
