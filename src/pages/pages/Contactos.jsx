import React from 'react'
import Header from '../../components/static/Header'
import Footer from '../../components/static/Footer'


function Contactos({ cart, eliminarDelCarrito }) {
  // Recibe cart como prop para mostrar los productos en el carrito
  return (
    <>
    <Header eliminarDelCarrito={eliminarDelCarrito} cartItems={cart} />
    <div className='bg-gray-100 p-8 flex flex-col items-center'>
        <h3 className='text-4xl font-bold mb-4'>Contáctanos</h3>
        <p className='text-lg text-gray-700 mb-6'>
            Si tienes alguna pregunta o necesitas más información sobre nuestros productos, no dudes en contactarnos.
        </p>
        <img src="/src/assets/logo.png" alt="Logo de Gold's GYM" className='w-32 h-32 mb-4' />
        
    </div>
    <Footer />
    </>
  )
}

export default Contactos 
