import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../firebaseConfig"

const ItemListContainer = () => {

    const[item,setItem]=useState([]);
    const {idCategory} = useParams();

    console.log(idCategory);

    useEffect(() => {
        if(idCategory===undefined){
            const firestoreFetch = async () => {
                const querySnapshot = await getDocs(collection(db, "productList"));
                return querySnapshot.docs.map ( document => ({
                    id: document.id,
                    ...document.data()
            }))
            };
            firestoreFetch()
                .then(result => setItem(result))
                .catch(error => console.log(error));
        }else{
            const firestoreFetch = async () => {
                const q = query(collection(db, "productList"), where("idCategory", "==" , parseInt(idCategory)));
                const querySnapshot = await getDocs(q);
                return querySnapshot.docs.map ( document => ({
                    id: document.id,
                    ...document.data()
            }))
            }
            firestoreFetch()
                .then((result)=>setItem(result))
                .catch((error)=>console.log(error))
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