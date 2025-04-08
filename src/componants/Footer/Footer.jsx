import React, { useEffect, useState } from 'react'
import Style from './Footer.module.css'
export default function Footer() {
    const [Counter, SetCounter] = useState(0);
    useEffect(() => {}, [])
    
    return <>
        <h2>Footer</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem alias reiciendis accusamus harum asperiores fugit cum sapiente quibusdam, modi beatae vero ipsa sunt autem minus mollitia ea placeat architecto natus!</p>
    </>
}
