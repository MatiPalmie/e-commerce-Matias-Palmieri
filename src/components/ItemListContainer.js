import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import {getList,products} from "../productList";
import { useEffect, useState } from "react";
import OnAdd from "./OnAdd";

const ItemListContainer = () => {

    const[item,setItem]=useState([]);

    useEffect(() => {
        getList(products)
        .then((resolve)=>setItem(resolve))
        .catch((e)=>console.log(e));
    },[]);
    
    return(
        <div className="itemList">
        <ItemList list={item}/>
        <ItemCount stock={5} initial={1} onAdd={OnAdd}/>
        </div>
    )
}

export default ItemListContainer;