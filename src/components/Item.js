const Item = (name,pictureUrl,description,price) => {
        return (
        <div>  
            <h3>{name}</h3>
            <ul>
                <li>{pictureUrl}</li>
                <li>{description}</li>
                <li>{price}</li>
            </ul>
        </div>
        );
}

export default Item
