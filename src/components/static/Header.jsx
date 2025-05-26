import React from 'react'
import { Link } from 'react-router-dom' // Importa el componente Link de react-router-dom para la navegación


function Header() {
  return (
    < div className='bg-gray-300 text-white'>
      <nav className='flex justify-between items-center'>
        <ul className='gap-x-4 container w-full z-50'>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/acercade" >Sobre Nosotros</Link></li>
          <li><Link to="/productos" >Galería de productos</Link></li>
          <li><Link to="/contactos" > Contacto</Link></li>
        </ul>
      </nav>
      <h1 className='text-4xl font-bold tracking-wide text-center uppercase'>Gold's GYM Equipamientos</h1>
    
      <img src="/src/assets/logo.png" alt="Logo de Gold's GYM" className='w-32 h-32 mb-4' />
    </div>
  )
}

export default Header
