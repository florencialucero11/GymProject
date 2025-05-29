import React, { useState } from 'react'


const Productos = ({producto, agregarCarrito}) => {
  const [cantidad, setCantidad] = useState(1);

  const increase = () => setCantidad (prev => (prev < producto.stock ? prev + 1: prev)
);

  const decrase= () => setCantidad (prev => (prev > 1 ? prev - 1 : 1 ));






  return (
    
    <section className="p-2 m-1 rounded-lg shadow-md bg-violet-200 dark:border-gray-700 ">
    
        <div className="container text-center p-2">
            <div className="bg-violet-200 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img src={producto.imagen} alt="Imagen del producto" className="w-full h-48 object-cover rounded-md mb-4" />
            
            
                <h3 className="text-xl font-semibold">{producto.nombre}</h3>
                <p className='text-gray-600'>${producto.precio}</p>
                <p className="text-gray-600">{producto.stock}</p>
            

                <div className='mt-4  p-2 flex items-center justify-between'>
                    <button className="bg-rose-900 hover:bg-rose-700 text-white font-bold py-2 px-2 " onClick={decrase}>-</button>
                     <span className="ml-2 text-gray-600">{cantidad}</span>
                    <button className="bg-rose-900 hover:bg-rose-700 text-white font-bold py-2 px-2 " onClick={increase}>+</button>
                   
                </div>
                <button onClick={() => agregarCarrito(producto)} className="bg-rose-900 hover:bg-rose-700 text-white font-bold py-1 px-2 rounded text-center mt-4 w-full">
                     Agregar al carrito
                </button>
                
            </div>
        
        </div>
    </section>
  )
}

export default Productos
