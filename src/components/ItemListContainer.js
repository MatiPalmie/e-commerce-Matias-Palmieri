import ItemCount from "./ItemCount";

const ItemListContainer = ({items}) => {
    return(
        <>
        <ul className="product">
            <li>{items}</li>
        </ul>
        <ItemCount stock={5} initial={1} item='Mouse' />
        </>
    )
}

export default ItemListContainer;