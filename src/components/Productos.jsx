import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Productos = ({ producto }) => {
  const { handleAddToCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const increase = () => setCantidad((prev) => (prev < producto.stock ? prev + 1 : prev));
  const decrease = () => setCantidad((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="bg-violet-200/20 backdrop-blur border border-violet-600 text-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 p-4 flex flex-col justify-between">
      
      
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-full h-48 object-cover rounded-md mb-4 border border-violet-400"
      />

      
      <div className="flex-1 space-y-2">
        <h3 className="text-xl font-semibold text-violet-100">{producto.nombre}</h3>
        <p className="text-violet-300 font-semibold text-lg">${producto.precio}</p>
        <p className="text-sm text-slate-200">{producto.descripcion}</p>
      </div>

      
      <div className="mt-4">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={decrease}
            className="bg-purple-700 hover:bg-purple-800 px-3 py-1 text-white rounded-md font-bold"
          >
            -
          </button>
          <span className="text-lg font-medium text-violet-100">{cantidad}</span>
          <button
            onClick={increase}
            className="bg-purple-700 hover:bg-purple-800 px-3 py-1 text-white rounded-md font-bold"
          >
            +
          </button>
        </div>

        <button
          onClick={() => handleAddToCart(producto)}
          className="w-full bg-fuchsia-700 hover:bg-fuchsia-800 py-2 rounded-md text-white font-semibold transition"
        >
          Agregar al carrito
        </button>

        <Link
          to={`/productos/${producto.id}`}
          className="block text-center mt-3 text-violet-300 hover:text-violet-400 transition"
        >
          Ver más detalles
        </Link>
      </div>
    </div>
  );
};

export default Productos;
