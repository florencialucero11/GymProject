import React from 'react'
import { FaTimes } from "react-icons/fa";
import { FaTrash } from 'react-icons/fa';


 


function Cart({cartItems =[], isOpen, onClose, eliminarDelCarrito}) {

  return (
    
  <>
       {/* Cart panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
      
       <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold text-gray-700 container border-t-slate-700 ">Tu carrito</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black"> 
             <FaTimes size={20} /> 
          </button>
        </div>
        <div className='p-4 m-2'>
          {/* Renderiza productos aquí */}
          {cartItems.length === 0 ? (
            <p className='text-gray-700'>El carrito está vacío.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={item.id} className="mb-2 text-gray-700">
                {item.nombre} - ${item.precio}
                <button onClick={() =>{eliminarDelCarrito(item.id)}} className=' px-3 py-1 rounded '>  <FaTrash className="w-5 h-5" /></button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;






