const Item = ({name, pictureUrl, description, price}) => {
        return (
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
        )
}

export default Item
