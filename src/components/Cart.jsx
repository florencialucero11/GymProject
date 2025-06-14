import React, {useContext} from 'react'
import { CartContex } from '../context/CartContext';
import { FaTimes } from "react-icons/fa";
import { FaTrash } from 'react-icons/fa';


 


function Cart({cartItems =[], isOpen, onClose, eliminarDelCarrito}) {
  const {cart, handleAddToCart, eliminarPorUnidad, calcularTotal } = useContext(CartContex);


  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 bg-purple-800 text-white rounded-b-lg shadow-lg flex justify-between items-center">
          <h2 className="text-xl font-bold">Tu carrito</h2>
          <button onClick={onClose} className="text-white hover:text-red-500">
            <FaTimes size={20} />
          </button>
        </div>

        <div className="p-4">
          {cart.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">Tu carrito está vacío 🛒</div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b border-gray-300 py-3">
                <div className="flex items-center gap-3">
                  <img src={item.imagen} alt={item.nombre} className="w-12 h-12 object-cover rounded" />
                  <div>
                    <p className="text-gray-800 font-semibold">{item.nombre}</p>
                    <p className="text-gray-500 text-sm">${item.precio}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => eliminarPorUnidad(item.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-2 rounded"
                  >
                    -
                  </button>
                  <span className="px-2 text-gray-800">{item.quantity}</span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-green-600 hover:bg-green-700 text-white px-2 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => eliminarDelCarrito(item.id)}
                    className="ml-2 text-gray-700 hover:text-red-600"
                  >
                    <FaTrash />
                  </button>
                </div>
                
              </div>
              
            ))

          )}
          <div className="p-4 border-t border-gray-400">
                  <p className="text-lg font-bold text-right text-gray-800">
                    Total a pagar: <span className="text-green-700">${calcularTotal().toFixed(2)}</span>
                  </p>
              
          </div>
          <div className="flex justify-end mt-4 px-4">
            <button
              onClick={() => {
                alert("¡Gracias por tu compra! 🛍️");
                onClose(); // Cerrás el carrito
              }}
              className="bg-purple-800 hover:bg-violet-700 text-white font-semibold py-2 px-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              Finalizar compra
            </button>
          </div>


        </div>
      </div>
    </>
  );
}

export default Cart;