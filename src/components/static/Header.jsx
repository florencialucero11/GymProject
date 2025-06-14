import React from 'react'
import { Link } from 'react-router-dom' // Importa el componente Link de react-router-dom para la navegación
import { FiShoppingCart } from "react-icons/fi";
// Importa el icono de carrito de 
import Cart from '../Cart'; 
import { useState } from 'react';




function Header( { cartItems, eliminarDelCarrito }) {
  // Recibe cartItems como prop para mostrar los productos en el carrito
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado para controlar la visibilidad del carrito
  return (
    <>
    <p className='bg-fuchsia-900 text-center text-gray-200'> Envíos gratis a todo el país en compras superiores a $120000</p>
    < div className="text-white" >
      <nav className='flex justify-between items-center'>
        <ul className='gap-x-4 container w-full z-50'>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/acercade" >Sobre Nosotros</Link></li>
          <li><Link to="/productos" >Galería de productos</Link></li>
          <li><Link to="/contactos" > Contacto</Link></li>
          <li>
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 bg-violet-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
          >
            <FiShoppingCart className="text-2xl" />
            
          </button>
        </li>
            <Cart eliminarDelCarrito={eliminarDelCarrito} cartItems={cartItems} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}/>

        </ul>
      </nav>
      
    
    
    </div>
    </>
  )
}

export default Header
