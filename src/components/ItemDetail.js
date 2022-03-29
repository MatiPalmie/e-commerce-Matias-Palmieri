import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom"

const ItemDetail = ({item}) => {   

    const [btn,setBtn] = useState(true);
    const cart = useContext (CartContext);

    const onAdd=(count)=>{
            setBtn(false)
            cart.addItem(item,count);
    }

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
                    <Link to ="/cart">
                        <button className="btn">Ir al Carrito</button>
                    </Link>
                </>
}
            </div>
        </div>
    )
}
export default ItemDetail;