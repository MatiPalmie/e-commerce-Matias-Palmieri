import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import NavBar from "./NavBar"
const Home = () => {
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Home