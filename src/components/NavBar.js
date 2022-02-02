const NavBar = () => {
    return (
        <div className="bar">
        <h1 className="title">SyS Pc Informática</h1>
        <ul className="categList">
            <li className="categ">
                <button className="btn">Combos Pc</button>
            </li>
            <li className="categ">
                <button className="btn">Monitores</button>
            </li>
            <li className="categ">
                <button className="btn">Hardware</button>
            </li>
            <li className="categ">
                <button className="btn">Periféricos</button>
            </li>
        </ul>
        </div>
    );
}

export default NavBar;