import { Link } from "react-router-dom";

const Item = ({id,name, pictureUrl, description, price}) => {
        return (
            <Link to={`/item/${id}`}>
            <article className="productCard">
                  <h3>{name}</h3>
                <figure>
                    <img src={pictureUrl} alt={name} className="productImg"/>
                </figure>
                <ul className="productList">
                    <li>{description}</li>
                    <li>${price}</li>
                </ul>
            </article>
            </Link>
        )
}

export default Item;
