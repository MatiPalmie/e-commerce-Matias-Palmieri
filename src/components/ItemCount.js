import { useState } from "react";

const ItemCount = ({stock,initial,item}) => {

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
    const addCart = () => {
        alert(`Se agregaron ${count} ${item} al carrito`);
    }
    return(
    <div className="counter">
        <h3>{item}</h3>
            <div className="itemCount">
                <button className="btnCounter" onClick={remove}>-</button>
                <p>{count}</p>
                <button className="btnCounter" onClick={add}>+</button>
            </div>
        <button className="btnAddCart" onClick={addCart}>Agregar al Carrito</button>
    </div>);
}

export default ItemCount;