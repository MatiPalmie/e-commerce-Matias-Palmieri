import ItemList from "./ItemList";
import {getList,products} from "../productList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const[item,setItem]=useState([]);
    const {idCategory} = useParams();

    console.log(idCategory);

    useEffect(() => {
        if(idCategory===undefined){
            getList(products)
                .then((resolve)=>setItem(resolve))
                .catch((e)=>console.log(e))
        }else{
            getList(products.filter(item => item.idCategory === parseInt(idCategory)))
                .then((resolve)=>setItem(resolve))
                .catch((e)=>console.log(e))
        }
    },[idCategory]);

    console.log(item)
    
    return(
        <div className="itemList">
            <ItemList list={item}/>
        </div>
    )
}

export default ItemListContainer;