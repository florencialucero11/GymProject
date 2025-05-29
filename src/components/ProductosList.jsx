import React from 'react'
import Productos from './Productos'


const ProductosList= ({productos, agregarCarrito}) => {
  return (
    <>
      {Array.isArray(productos) && productos.length > 0 ? (
         productos.map((producto) => (
        <Productos key={producto.id} producto={producto} agregarCarrito={agregarCarrito} className=" rounded-xl shadow-lg p-4 hover:shadow-xl transition duration-300 " />
      ))
   ) : (
      
      <p className="text-center text-gray-500">No hay productos para mostrar.</p>
    )}
   
    </>
  )
}

export default ProductosList
