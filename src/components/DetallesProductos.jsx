import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const DetallesProductos = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { productos, cart, handleAddToCart } = useContext(CartContext);
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const encontrado = productos.find((item) => item.id === parseInt(id));
    setProducto(encontrado);
  }, [id, productos]);

  // Calcular la cantidad del producto en el carrito
  const cantidadEnCarrito = cart.filter(item => item.id === parseInt(id)).length;

  if (!producto) {
    return (
      <div className="text-gray-900 text-center mt-20 text-4xl">
        Producto no encontrado...
      </div>
    );
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
          <p className="text-xl font-semibold text-gray-200 mb-6">${producto.precio}</p>

          <div className="flex gap-4 items-center">
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
           {cantidadEnCarrito > 0 && (
  <div className="ml-4 inline-flex items-center bg-purple-800 bg-opacity-75 px-4 py-1 rounded-full shadow-md text-white font-semibold select-none animate-pulse">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6m1.2-6L5 21m12-8v6m0 0l1-6m-1 6H7"
      />
    </svg>
     +: {cantidadEnCarrito}
  </div>
)}

          </div>
        </div>
      </div>
    </div>
  );
};

export default DetallesProductos;
