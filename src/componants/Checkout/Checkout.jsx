import React, { useContext, useEffect, useState } from 'react'
import Style from './Checkout.module.css'
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup'
import { CartContext } from '../../Context/CartContext';




export default function Checkout() {
    let { checkout } = useContext(CartContext);
    let formik = useFormik({
        initialValues: {
            details: '',
            phone: '',
            city: '',
        },
        onSubmit:()=> handleCheckOut('67ddd9b298d366db1a0d29e9', 'http://localhost:5173')

    })
    const [islooding, setIslooding] = useState(false);
    async function handleCheckOut(cartid, url) {
        let {data} = await checkout(cartid, url, formik.values);
        if (data.status==='success') {
            window.location.href=data.session.url;
        }
        


    }



   
    const [Counter, SetCounter] = useState(0);
    useEffect(() => { }, [])

    return <>
        <div className='py-6 mx-auto max-w-xl text-start'>





            <h2 className='font-bold text-3xl mb-6 text-green-500'>Checkout Now</h2>
            <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto ms-0">


                <div className="relative z-0 w-full mb-5 group">
                    <input id="details" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.details} type="text" name="details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                    <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">details address</label>
                </div>





                <div className="relative z-0 w-full mb-5 group">
                    <input id="phone" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} type="tel" name="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone address</label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input id="city" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.city} type="text" name="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                    <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">city address</label>
                </div>




                <div className='flex items-center'> <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    {islooding ? <i className='fas fa-spinner fa-spin'></i> : 'Pay Now'}

                </button>
                </div>


            </form>

        </div>

    </>
}
