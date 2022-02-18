export const products = [{
        id: 0,
        name: "Combo PC 1" ,
        pictureUrl: "https://m.media-amazon.com/images/I/711V5-FgnYL._AC_SL1500_.jpg",
        description: "Intel I3 + GTX 1660 TI" ,
        price: 70000,
        idCategory:1,

    },{
        id: 1,
        name: "Combo PC 2",
        pictureUrl: "https://m.media-amazon.com/images/I/51B4j57rfoL._AC_SL1032_.jpg",
        description: "Intel I7 + RTX 2050",
        price: 150000,
        idCategory:1,

    },{
        id: 2,
        name: "Combo PC 3",
        pictureUrl: "https://m.media-amazon.com/images/I/71zpjt3wJTL._AC_SL1500_.jpg",
        description: "Ryzen 3 + RX 580",
        price: 65000,
        idCategory:1,

    },{
        id: 3,
        name: "Combo PC 4",
        pictureUrl: "https://m.media-amazon.com/images/I/71zpjt3wJTL._AC_SL1500_.jpg",
        description: "Intel I7 + RTX 3060TI",
        fullDescription:"Es combo cuenta con un poderosisimo procesador Intel I7 9700k, que ofrece lo último en rendimiento, con Turbo para gestionar incluso las tareas más pesadas, los juegos extremos y el multitarea intensivo. ¡Podrá jugar a los últimos videojuegos, ver películas, crear y editar contenido de vídeo, compartir fotos y más! La GeForce RTX™ 3060 Ti y la RTX 3060 te permiten disfrutar de los juegos más recientes con la potencia de Ampere, la segunda generación de la arquitectura RTX de NVIDIA. Logra un rendimiento increíble con los Núcleos Ray Tracing y los Núcleos Tensor mejorados, los nuevos multiprocesadores de streaming y la memoria G6 de alta velocidad. ",
        price: 170000,
        idCategory:1,
    },
    {
        id: 4,
        name: "LG 27GL83A-B Ultragear",
        pictureUrl: "https://m.media-amazon.com/images/I/81dAe2wXIqL._AC_SL1500_.jpg",
        description: "QHD IPS 1ms NVIDIA G-SYNC-27 pulgadas",
        fullDescription:"Pantalla IPS QHD de 27 pulgadas (2560 x 1440),Tiempo de respuesta IPS de 1 ms y tasa de actualización de 144 Hz,Compatible con NVIDIA G-SYNC. Tratamiento superficial Haze 25%, 3H",
        price: 45000 ,
        idCategory:2,

    },
    {
        id: 5,
        name: "HP Monitor FHD M27ha",
        pictureUrl: "https://m.media-amazon.com/images/I/81BYS2AnsXL._AC_SL1500_.jpg",
        description: "Monitor Full HD (1920 x 1080p) – Panel IPS y audio integrado – Monitor de 27 pulgadas",
        fullDescription:"Pantalla optimizada: obtén imágenes de alta calidad en una pantalla Full HD con un panel IPS y ángulos de visión ultra anchos de 27 pulgadas (resolución de 1920 x 1080) ",
        price: 34500,
        idCategory:2,

    },
    {
        id: 6,
        name: "Logitech G502 HERO High Performance Gaming Mouse",
        pictureUrl: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg",
        description: "Ratón de alto rendimiento para jugar videojuegos",
        fullDescription:"Botones personalizables y memoria integrada: 11 comandos personalizados asignados a los botones y guarda hasta 5 perfiles listos para jugar directamente al ratón. Sensor de 16 K: el sensor de alto rendimiento más preciso de Logitech, con hasta 16.000 DPI para la máxima velocidad, precisión y capacidad de respuesta en todo el rango de DPI. Iluminación RGB programable y tecnología LIGHTSYNC: personalice la iluminación de casi 16,8 millones de colores para que coincida con los colores de su equipo, dedique sus propios colores o sincronice los de otros equipos Logitech G.",
        price: 12000 ,
        idCategory:4,

    },
    {
        id: 7,
        name: "Logitech G213 Prodigy",
        pictureUrl: "https://m.media-amazon.com/images/I/61Nt8geXzWL._AC_SL1500_.jpg",
        description: "LIGHTSYNC RGB retroiluminado-teclas resistentes a derrames-teclas personalizables-teclas multimedios dedicadas",
        fullDescription:"Iluminación de espectro de colores brillantes:personaliza cinco zonas de iluminación individuales de un espectro de más de 16. 8 millones de colores. Cómodo y duradero: el G213 Prodigy es un teclado de tamaño completo diseñado para juegos y productividad.",
        price:21000 ,
        idCategory:4,

    },
    {
        id: 3,
        name: "EVGA GeForce RTX 3080 Ti ",
        pictureUrl: "https://m.media-amazon.com/images/I/81B2tCDJWgS._AC_SL1500_.jpg",
        description: "12GB GDDR6X, iCX3 Technology, ARGB LED, placa trasera de metal",
        fullDescription:"Real Boost Clock:1800MHz; Detalle de la memoria: 12288MB GDDR6X.Trazado de rayos en tiempo real en juegos para gráficos de vanguardia hiperrealistas.Los ventiladores triples + 9 sensores térmicos iCX3 ofrecen un mayor rendimiento de refrigeración y un ruido acústico mucho más silencioso.",
        price: 80000 ,
        idCategory:3,

    }
];

export const getList = ( (data) => {
    return new Promise((resolve) => {
        setTimeout( () => {
                resolve(data);
        }, 2000)
    })
})

