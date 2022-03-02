import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import NavBar from "./NavBar"
import Cart from "./Cart"
import CartContextProvider from "./CartContext"
const Home = () => {
    return(
        <CartContextProvider>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
        </CartContextProvider>
    )
}

export default Home