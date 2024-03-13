import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, addDoc, getDocs, getDoc} from 'firebase/firestore'




const firebaseConfig = {
  apiKey: "AIzaSyDYXLhEE78S77tGW7nCpJP9QXSeeg05jJo",
  authDomain: "projectoreact-96ac4.firebaseapp.com",
  projectId: "projectoreact-96ac4",
  storageBucket: "projectoreact-96ac4.appspot.com",
  messagingSenderId: "538251402912",
  appId: "1:538251402912:web:ed51373bde59d0e44673c5"
};

const app = initializeApp(firebaseConfig);

const bdd = getFirestore()

const prods = [
    {

        "title": "Monstera Deliciosa",
        "size": "Large",
        "price": 1500,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/projectoreact-96ac4.appspot.com/o/1.jpg?alt=media&token=3bb5e557-137a-4306-9f34-d05fb7eb02ba",
        "category": "interior"
    },
    {

        "title": "Croton",
        "size": "Small",
        "price": 2200,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/projectoreact-96ac4.appspot.com/o/2.jpg?alt=media&token=893ee70d-4779-4c7f-8c71-a2a176269784",
        "category": "interior"
    },
    {

        "title": "Calathea",
        "size": "Medium",
        "price": 2100,
        "stock": 9,
        "img": "https://firebasestorage.googleapis.com/v0/b/projectoreact-96ac4.appspot.com/o/3.jpg?alt=media&token=39f8032e-785b-4cd4-a781-0334d1f28355",
        "category": "interior"
    },
    {

        "title": "Anthurium Vitechii",
        "size": "Small",
        "price": 1800,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/projectoreact-96ac4.appspot.com/o/4.jpg?alt=media&token=1addd4b7-48e7-47a1-9f5e-a5475f0ce573",
        "category": "interior"
    },
    {

        "title": "Syngonium Albo",
        "size": "Large",
        "price": 2700,
        "stock": 24,
        "img": "https://firebasestorage.googleapis.com/v0/b/projectoreact-96ac4.appspot.com/o/5.jpg?alt=media&token=96cc6f4e-210b-4b7b-a8eb-f093398d26bc",
        "category": "interior"
    },
    {

        "title": "Aspargus Plumoso",
        "size": "Medium",
        "price": 1700,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/projectoreact-96ac4.appspot.com/o/6.jpg?alt=media&token=ffd332b7-2158-4257-a802-fdcd9635ab5d",
        "category": "interior"
    },
    {

        "title": "Orquídea Phalaenopsis",
        "size": "Small",
        "price": 1800,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/projectoreact-96ac4.appspot.com/o/7.jpg?alt=media&token=b75f6ce4-bace-4497-8491-498f6ca82bc9",
        "category": "interior"
    },
    {

        "title": "Ficus elástica",
        "size": "Large",
        "price": 2800,
        "stock": 12,
        "img": "https://firebasestorage.googleapis.com/v0/b/projectoreact-96ac4.appspot.com/o/8.jpg?alt=media&token=91eb9a17-a67f-44d4-b47b-3373a260372b",
        "category": "exterior"
    },
    {

        "title": "Fitonia",
        "size": "Small",
        "price": 1600,
        "stock": 17,
        "img": "https://firebasestorage.googleapis.com/v0/b/projectoreact-96ac4.appspot.com/o/9.jpg?alt=media&token=46288649-281c-4d97-9c75-8aaecd58c320",
        "category": "interior"
    },
    {

        "title": "Maranta Leuconeura",
        "size": "Large",
        "price": 2500,
        "stock": 20,
        "img": "https://firebasestorage.googleapis.com/v0/b/projectoreact-96ac4.appspot.com/o/10.jpg?alt=media&token=651ff862-ffd8-42eb-8ae8-4ea70270de5e",
        "category": "interior"
    },
    {

        "title": "Begonia Maculata",
        "size": "Medium",
        "price": 15,
        "stock": 20,
        "img": "https://firebasestorage.googleapis.com/v0/b/projectoreact-96ac4.appspot.com/o/11.jpg?alt=media&token=95d6d9d5-2bcf-4282-8a4b-4da2d4aac553",
        "category": "interior"
    },
    {

        "title": "maranta Light",
        "size": "Medium",
        "price": 1900,
        "stock": 6,
        "img": "https://firebasestorage.googleapis.com/v0/b/projectoreact-96ac4.appspot.com/o/12.jpg?alt=media&token=0ba0e9b1-69c7-45c8-84d2-9028d478c23c",
        "category": "interior"
    },
    {

        "title": "Caladium",
        "size": "Large",
        "price": 2900,
        "stock": 6,
        "img": "https://firebasestorage.googleapis.com/v0/b/projectoreact-96ac4.appspot.com/o/13.jpg?alt=media&token=4ebe7a4e-7857-4f90-a249-013f492a4b04",
        "category": "exterior"
    },
    {

        "title": "Arbol de Jade",
        "size": "Large",
        "price": 3000,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/projectoreact-96ac4.appspot.com/o/14.jpg?alt=media&token=96217801-9520-4c80-8749-509eb80869f1",
        "category": "exterior"
    },
    {

        "title": "Clavel de aire",
        "size": "Medium",
        "price": 2500,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/projectoreact-96ac4.appspot.com/o/15.jpg?alt=media&token=7016e625-60e9-4770-9ca5-391b0429f413",
        "category": "exterior"
    }
]

// Para subir la información a firebase Se llaman tambien SPINNER
/*
export const createProducts = async () => {

        prods.forEach(async(prod) => {
            const rta =await addDoc(collection(bdd, "productos"), {
                title: prod.title,
                size: prod.size,
                price: prod.price,
                stock: prod.stock,
                category: prod.category,
                img: prod.img
            })
            console.log(rta)
        })
    }
*/

//CREAR PRODUCTO
export const createProducts = async () => {
}

//CONSULTAR PRODUCTOS
export const getProducts = async() => {
    const productos = await getDocs(collection(bdd, "productos"))
    const items = productos.docs.map(prod => {return { ...prod.data(), id:prod.id}})
    return items
}

//CONSULTAR PRODUCTO
export const getProduct = async(id) => {
    const producto = await getDoc(collection(bdd, "productos", id))
    const items = { ...producto.data(), id: producto.id}
    return item
}

//ACTUALIZAR PRODUCTO
export const updateProduct = async (id,info) => {
    const respuesta = await updateDoc(doc(bdd,"productos", id), info)
    return respuesta
}

//ELIMINAR PRODUCTO
export const deleteProduct = async (id) => {
    const respuesta = await deleteDoc(doc(bdd,"productos", id))
    return respuesta
}

//Crear y leer OC

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async(id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}