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
  <p className='text-lg text-gray-700 mb-6 text-center max-w-xl'>
    Si tienes alguna pregunta o necesitas más información sobre nuestros productos, no dudes en contactarnos.
  </p>
  <img src="/src/assets/logo.png" alt="Logo de Gold's GYM" className='w-32 h-32 mb-6' />

  <form className='w-full max-w-md bg-fuchsia-900/50 p-6 rounded shadow-md'>
    <div className='mb-4'>
      <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>Nombre</label>
      <input
        type='text'
        id='name'
        name='name'
        className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400'
        placeholder='Tu nombre'
        required
      />
    </div>
    <div className='mb-4'>
      <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>Correo Electrónico</label>
      <input
        type='email'
        id='email'
        name='email'
        className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400'
        placeholder='tu@email.com'
        required
      />
    </div>
    <div className='mb-4'>
      <label htmlFor='message' className='block text-gray-700 font-bold mb-2'>Mensaje</label>
      <textarea
        id='message'
        name='message'
        rows='4'
        className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400'
        placeholder='Escribe tu mensaje aquí...'
        required
      ></textarea>
    </div>
    <button
      type='submit'
      className='w-full bg-violet-900/70 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-200'
    >
      Enviar
    </button>
  </form>
</div>

    <Footer />
    </>
  )
}

export default Contactos 
