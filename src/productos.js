
const productos = [
    {
        "nombre": "producto 1",
        "precio": 123,
        "id": 1
    },
    {
        "nombre": "producto 2",
        "precio": 456,
        "id": 2
    },
    {
        "nombre": "producto 3",
        "precio": 789,
        "id": 3
    }
]

export const getProductos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000);
    })
}