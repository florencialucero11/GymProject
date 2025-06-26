import React, { useContext, useState, useEffect } from 'react';
import Productos from './Productos';
import { AdminContext } from '../context/AdminContext';

const ProductosList = () => {
  const { productos } = useContext(AdminContext);
  const [busqueda, setBusqueda] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  // paginacion
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 8;

  useEffect(() => {
    const resultados = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      (producto.categoria && producto.categoria.toLowerCase().includes(busqueda.toLowerCase()))
    );
    setProductosFiltrados(resultados);
    setPaginaActual(1); // Reinicia a la primera página si cambia la búsqueda
  }, [busqueda, productos]);

  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
  const indiceInicio = (paginaActual - 1) * productosPorPagina;
  const indiceFin = indiceInicio + productosPorPagina;
  const productosPagina = productosFiltrados.slice(indiceInicio, indiceFin);

  return (
    <div className="max-w-6xl mx-auto px-6">

      <div className="mb-10">
        <input
          type="text"
          placeholder="Buscar productos por nombre o categoría..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-violet-400 bg-white/10 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
      </div>

    
      {productosPagina.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productosPagina.map((producto) => (
            <Productos
              key={producto.id}
              producto={producto}
              className="rounded-xl shadow-lg p-4 hover:shadow-xl transition duration-300"
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 mt-10">No hay productos para mostrar.</p>
      )}

     
      {totalPaginas > 1 && (
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalPaginas }, (_, i) => (
            <button
              key={i}
              onClick={() => setPaginaActual(i + 1)}
              className={`px-4 py-2 rounded-full ${
                i + 1 === paginaActual
                  ? 'bg-violet-500 text-white'
                  : 'bg-white/10 text-violet-300 hover:bg-violet-600'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductosList;
