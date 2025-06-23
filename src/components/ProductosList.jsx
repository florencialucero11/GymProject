import React from 'react'
import Productos from './Productos'
import {CartContext } from '../context/CartContext'
import { useContext } from 'react'


const ProductosList= ({ agregarCarrito}) => {
  const { productos } = useContext(CartContext)

  return (
    <>
      {Array.isArray(productos) && productos.length > 0 ? (
         productos.map((producto) => (
        <Productos key={producto.id} producto={producto} className=" rounded-xl shadow-lg p-4 hover:shadow-xl transition duration-300 " />
      ))
   ) : (
      
      <p className="text-center text-gray-500">No hay productos para mostrar.</p>
    )}
   
    </>
  )
}

export default ProductosList
