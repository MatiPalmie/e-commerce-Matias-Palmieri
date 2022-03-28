import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children})=>{
    const [cartList, setCartList] = useState([]);

    const addItem = (item,count) =>{
        let i = cartList.find(i => i.id === item.id)
        if( i === undefined){
        setCartList([
            ...cartList,
            {
            key:item.key,
            id:item.id,
            name:item.name,
            pictureUrl:item.pictureUrl,
            price:item.price,
            count: count,
        }]);
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
    const itemsPrice = (price,count) =>{
        return price * count
    }
    const totalPrice = () =>{
        let itemTotalPrice = cartList.map(item => itemsPrice(item.price,item.count))
        console.log(itemTotalPrice)
        return(
        itemTotalPrice.reduce((previousValue, currentValue) => previousValue + currentValue)
        )
    }
    return (
        <CartContext.Provider value ={{cartList,addItem,removeItem,clear,itemsPrice,totalPrice}}>
            {children}
        </CartContext.Provider>
    )


}

export default CartContextProvider;