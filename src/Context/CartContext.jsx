import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let CartContext = createContext();
let headers = "";
if (localStorage.getItem('userToken')) {
  headers = {
    token: localStorage.getItem('userToken')
  }

}
export default function CartContextProvider(props) {
  let [cart, setCart] = useState(null);
  function getLoggedUserCart() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers: headers
    }).then((response) => response)
      .catch((error) => error)
  }
  function ClearCart() {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers: headers
    }).then((response) => response)
      .catch((error) => error)
  }
  function deleteProductItem(productId) {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
      headers: headers
    }).then((response) => response)
      .catch((error) => error)
  }
  function addProductToCart(productId) {
    return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {
      productId: productId
    },
      {
        headers: headers
      }).then((response) => response)
      .catch((error) => error)
  }
  function updateCartIteme(productId, count) {
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
      count: count
    },
      {
        headers: headers
      }).then((response) => response)
      .catch((error) => error)
  }
  function checkout(cartId, url, formValue) {
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`, {
      shippingAddress: formValue,
    },
      {
        headers: headers
      }).then((response) => response)
      .catch((error) => error)
  }

  async function getcart() {
    let response = await getLoggedUserCart();
    setCart(response.data)
  }
  useEffect(() => {
    getcart();
  }, [])

  return <CartContext.Provider value={{ cart, setCart,ClearCart, getLoggedUserCart, addProductToCart, updateCartIteme, deleteProductItem, checkout }}>
    {props.children}
  </CartContext.Provider>
}