import {getList,products} from "../productList";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = ()=>{

    const[product,setProduct]=useState({});
    const {id} = useParams();

    console.log(id);

    useEffect(() => {
        getList(products.filter(item => item.id === parseInt(id)))
        .then((resolve)=>setProduct(resolve))
        .catch((e)=>console.log(e));
    },[id]);

    console.log(product);
    return(
        <>
        <ItemDetail item={product}/>
        </>
    )
}

export default ItemDetailContainer