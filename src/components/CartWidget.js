import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../assets/cart.png';
import { CartContext } from './CartContext';
import { useState } from 'react';

const CartWidget = () => {
    const cart = useContext(CartContext)

    const [counter,setCounter] = useState([false,0]);

    return (
        <>
        <Link to={"/Cart"}>
            <img alt="Carrito" className='cart' src={Cart}></img>
        </Link>
        </>
    )
}
export default CartWidget;