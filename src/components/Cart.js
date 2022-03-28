import { collection, serverTimestamp,doc, setDoc, updateDoc, increment} from "firebase/firestore";
import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext"
import db from "../firebaseConfig"

const Cart = () => {
    const cart = useContext(CartContext);

    const createOrder = () =>{
        let order = {
            buyer:{
                email:"jose@hotmail.com",
                name:"Jose",
                phone:"154655486",
            },
            date: serverTimestamp(),
            items:cart.cartList.map((it) => {
                return {id: it.id, price:it.price,title: it.name,qty:it.count}
            }),
            total:cart.totalPrice(),
        };
        console.log(order)

        const createOrderInFirestone = async () => {
            const newOrderRef = doc(collection(db, "orders"))
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        createOrderInFirestone()
        .then(result => {
            alert ('Tu orden fue creada:' + result.id)
            cart.cartList.map (async (item) =>{
                const itemRef = doc(db, 'productList', item.id);
                await updateDoc(itemRef, {
                    stock: increment(-item.count)
                })
            })
            cart.clear()
        })
        .catch(error => console.log(error));

    }
    return(
        <div className="cartContainer">
        <h1 className="titleCart">Carrito</h1>

        {cart.cartList.length >= 1  ? <button className="clearBtn" onClick={cart.clear}>Vaciar Carrito</button>:<></>}       

        {cart.cartList.length > 0 ?
            <>
            <div className="itemContainer">
            {
                cart.cartList.map(item =>
                    < div className="cartItem" key={item.key}>
                        <img src={item.pictureUrl} alt={cart.name} className="cartImg"/>
                        <h2 className="productName">{item.name}</h2>
                        <div className="price">
                            <p>$ {item.price} Por Unidad</p>
                            <p>$ {cart.itemsPrice(item.price,item.count)}</p>
                        </div>
                        <p>Cantidad: {item.count}</p>
                        <button onClick={() =>cart.removeItem(item.id)}>Eliminar</button>
                    </div>
                )
            }
            </div>
            <div className="summaryCart">
                <h3>Resumen de Compra</h3>
                <h4>Total $ {cart.totalPrice()}</h4>
                <button onClick={createOrder}>Terminar su Compra</button>
            </div>
                
            </>
            :<div className="emptyCart">
                <p>Su carrito está vacio</p>
                <Link to={"/"}>
                    <button>Volver</button>
                </Link>
            </div>
        }
        </div>
    )
}
export default Cart