import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React, { Suspense } from 'react';
import './App.css'
import Layout from './componants/Layout/Layout'
import Home from './componants/Home/Home'
import Categoris from './componants/Categoris/Categoris'
import Brands from './componants/Brands/Brands'
import Cart from './componants/Cart/Cart'
import Login from './componants/Login/Login'
import Register from './componants/Register/Register'
import Products from './componants/Products/Products'
import Notfound from './componants/Notfound/Notfound'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CounterContextProvider from './Context/CounterContext'
import UserContextProvider from './Context/UserContext'
import ProductedRoute from './componants/ProductedRoute/ProductedRoute'
import ProductDetails from './componants/ProductDetails/ProductDetails'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CartContextProvider from './Context/CartContext'
import { Toaster } from 'react-hot-toast'
import Checkout from './componants/Checkout/Checkout'
import Orders from './componants/orders/orders'
import Wichlist from './componants/Wichlist/Wichlist';
import WichContextProvider from './Context/WichContext';
import Logout from './componants/Logout/Logout';



let query = new QueryClient();


let x = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <ProductedRoute><Home /></ProductedRoute> },
      { path: 'Wichlist', element: <ProductedRoute><Wichlist /></ProductedRoute> },
      { path: 'Categoris', element: <ProductedRoute><Categoris /></ProductedRoute> },
      { path: 'Brands', element: <ProductedRoute> <Brands /></ProductedRoute> },
      { path: 'Cart', element: <ProductedRoute> <Cart /></ProductedRoute> },
      { path: 'Products', element: <ProductedRoute> <Products /></ProductedRoute> },
      { path: 'ProductDetails/:id/:category', element: <ProductedRoute> <ProductDetails /></ProductedRoute> },
      { path: 'checkout', element: <ProductedRoute> <Checkout /></ProductedRoute> },
      { path: '/allorders', element: <ProductedRoute> <Orders /></ProductedRoute> },
      { path: '/Logout', element: <ProductedRoute> <Logout /></ProductedRoute> },
      { path: 'Login', element: <Login /> },
      { path: 'Register', element: <Register /> },
      // { path: 'Products', element: <Products />,children:[
      // {index:true, element: <Web /> },
      // { path: 'Mobile', element: <Mobile /> },
      // { path: 'Ux', element: <Ux /> },
      // ] },
      { path: '*', element: <Notfound /> },]
  }
])
function App() {
  const [Count, SetCount] = useState(0)

  return (
    <>
      <QueryClientProvider client={query}>
        <WichContextProvider>
          <UserContextProvider>
            <CounterContextProvider>

              <CartContextProvider>

                <RouterProvider router={x}></RouterProvider>
                <ReactQueryDevtools />
                <Toaster />

              </CartContextProvider>

            </CounterContextProvider>


          </UserContextProvider>
        </WichContextProvider>
      </QueryClientProvider>



    </>
  )
}

export default App
