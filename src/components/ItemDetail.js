const ItemDetail = ({item}) => {
    return(
        <div className="itemDetail">
            <h3 className="nameDetail" >{item.name}</h3>
            <img  src={item.pictureUrl} alt={item.name} className="imgDetail" />
            <div className="descriptionDetail">
                <p>{item.fullDescription}</p>
                <p>Precio $ {item.price}</p>
            </div>
        </div>
    )
}
export default ItemDetail;