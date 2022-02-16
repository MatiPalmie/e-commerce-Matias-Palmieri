import {getList,products} from "../productList";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = ()=>{

    const[item,setItem]=useState({});

    useEffect(() => {
        getList(products[3])
        .then((resolve)=>setItem(resolve))
        .catch((e)=>console.log(e));
    },[]);
    console.log(item);
    return(
        <>
        <ItemDetail item={item}/>
        </>
    )
}

export default ItemDetailContainer