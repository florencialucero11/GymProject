import React from 'react'
import Header from '../../components/static/Header'
import Footer from '../../components/static/Footer'

function AcercaDe({ cart, eliminarDelCarrito }) {
  // Recibe cart como prop para mostrar los productos en el carrito
  return (
    <div>
        <Header eliminarDelCarrito={eliminarDelCarrito} cartItems={cart}/>
        <h2 className='text-4xl font-bold mb-4'>Acerca de Nosotros</h2>
        <p className='text-lg text-gray-700 mb-6'>
            En Gold's GYM Equipamientos, nos dedicamos a ofrecer los mejores productos para tu entrenamiento. 
            Nuestra misión es proporcionar equipamiento de alta calidad que te ayude a alcanzar tus objetivos de fitness.
        </p>
        <img src="/src/assets/logo.png" alt="Logo de Gold's GYM" className='w-32 h-32 mb-4' />
        <p className='text-lg text-gray-700'>
            Contamos con una amplia gama de productos, desde pesas y máquinas hasta accesorios de entrenamiento. 
            Nuestro equipo está aquí para ayudarte a encontrar lo que necesitas.
        </p>
        <Footer />
    </div>
  )
}

export default AcercaDe
