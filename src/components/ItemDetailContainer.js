import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../firebaseConfig"


const ItemDetailContainer = ()=>{

    const[product,setProduct]=useState({});
    const {id} = useParams()

    useEffect(() => {
        const customFirestoreFetch = async () => {
            const docRef = doc(db, "productList", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return {
                    id:id,
                    ...docSnap.data()
                }
            } else {
            console.log("No such document!");
            }
        }
        customFirestoreFetch()
            .then((data) => setProduct(data))
            .catch(error => console.log(error))
    },[id]);

    return(
        <>
            <ItemDetail item={product}/>
        </>
    )
}

export default ItemDetailContainer