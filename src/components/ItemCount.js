import { useState } from "react";
const ItemCount = ({stock,initial,onAdd,}) => {
    const [count,setCount] = useState(initial);

    const add = () => {
        if(count >= stock){
        }else{
            setCount (count + 1);
        };
    }
    const remove = () => {
        if(count <= 1){
        }else{
            setCount(count - 1);
        }
    }
    return(
    <div className="counter">
            <div className="itemCount">
                <button className="btnCounter" onClick={remove}>-</button>
                <p>{count}</p>
                <button className="btnCounter" onClick={add}>+</button>
            </div>
        <p>Stock {stock} Unidades</p>
        <button className="btn" onClick={() =>onAdd(count)}>Agregar al Carrito</button>
    </div>);
}
export default ItemCount;
