import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom"

const ItemDetail = ({item}) => {   

    const [cartCount,setCartCount] = useState(0)
    const [btn,setBtn] = useState(true);
    const cart = useContext (CartContext);

    const onAdd=(count)=>{
            setCartCount(count)
            setBtn(false)
            cart.addItem(item,count);
    }

    console.log(cart.cartList)

    return(
        <div className="itemDetail">
            <h3 className="nameDetail" >{item.name}</h3>
            <img  src={item.pictureUrl} alt={item.name} className="imgDetail" />
            <div className="descriptionDetail">
                <p>{item.fullDescription}</p>
                <p>Precio $ {item.price}</p>
                {btn ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                :
                <>
                    <Link to ="/Cart">
                        <button>Ir al Carrito</button>
                    </Link>
                </>
}
            </div>
        </div>
    )
}
export default ItemDetail;