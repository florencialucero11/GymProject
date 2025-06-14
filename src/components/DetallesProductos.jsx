import React, {useContext, useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { CartContex } from '../context/CartContext';

const DetallesProductos = () => {
 /** Aca desestructuramos */



    const {id} = useParams();
    const navigate = useNavigate()
    const { productos, handleAddToCart } = useContext(CartContex)
    const [producto, setProducto] = useState(null)

   useEffect(() => {
    const encontrado = productos.find((item) => item.id === parseInt(id))
    setProducto(encontrado)
  }, [id, productos])

  if (!producto) {
    return (
      <div className="text-white text-center mt-20 text-2xl">
        Cargando producto...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-fuchsia-900 text-white p-8">
      <div className="max-w-4xl mx-auto bg-purple-400 rounded-lg shadow-lg overflow-hidden grid md:grid-cols-2 gap-6 p-6">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-auto object-cover rounded"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{producto.nombre}</h1>
          <p className="text-white mb-4">{producto.descripcion}</p>
          <p className="text-xl font-semibold text-gray-200 mb-6">
            ${producto.precio}
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => handleAddToCart(producto)}
              className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-6 rounded transition"
            >
              Agregar al carrito
            </button>
            <button
              onClick={() => navigate(-1)}
              className="bg-violet-600 hover:bg-violet-700 text-white py-2 px-6 rounded transition"
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetallesProductos