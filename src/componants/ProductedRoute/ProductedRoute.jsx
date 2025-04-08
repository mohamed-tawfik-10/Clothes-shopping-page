import Style from './ProductedRoute.module.css'
import { Navigate } from 'react-router-dom'

export default function ProductedRoute(props) {
    console.log(props);

    if (localStorage.getItem('userToken') !== null) {
        return props.children
    }
    else {
        return <Navigate to={'/Login'} />
    }

}
