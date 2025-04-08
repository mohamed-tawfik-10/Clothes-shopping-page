import React, { useContext, useEffect } from 'react'
import Style from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.avif'
import { CounterContext } from '../../Context/CounterContext';
import { UserContext } from '../../Context/UserContext';
import { CartContext } from '../../Context/CartContext';



export default function Navbar() {
    useEffect(() => { }, [])
    // let { Counter, UserName } = useContext(CounterContext);
    let { userLogin } = useContext(UserContext);
    let { cart } = useContext(CartContext);
    console.log(cart);


    return <>
        <nav className='bg-gray-100 text-center static lg:fixed top-0 left-0 right-0 mx-auto  z-10'>
            <div className='container mx-auto justify-between flex flex-col lg:flex-row py-1  items-center'>
                <div className="flex items-center space-x-2  p-2 rounded-lg  text-2xl">
                    <i class="fa-solid fa-cart-shopping fa-xl text-gray-700 text-green-600"></i>
                    <span className="text-4xl font-semibold text-gray-900">fresh cart</span>
                </div>
                <div className='flex flex-col lg:flex-row items-center'>

                    <ul className='flex flex-col lg:flex-row items-center'>
                        {userLogin !== null ? <>
                            <li className='py-2'><NavLink className='mx-2  text-xl text-slate-900' to='' >Home</NavLink></li>

                            {/* <li className='py-2'><NavLink className='mx-2  text-lg text-slate-900 font-light' to='Cart' >Cart</NavLink></li> */}
                            <li className='py-2'><NavLink className='mx-2  text-lg text-slate-900 ' to='Wichlist' >Wich list</NavLink></li>
                            <li className='py-2'><NavLink className='mx-2  text-lg text-slate-900 ' to='Products' >Products</NavLink></li>
                            <li className='py-2'><NavLink className='mx-2  text-lg text-slate-900 ' to='Categoris' >Categoris</NavLink></li>

                            <li className='py-2'><NavLink className='mx-2  text-lg text-slate-900 ' to='Brands' >Brands</NavLink></li>

                        </> : null}

                    </ul>


                </div>


                <div>

                    <ul className='flex flex-col lg:flex-row items-center '>
                        {userLogin === null ? <>
                            <li className='py-2' ><NavLink className='mx-2 py-2 text-lg text-slate-900 font-light' to='Login' >Login</NavLink></li>
                            <li className='py-2' ><NavLink className='mx-2 py-2 text-lg text-slate-900 font-light' to='Register' >Register</NavLink></li>
                        </> : <>

                            <li className='py-2' ><NavLink to={'/cart'} className='mx-2 relative py-2 text-lg text-slate-900 font-light'  >
                                <i class="fa-solid fa-cart-shopping fa-xl text-gray-700"></i>
                                <span className='bg-green-600 text-white p-1 absolute top-0 right-[-5px] text-sm rounded-full'>{cart?.numOfCartItems}</span>
                            </NavLink></li>

                            <li className='py-2' ><NavLink to={'/Logout'} className='mx-2 py-2 text-lg text-slate-900 font-light'  >Logout</NavLink></li>


                        </>}




                    </ul>

                </div>


            </div>
        </nav>







        {/* <div className="container py-2 fixed top-0 left-0 right-0 mx-auto bg-slate-400 z-10">
        <ul className="flex flex-wrap justify-around items-center ">
            <li><NavLink className="text-slate-900 font-normal text-lg no-underline" to="">Home</NavLink></li>
            <li><NavLink className="text-slate-900 font-normal text-lg no-underline" to="Perent">Perent</NavLink></li>
            <li><NavLink className="text-slate-900 font-normal text-lg no-underline" to="About">About</NavLink></li>
            <li><NavLink className="text-slate-900 font-normal text-lg no-underline" to="Contact">Contact</NavLink></li>
            <li><NavLink className="text-slate-900 font-normal text-lg no-underline" to="Gallery">Gallery</NavLink></li>
        </ul>
    </div>  */}
    </>
}
