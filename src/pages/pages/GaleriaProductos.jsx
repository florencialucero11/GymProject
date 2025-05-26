import React from 'react'
import Header from '../../components/static/Header'
import Footer from '../../components/static/Footer'

function GaleriaProductos() {
  return (
    <div className='bg-gray-100 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <Header />
        <h1 className='text-4xl font-bold mb-4 text-center'>Galería de Productos</h1>
        <div className='bg-white p-4 shadow-md rounded-lg'>
            <img src="/src/assets/producto1.jpg" alt="Producto 1" className='w-full h-48 object-cover mb-2' />
            <h2 className='text-xl font-semibold'>Producto 1</h2>
            <p className='text-gray-600'>Descripción breve del producto 1.</p>
        </div>
        <div className='bg-white p-4 shadow-md rounded-lg'>
            <img src="/src/assets/producto2.jpg" alt="Producto 2" className='w-full h-48 object-cover mb-2' />
            <h2 className='text-xl font-semibold'>Producto 2</h2>
            <p className='text-gray-600'>Descripción breve del producto 2.</p>
        </div>
        <div className='bg-white p-4 shadow-md rounded-lg'>
            <img src="/src/assets/producto3.jpg" alt="Producto 3" className='w-full h-48 object-cover mb-2' />
            <h2 className='text-xl font-semibold'>Producto 3</h2>
            <p className='text-gray-600'>Descripción breve del producto 3.</p>
        </div>
        <div className='bg-white p-4 shadow-md rounded-lg'>
            <img src="/src/assets/producto4.jpg" alt="Producto 4" className='w-full h-48 object-cover mb-2' />
            <h2 className='text-xl font-semibold'>Producto 4</h2>
            <p className='text-gray-600'>Descripción breve del producto 4.</p>
        </div>
        <Footer />
    </div>
  )
}

export default GaleriaProductos
