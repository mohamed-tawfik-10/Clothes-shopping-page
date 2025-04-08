import React, { useContext, useEffect, useState } from 'react'
import Style from './Wichlist.module.css'
import { WichContext } from '../../Context/WichContext';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';
import HeartButton from '../HeartButton/HeartButton';

export default function Wichlist() {
    let { getLoggedUserWich, deleteProductItem } = useContext(WichContext);
    const [WichDetails, SetWichDetails] = useState(null);

    async function getWichIetm() {
        let response = await getLoggedUserWich();
        console.log(response.data.data);
        SetWichDetails(response.data.data);


    }
    async function deleteremovrWich(productId) {
        let response = await deleteProductItem(productId);
        console.log(response.data);
        SetWichDetails(response.data.data);


    }

    const [Loading, setLoading] = useState(false);
    const [CurentProduct, setCurentProduct] = useState(0);
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




    const handleRefresh = () => {
        window.location.reload(); // يقوم بتحديث الصفحة بالكامل
    };



    const handleRemove = async () => {

        // ❌ حذف المنتج من المفضلة في localStorage
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const updated = favorites.filter(id => id !== product.id);
        localStorage.setItem('favorites', JSON.stringify(updated));
    };
  



    const [Counter, SetCounter] = useState(0);
    useEffect(() => {
        getWichIetm();
    }, [])

    return <>

        <div className="w-[95%] mx-auto p-6 bg-gray-50 rounded-lg mt-48">

            <h2 className="text-4xl font-bold mb-4 text-start">My Wish List</h2>
            {WichDetails?.map((product) => (
                <div key={product.id} className="flex items-center bg-white p-4 rounded-lg shadow-sm mb-4 justify-between">

                    <div className="ml-4 flex">
                        <img
                            src={product.imageCover}
                            alt={product.name}
                            className="w-48 h-48 object-cover rounded-md" />
                        <div className='text-start'>
                            <h3 className="text-2xl font-semibold">{product.slug}</h3>
                            <p className="text-green-600 text-2xl font-medium pt-3">{product.price} EGP</p>
                            <button
                                onClick={async () => {
                                    await deleteremovrWich(product.id);
                                    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
                                    const index = favorites.indexOf(product.id);
                                    if (index !== -1) {
                                        favorites.splice(index, 1);
                                        localStorage.setItem('favorites', JSON.stringify(favorites));
                                    }
                                    handleRefresh();
                                }}
                                className="text-red-500 bg-transparent mt-2 flex items-center"
                            >
                                <i className="fa-solid fa-trash"></i>
                                Remove
                            </button>

                        </div>

                    </div>
                    <button onClick={() => { addProduct(product.id).then(() => { deleteremovrWich(product.id).then(() => { handleRefresh(); handleRemove() }) }); }} className="border border-green-500 text-green-500 px-4 py-2 rounded-lg  bg-white text-3xl transition">
                        {CurentProduct === product.id && Loading ? <i className='fas fa-spinner fs-span'></i> : 'add to card'}
                    </button>
                </div>
            ))}
        </div>
    </>
}
