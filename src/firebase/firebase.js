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

//Consultar a la BDD
const bdd = getFirestore()



export const createProducts = async () => {
    prods.forEach(async (prod) => {
        await addDoc(collection(bdd, "productos"), {
            title: prod.title,
            size: prod.size,
            price: prod.price,
            stock: prod.stock,
            category: prod.category,
            img: prod.img
        })
    })

}

// Consultar productos
export const getProducts = async () => {
    const productos = await getDocs(collection(bdd, "productos"))
    const items = productos.docs.map(prod => { return { ...prod.data(), id: prod.id } })
    return items
}

//Consultar Producto
export const getProduct = async (id) => {
    const producto = await getDoc(doc(bdd, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}

// Actualizar Producto

export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "productos", id), info)
}

// Eliminar producto

export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))
}

//CREATE AND READ Ordenes de Compra

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}