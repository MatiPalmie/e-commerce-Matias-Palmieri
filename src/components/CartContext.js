import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children})=>{
    const [cartList, setCartList] = useState([]);

    const addItem = (item,count) =>{
        let i = cartList.find(item => item.id === item.id)
        if( i === undefined){
        setCartList([
            ...cartList,
            {
            id:item.id,
            name:item.name,
            pictureUrl:item.pictureUrl,
            price:item.price,
            count: count,
        }
        ]);
        }else{
            i.count += count;
        }
    }
    const removeItem = (itemId) => {
        setCartList(cartList.filter (item => item.id !== itemId))
    }
    const clear = () =>{
        setCartList([])
    }
    return (
        <CartContext.Provider value ={{cartList,addItem,removeItem,clear,}}>
            {children}
        </CartContext.Provider>
    )


}

export default CartContextProvider;