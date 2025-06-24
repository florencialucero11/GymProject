import React, { useState, useEffect } from 'react';

function FormularioEdicion({ productoSeleccionado, onActualizar }) {
  const [producto, setProducto] = useState(productoSeleccionado);

  useEffect(() => {
    setProducto(productoSeleccionado);
  }, [productoSeleccionado]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center p-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onActualizar(producto);
        }}
        className="w-full max-w-md bg-white/10 text-white rounded-lg shadow-lg backdrop-blur-md px-6 py-8 space-y-5 border border-violet-500"
      >
        <h2 className="text-2xl font-bold text-center text-violet-300 mb-4">
          Editar Producto
        </h2>

        <div>
          <label htmlFor="id" className="block text-sm mb-1 text-violet-200">
            ID
          </label>
          <input
            type="number"
            name="id"
            id="id"
            readOnly
            value={producto.id || ''}
            className="w-full px-4 py-2 rounded-md bg-transparent border border-violet-500 text-white focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-violet-200">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={producto.nombre || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-transparent border border-violet-500 text-white focus:outline-none focus:ring-2 focus:ring-violet-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-violet-200">Precio</label>
          <input
            type="number"
            name="precio"
            value={producto.precio || ''}
            onChange={handleChange}
            min="0"
            className="w-full px-4 py-2 rounded-md bg-transparent border border-violet-500 text-white focus:outline-none focus:ring-2 focus:ring-violet-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-violet-200">Stock</label>
          <input
            type="number"
            name="stock"
            value={producto.stock || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-transparent border border-violet-500 text-white focus:outline-none focus:ring-2 focus:ring-violet-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-violet-200">Imagen (URL)</label>
          <input
            type="text"
            name="imagen"
            value={producto.imagen || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-transparent border border-violet-500 text-white focus:outline-none focus:ring-2 focus:ring-violet-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-violet-200">Categoría</label>
          <input
            type="text"
            name="categoria"
            value={producto.categoria || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-transparent border border-violet-500 text-white focus:outline-none focus:ring-2 focus:ring-violet-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-violet-600 hover:bg-violet-700 py-2 rounded-md font-semibold transition"
        >
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}

export default FormularioEdicion;
