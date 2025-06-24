import React, {useState} from 'react'

const FormularioProducto = ({onAgregar}) => {
    const [producto, setProductos] = useState({
        nombre: '',
        precio: '',
        descricion: ''
    })

    const [error, setError] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target
        setProductos({...producto, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        onAgregar(producto)

        setProductos({
            nombre: '',
            precio: '',
            descricion: ''
        })
    }



  return (
    <div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-md space-y-6 text-white">
        <h2 className="text-2xl font-semibold text-violet-300 text-center">Agregar carrito</h2>

        <div>
            <label className="block mb-1 font-medium" htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={producto.nombre}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-md border ${
            error.nombre ? 'border-red-500' : 'border-violet-500'
          } bg-transparent focus:outline-none focus:ring-2 focus:ring-violet-400 transition`}
          placeholder="Nombre del producto"
        />
        {error.nombre && <p className="text-red-600 text-sm mt-1">{error.nombre}</p>}
    </div>

    <div>
        <label className="block mb-1 font-medium" htmlFor="precio">Precio</label>
        <input
            type="number"
            id="precio"
            name="precio"
            value={producto.precio}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md border ${
            error.precio ? 'border-red-500' : 'border-violet-500'
            } bg-transparent focus:outline-none focus:ring-2 focus:ring-violet-400 transition`}
            placeholder="Precio en USD"
            min="0"
            step="0.01"
        />
        {error.precio && <p className="text-red-600 text-sm mt-1">{error.precio}</p>}
    </div>

    <div>
        <label className="block mb-1 font-medium" htmlFor="descripcion">Descripción</label>
        <textarea
            id="descripcion"
            name="descripcion"
            value={producto.descripcion}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md border ${
            error.descripcion ? 'border-red-500' : 'border-violet-500'
            } bg-transparent focus:outline-none focus:ring-2 focus:ring-violet-400 transition resize-none`}
            placeholder="Descripción del producto"
            rows={4}
        />
        {error.descripcion && <p className="text-red-600 text-sm mt-1">{error.descripcion}</p>}
    </div>

    <button
        type="submit"
        className="w-full py-3 bg-violet-600 hover:bg-violet-700 rounded-md font-semibold shadow-md transition"
    >
        Agregar producto
    </button>
    </form>

    </div>
  )
}

export default FormularioProducto
