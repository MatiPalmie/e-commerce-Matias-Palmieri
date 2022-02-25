import { useState } from "react";
import ItemCount from "./ItemCount";
import OnAdd from "./OnAdd";

const ItemDetail = ({item}) => {   

    const [cartCount,setCartCount] = useState(0)
    const [btn,setBtn] = useState(true);

    const addCart=(count)=>{
            setCartCount(count)
            setBtn(false)            
    }

    console.log(cartCount)

    return(
        <div className="itemDetail">
            <h3 className="nameDetail" >{item.name}</h3>
            <img  src={item.pictureUrl} alt={item.name} className="imgDetail" />
            <div className="descriptionDetail">
                <p>{item.fullDescription}</p>
                <p>Precio $ {item.price}</p>
                {btn ? <ItemCount stock={item.stock} initial={1} onAdd={addCart}/> : <OnAdd/>}
            </div>
        </div>
    )
}
export default ItemDetail;