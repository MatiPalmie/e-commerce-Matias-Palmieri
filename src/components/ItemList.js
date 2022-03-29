import Item from "./Item";

const ItemList = ({list}) => {
    return(
        list.map((item) => (
            <Item 
                id={item.id}
                key ={item.key}
                name={item.name}
                pictureUrl={item.pictureUrl}
                description={item.description}
                price={item.price}
            />)
        ))
}

export default ItemList