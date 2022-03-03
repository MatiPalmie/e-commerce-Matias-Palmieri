import { useContext } from 'react';
import Cart from '../assets/cart.png';
import { CartContext } from './CartContext';

const CartWidget = () => {
    const cart = useContext(CartContext)


    return (
        <div className='cartWidget'>
        <img alt="Carrito" className='cart' src={Cart}></img>
        { cart.cartList.length > 0 &&
        <p>{cart.cartList.length}</p>
        }
        </div>
    )
}
export default CartWidget;