import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
const NavBar = () => {
    return (
        <div className="bar">
            <Link to="/">
                <img src={logo} alt="SyS PC" className="logo"/>
            </Link>
            <ul className="categList">
                <Link to="/category/1">
                <li className="categ">
                    <button className="btn">Combos Pc</button>
                </li>
                </Link>
                <Link to="/category/2">
                    <li className="categ">
                        <button className="btn">Monitores</button>
                    </li>
                </Link>
                <Link to="/category/3">
                    <li className="categ">
                        <button className="btn">Hardware</button>
                    </li>
                </Link>
                <Link to="/category/4">
                    <li className="categ">
                        <button className="btn">Periféricos</button>
                    </li>
                </Link>
            </ul>
                <Link to="/Cart">
                    <CartWidget />
                </Link>
        </div>
    );
}

export default NavBar;