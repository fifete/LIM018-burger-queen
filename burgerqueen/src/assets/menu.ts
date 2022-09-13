export interface Item {
    id: string;
    name: string;
    price: string;
    category: string;
    img : string;
    quantity: number;
}

export const ITEMS = [
    {
        "id": "CAD",
        "name" : "Café americano",
        "price" : "5",
        "img" : 'https://res.cloudinary.com/burgerqueen/image/upload/v1663033271/CAD_moohan.png',
        "category" : "desayuno",
        "quantity": 1
    },
    {
        "id": "CLD",
        "name" : "Café con leche",
        "price" : "7",
        "img" : 'https://res.cloudinary.com/burgerqueen/image/upload/v1663033271/CLD_ghhwzt.png',
        "category": "desayuno",
        "quantity": 1
    },
    {
        "id": "SJQD",
        "name" : "Sandwich de jamón y queso",
        "price" : "10",
        "img" : 'https://res.cloudinary.com/burgerqueen/image/upload/v1663033271/SJQD_caignc.png',
        "category": "desayuno",
        "quantity": 1
    },
    {
        "id": "JFD",
        "name" : "Jugo de frutas natural",
        "price" : "7",
        "img" : 'https://res.cloudinary.com/burgerqueen/image/upload/v1663033271/JFD_ce6nhm.png',
        "category": "desayuno",
        "quantity": 1
    },
    {
        "id": "HSH",
        "name" : "Hamburguesa simple",
        "price" : "10",
        "img" : 'https://res.cloudinary.com/burgerqueen/image/upload/v1663034019/HSH_mk9pkq.png',
        "category": "hamburguesas",
        "quantity": 1
    },
    {
        "id": "HDH",
        "name" : "Hamburguesa doble",
        "price" : "15",
        "img" : 'https://res.cloudinary.com/burgerqueen/image/upload/v1663034019/HDH_vpyrru.png',
        "category": "hamburguesas",
        "quantity": 1
    },
    {
        "id": "PPA",
        "name" : "Papas fritas",
        "price" : "5",
        "img" : 'https://res.cloudinary.com/burgerqueen/image/upload/v1663034019/PPA_djm6cu.png',
        "category": "acompañamientos",
        "quantity": 1
    },
    {
        "id": "HSA",
        "name" : "Aros de cebolla",
        "price" : "5",
        "img" : 'https://res.cloudinary.com/burgerqueen/image/upload/v1663034019/HSA_udyfqg.png',
        "category": "acompañamientos",
        "quantity": 1
    },
    {
        "id": "A5B",
        "name" : "Agua 500ml",
        "price" : "5",
        "img" : 'https://res.cloudinary.com/burgerqueen/image/upload/v1663034019/A5B_se2ipv.png',
        "category": "bebidas",
        "quantity": 1
    },
    {
        "id": "A75B",
        "name" : "Agua 750ml",
        "price" : "7",
        "img" : 'https://res.cloudinary.com/burgerqueen/image/upload/v1663034019/A5B_se2ipv.png',
        "category": "bebidas",
        "quantity": 1
    },
    {
        "id": "B5B",
        "name" : "Bebida/gaseosa 500ml",
        "price" : "7",
        "img" : 'https://res.cloudinary.com/burgerqueen/image/upload/v1663034019/B5B_dnztxv.png',
        "category": "bebidas",
        "quantity": 1
    },
    {
        "id": "B75B",
        "name" : "Bebida/gaseosa 750ml",
        "price" : "10",
        "img" : 'https://res.cloudinary.com/burgerqueen/image/upload/v1663034019/B5B_dnztxv.png',
        "category": "bebidas",
        "quantity": 1
    }
]
