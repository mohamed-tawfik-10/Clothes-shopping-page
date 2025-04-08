import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let WichContext = createContext();
let headers = "";
if (localStorage.getItem('userToken')) {
  headers = {
    token: localStorage.getItem('userToken')
  }

}
export default function WichContextProvider(props) {
  let [cart, setCart] = useState(null);
  function getLoggedUserWich() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
      headers: headers
    }).then((response) => response)
      .catch((error) => error)
  }
  function deleteProductItem(productId) {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
      headers: headers
    }).then((response) => response)
      .catch((error) => error)
  }
  function addProductToWich(productId) {
    return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
      productId: productId
    },
      {
        headers: headers
      }).then((response) => response)
      .catch((error) => error)
  }



 
  useEffect(() => {
  }, [])

  return <WichContext.Provider value={{getLoggedUserWich, addProductToWich,  deleteProductItem,  }}>
    {props.children}
  </WichContext.Provider>
}