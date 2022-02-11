import Item from "./Item";



const ItemList = (list) => {
    list.map((item , index) => (
    <Item 
        key = {index}
        name={item.name}
        pictureUrl={item.pictureUrl}
        description={item.description}
        price={item.price}
    />
    ))
}

export default ItemList