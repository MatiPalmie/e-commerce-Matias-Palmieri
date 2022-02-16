export const products = [{
        id: 0,
        name: "Combo PC 1" ,
        pictureUrl: "https://m.media-amazon.com/images/I/711V5-FgnYL._AC_SL1500_.jpg",
        description: "Intel I3 + GTX 1660 TI" ,
        price: 70000,
    },{
        id: 1,
        name: "Combo PC 2",
        pictureUrl: "https://m.media-amazon.com/images/I/51B4j57rfoL._AC_SL1032_.jpg",
        description: "Intel I7 + RTX 2050",
        price: 150000,
    },{
        id: 2,
        name: "Combo PC 3",
        pictureUrl: "https://m.media-amazon.com/images/I/71zpjt3wJTL._AC_SL1500_.jpg",
        description: "Ryzen 3 + RX 580",
        price: 65000,
    },{
        id: 3,
        name: "Combo PC 4",
        pictureUrl: "https://m.media-amazon.com/images/I/71GM05bwraL._AC_SL1500_.jpg",
        description: "Intel I7 + RTX 3060",
        price: 170000,
    },
];

export const getList = ( (data) => {
    return new Promise((resolve) => {
        setTimeout( () => {
                resolve(data);
        }, 2000)
    })
})

