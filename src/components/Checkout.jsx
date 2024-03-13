import { useRef } from "react"
import { useCarritoContext } from "../context/CartContext.jsx"
import { Link, useNavigate } from "react-router-dom"
import { createOrdenCompra, getOrdenCompra, updateProduct } from "../firebase/firebase.js"

export const Checkout = () => {
    const formRef = useRef()
    const navigate = useNavigate() 
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        const datForm = new FormData(formRef.current)
        const cliente = Object.fromEntries(datForm) 

        //Generar la orden de compra
        //Modificar Stock

        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(prodBDD =>{
                if(prodBDD.stock >= prodCarrito.quantity) { // Verifica el stock, para realizar la compra
                    prodBDD.stock -= prodCarrito.quantity
                    updateProduct(prodBDD.id, prodBDD)
                } else {
                    console.log(`Producto ${prodBDD.title} no posee stock suficiente`)
                    aux.filter(prod => prod.id != prodBDD.id)
                }
            })
        })

        const aux2 = aux.map(prod => ({id: prod.id, quantity: prod.quantity, price: prod.price }))

        createOrdenCompra(cliente, totalPrice(), aux, new Date().toLocaleDateString('es-AR', {timeZone: Intl.DateTimeFormat()
        .resolvedOptions().timeZone }))
            .then(ordenCompra => console.log(`Gracias por su compra ${ordenCompra}`))

        emptyCart()
        e.target.reset()
        navigate('/')
    }
    return (
        <div className="max-w-md mx-auto p-6 mt-2 bg-gray-200 rounded-md shadow-md">
            <form action="" ref={formRef} onSubmit={handleSubmit}>
                <label className="block mb-1 text-gray-700">Nombre: </label>
                <input type="text" className="w-full p-2 mb-3 border rounded-md" name="nombre" />
                <label className="block mb-1 text-gray-700">Apellido: </label>
                <input type="text" className="w-full p-2 mb-3 border rounded-md" name="apellido" />
                <label className="block mb-1 text-gray-700">Direccion: </label>
                <input type="text" className="w-full p-2 mb-3 border rounded-md" name="direccion" />
                <label className="block mb-1 text-gray-700">DNI: </label>
                <input type="number" className="w-full p-2 mb-3 border rounded-md" name="dni" />
                <label className="block mb-1 text-gray-700">Email: </label>
                <input type="email" className="w-full p-2 mb-3 border rounded-md" name="email" />
                <label className="block mb-1 text-gray-700">Telefono: </label>
                <input type="number" className="w-full p-2 mb-3 border rounded-md" name="telefono" />
                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">Finalizar</button>
            </form>
        </div>
    )
}