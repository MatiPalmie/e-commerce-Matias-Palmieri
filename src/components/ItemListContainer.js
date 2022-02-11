import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
const products = [
    {
        id: 0,
        name: "Combo PC 1" ,
        pictureUrl: ".assets/pc1.png",
        description: "Intel I3 + GTX 1660 TI" ,
        price: 70000,
    },
    {
        id: 1,
        name: "Combo PC 2",
        pictureUrl: ".assets/pc2.png",
        description: "Intel I7 + RTX 2050",
        price: 150000,
    },
    {
        id: 2,
        name: "Combo PC 3",
        pictureUrl: ".assets/pc3.png",
        description: "Ryzen 3 + RX 580",
        price: 65000,
    },
    {
        id: 3,
        name: "Combo PC 4",
        pictureUrl: ".assets/pc4.png",
        description: "Intel I7 + RTX 3060",
        price: 170000 ,
    },
];

const customFetch = ( (data) => {
return new Promise((resolve,reject ) => {
    setTimeout( () => {
            resolve(data);
    }, 2000)
})
})

const ejecucion = async () => {
    try{
        const data = await customFetch(products);
        console.log(data)
    }catch (error){
        console.log(error);
    } 
}

const ItemListContainer = ({items}) => {
    return(
        <>
        <ul className="product">
            <li>{items}</li>
        </ul>
        <ItemList/>
        <ItemCount stock={5} initial={1} item='Mouse' />
        </>
    )
}

export default ItemListContainer;