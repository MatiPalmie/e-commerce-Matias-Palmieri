import { useContext } from "react"
import { CartContext } from "./CartContext"

const Cart = () => {
    const cart = useContext(CartContext);
    return(
        <>
        <h1>Carrito</h1>
        {cart.cartList.map(item =>
            < div key={item.id}>  
                <h2>{item.name}</h2>
                <img src={item.pictureUrl} alt={cart.name} className="cartImg"/>
                <p>$ {item.price}</p>
                <p>Cantidad: {item.count}</p>
                <button onClick={() =>cart.removeItem(item.id)}>Eliminar</button>
            </div>
            )
        }
        {cart.cartList.length >= 1  ? <button onClick={cart.clear}>Vaciar Carrito</button>:<></>}       
        </>
    )
}
export default Cart