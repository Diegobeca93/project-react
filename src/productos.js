
const productos = [
    {
        "nombre": "Camisa Tascani Ml Ados Azul Hombre",
        "precio": 9500,
        "id": 1,
        "stock": 10,
        "categoria": "Camisas",
        "talle": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "src": "https://http2.mlstatic.com/D_NQ_NP_940209-MLA44962245687_022021-O.webp",
        "detail": "Camisa de calce Slim Fit confeccionada en fibrana estampada; esta tela se caracteriza por ser fresca y sentirse relajada. Botones azules y cinta a tono en pie de cuello. Identificación de la marca con chapita en canesú de espalda. Composición: 100% Rayón"
    },
    {
        "nombre": "Calzado Fely Hombre",
        "precio": 17500,
        "id": 2,
        "stock": 6,
        "categoria": "Calzados",
        "src": "https://http2.mlstatic.com/D_NQ_NP_797921-MLA45131547728_032021-O.webp",
        "detail": "Zapatilla en cuero blanco con logos estampados en diferentes tamaños en color negro. Taloncito alto en cuero negro y forreria en cuero ocre."
    },
    {
        "nombre": "Remera Mc Batias Melange Hombre",
        "precio": 3480,
        "id": 3,
        "stock": 15,
        "categoria": "Remeras",
        "src": "https://http2.mlstatic.com/D_NQ_NP_765785-MLA47513413698_092021-O.webp",
        "detail": "Remera lisa, cuello V en gris melange. Domo de resina en manga Jersey 40/1."
    }
    
]

export const getProductos = (idReq) => {

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const itemRequested = productos.find((element) => {
                return element.id === idReq;
            }); 

            itemRequested 
            ? resolve(itemRequested) 
            : reject (new Error ("No encontrado"));
        }, 500);    
    })
}   