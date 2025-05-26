import React from 'react'

function Productos() {
  return (
    <section className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Productos</h2>
        <p className='md:text-base lg:text-lg md:leading-relaxed text-gray-800 mb-4 mt-4 text-center text-justify'>
            Aquí encontrarás nuestros productos diseñados para ayudarte a alcanzar tus objetivos de fitness y en la comodidad de tu hogar.
            Desde equipos de entrenamiento hasta accesorios, tenemos todo lo que necesitas.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
                <img src="" alt="Imagen del producto" className="w-full h-48 object-cover rounded-lg mb-4" />
            </div>
            
            <div className="border p-4 rounded-lg">
                <h3 className="text-xl font-semibold">Mancuernas</h3>
                <p className="text-gray-600">Descripción </p>
            </div>

            <div>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Cantidad
                </button>
                <span className="ml-2 text-gray-600">Cantidad: 1</span>

                <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Agregar al carrito
                </button>
            </div>
            
            <div className="border p-4 rounded-lg">
                <h3 className="text-xl font-semibold">Barras Olímpicas</h3>
                <p className="text-gray-600">Descripción del producto 2.</p>
            </div>
            <div>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Cantidad
                </button>
                <span className="ml-2 text-gray-600">Cantidad: 1</span>
            
            
                <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Agregar al carrito
                </button>
            </div>
            
            <div className="border p-4 rounded-lg">
                <h3 className="text-xl font-semibold">Colchonetas</h3>
                <p className="text-gray-600">Descripción del producto 3.</p>
            </div>
            <div>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Cantidad
             </button>
                <span className="ml-2 text-gray-600">Cantidad: 1</span>
            
             <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
               Agregar al carrito
                </button>
            </div>
            <div className="border p-4 rounded-lg">
                <h3 className="text-xl font-semibold">Banda elásticas</h3>
                <p className="text-gray-600">Descripción del producto 3.</p>
            </div>
            <div>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Cantidad
             </button>
                <span className="ml-2 text-gray-600">Cantidad: 1</span>
            
             <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
               Agregar al carrito
                </button>
            </div>
            <div className="border p-4 rounded-lg">
                <h3 className="text-xl font-semibold">Guantes</h3>
                <p className="text-gray-600">Descripción del producto 3.</p>
            </div>
            <div>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Cantidad
             </button>
                <span className="ml-2 text-gray-600">Cantidad: 1</span>
            
             <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
               Agregar al carrito
                </button>
            </div>
            <div className="border p-4 rounded-lg">
                <h3 className="text-xl font-semibold">Discos</h3>
                <p className="text-gray-600">Descripción del producto 3.</p>
            </div>
            <div>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Cantidad
             </button>
                <span className="ml-2 text-gray-600">Cantidad: 1</span>
            
             <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
               Agregar al carrito
                </button>
            </div>
            <div className="border p-4 rounded-lg">
                <h3 className="text-xl font-semibold">Rodilleras</h3>
                <p className="text-gray-600">Descripción del producto 3.</p>
            </div>
            <div>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Cantidad
             </button>
                <span className="ml-2 text-gray-600">Cantidad: 1</span>
            
             <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
               Agregar al carrito
                </button>
            </div>
            <div className="border p-4 rounded-lg">
                <h3 className="text-xl font-semibold">Bicicleta fija</h3>
                <p className="text-gray-600">Descripción del producto 3.</p>
            </div>
            <div>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Cantidad
             </button>
                <span className="ml-2 text-gray-600">Cantidad: 1</span>
            
             <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
               Agregar al carrito
                </button>
            </div>
        </div>
        
    </section>
  )
}

export default Productos
