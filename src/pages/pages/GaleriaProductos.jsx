import React from 'react'
import Header from '../../components/static/Header'
import ProductosList from '../../components/ProductosList'
import loading from '../../assets/loading.gif'
import { useState, useEffect } from 'react'
import Footer from '../../components/static/Footer'

function GaleriaProductos({cart, productos, cargando, agregarCarrito, eliminarDelCarrito}) {
  return (
    <div className=''>
       <Header eliminarDelCarrito={eliminarDelCarrito} cartItems={cart}/>
        <h2 className='text-center text-wrap font-bold p-4 m-2 text-5xl text-fuchsia-950'  >
              Nuestra colección de productos
          </h2>
        <div className='grid columns-1 gap-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-2 p-2'>
          
                  {
                    cargando ? <img src={loading} alt="Cargando..." /> :
        
                   <ProductosList agregarCarrito={agregarCarrito} productos={productos} />
                  }
                </div>
        <Footer />
    </div>
  )
}

export default GaleriaProductos
