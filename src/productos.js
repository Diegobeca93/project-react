
const productos = [
    {
        "nombre": "Camisa Tascani Ml Ados Azul Hombre",
        "precio": 9500,
        "id": 1,
        "stock": 10,
        "categoria": "Camisas",
        "talles": ["S","M","L","XL"],
        "src": "https://http2.mlstatic.com/D_NQ_NP_940209-MLA44962245687_022021-O.webp",
        "detail": "Camisa corte slim fit con cuello chico recto. Esta confeccionada en poplin con spandex con terminación satinada. Tiene en pie de cuello cinta rosa y botones azules con hilo a tono.Identificación de marca con chapita cosida en centro de canesu de espalda."
    },
    {
        "nombre": "Camisa Ashel Hombre",
        "precio": 11479,
        "id": 2,
        "stock": 10,
        "categoria": "Camisas",
        "talles": ["S","M","L","XL"],
        "src": "https://http2.mlstatic.com/D_NQ_NP_628511-MLA43836633720_102020-O.webp",
        "detail": "Camisa de calce Slim Fit confeccionada en fibrana estampada; esta tela se caracteriza por ser fresca y sentirse relajada. Botones azules y cinta a tono en pie de cuello. Identificación de la marca con chapita en canesú de espalda. Composición: 100% Rayón"
    },
    {
        "nombre": "Camisa Mc Oztin Hombre",
        "precio": 11479,
        "id": 3,
        "stock": 10,
        "categoria": "Camisas",
        "talles": ["S","M","L","XL"],
        "src": "https://http2.mlstatic.com/D_NQ_NP_722878-MLA47544181467_092021-O.webp",
        "detail": "Camisa de calce Slim Fit confeccionada en fibrana estampada; esta tela se caracteriza por ser fresca y sentirse relajada."
    },
    
    {
        "nombre": "Calzado Fely Hombre",
        "precio": 17500,
        "id": 4,
        "stock": 6,
        "categoria": "Calzados",
        "talles": [40,41,42,43],
        "src": "https://http2.mlstatic.com/D_NQ_NP_797921-MLA45131547728_032021-O.webp",
        "detail": "Zapatilla en cuero blanco con logos estampados en diferentes tamaños en color negro. Taloncito alto en cuero negro y forreria en cuero ocre."
    },
    {
        "nombre": "Calzado Folib Blanco Hombre",
        "precio": 17500,
        "id": 5,
        "stock": 5,
        "categoria": "Calzados",
        "talles": [40,41,42,43],
        "src": "https://http2.mlstatic.com/D_NQ_NP_709989-MLA44961730522_022021-O.webp",
        "detail": "Calzado Falk Blanco Lavado: Lavado a mano a una temperatura máxima de 30° Secado: No se puede secar en la secadora Plancha: No se puede planchar Lavandina: No Se puede usar Lavandina"
    },
    {
        "nombre": "Calzado Falk Blanco Hombre",
        "precio": 17500,
        "id": 6,
        "stock": 10,
        "categoria": "Calzados",
        "talles": [40,41,42,43],
        "src": "https://http2.mlstatic.com/D_NQ_NP_679233-MLA47497371239_092021-O.webp",
        "detail": "Zapatilla clasica en cuero vacuno con capellada externa combinada con charol Forreria en cuero.Identificacion de marca con grifa de goma circular y logo de metal"
    },
    {
        "nombre": "Remera Mc Batias Melange Hombre",
        "precio": 3480,
        "id": 7,
        "stock": 15,
        "categoria": "Remeras",
        "talles": ["S","M","L","XL"],
        "src": "https://http2.mlstatic.com/D_NQ_NP_765785-MLA47513413698_092021-O.webp",
        "detail": "Remera lisa, cuello V en gris melange. Domo de resina en manga Jersey 40/1."
    },
    {
        "nombre": "Remera Mc Blirke Noche Hombre",
        "precio": 5550,
        "id": 8,
        "stock": 15,
        "categoria": "Remeras",
        "talles": ["S","M","L","XL"],
        "src": "https://http2.mlstatic.com/D_NQ_NP_642080-MLA47543947451_092021-O.webp",
        "detail": "Remera flame cuello redondo. Estampa en el frente grande combinada, dibujo con institucional. Ruedo curvo. Logo de marca en espalda."
    },
    {
        "nombre": "Remera Bantiago Hombre",
        "precio": 5921, 
        "id": 9,
        "stock": 15,
        "categoria": "Remeras",
        "talles": ["S","M","L","XL"],
        "src": "https://http2.mlstatic.com/D_NQ_NP_775668-MLA46040783986_052021-O.webp",
        "detail": "Remera lisa, cuello V en gris melange. Domo de resina en manga Jersey 40/1."
    }
    
]

export const getProductosById = (idReq) => {

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

export const getProductos = () => {

    return new Promise ((resolve, reject)=>{
        setTimeout(() =>{     
           resolve(productos);
        },500);
    })
}

export const getProductosByCategoty = (category) => {

    return new Promise ((resolve, reject) => {
        setTimeout(() => {

            const itemsCategoria = productos.filter((element) => {
                // console.log('<>', element.categoria, category)
                return element.categoria === category;
            }); 

            itemsCategoria  
            ? resolve(itemsCategoria) 
            : reject (new Error ("No encontrado"));
        }, 500);    
    })
}   


