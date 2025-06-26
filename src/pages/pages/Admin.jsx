import React, { useState, useEffect, useContext } from "react";
import FormularioProducto from "../../components/admin/FormularioProducto";
import FormularioEdicion from "../../components/admin/FormularioEdicion";
import { CartContext } from "../../context/CartContext";
import { AdminContext } from "../../context/AdminContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {

    const { setIsAuth } = useContext(CartContext)

    const {
        productos,
        cargando,
        error,
        open,
        setOpen,
        openEditor,
        setOpenEditor,
        seleccionado,
        setSeleccionado,
        agregarProducto,
        actualizarProducto,
        eliminarProducto, 
    } = useContext(AdminContext)

    const navigate = useNavigate()

    const [busqueda, setBusqueda] = useState("");
    const [productosFiltrados, setProductosFiltrados] = useState(productos);

    useEffect(() => {
      const resultado = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.categoria ?.toLowerCase().includes(busqueda.toLowerCase())
      );
      setProductosFiltrados(resultado);
    }, [busqueda, productos]);
    

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <nav className="mb-6">
          <ul className="flex space-x-4">
            <li>
              <a href="/admin" className="text-white hover:text-indigo-300 font-semibold">Admin</a>
            </li>
          </ul>
        </nav>

        <h1 className="text-3xl font-bold text-violet-200 mb-6 text-center">
          Administración de Productos
        </h1>

        <div className="mb-8 max-w-md mx-auto">
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar por nombre o categoría..."
            className="w-full px-4 py-2 rounded-lg border border-violet-400 bg-white/10 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        {cargando ? (
          <p className="text-center text-slate-300">Cargando...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productosFiltrados.map((producto) => (
              <div
                key={producto.id}
                className="bg-white/10 rounded-xl shadow-lg p-4 backdrop-blur-md flex flex-col items-center"
              >
                <img src={producto.imagen} alt={producto.nombre} className="w-32 h-32 object-contain mb-4" />
                <h2 className="text-xl font-semibold text-purple-200">{producto.nombre}</h2>
                <p className="text-sm text-violet-300">${producto.precio}</p>
                <div className="mt-4 flex gap-2">
                  <button  onClick={() => {
                                        setOpenEditor(true)
                                        setSeleccionado(producto)
                                    }} className="px-4 py-1 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-sm">
                    Editar
                  </button>
                  <button onClick={() => eliminarProducto(producto.id)} className="px-4 py-1 bg-red-500 hover:bg-red-600 rounded-lg text-sm">
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            onClick={() => setOpen(true)}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full text-white font-semibold transition"
          >
            Agregar producto
          </button>
        </div>

         {open && (<FormularioProducto onAgregar={agregarProducto} />)}
          {openEditor && (<FormularioEdicion productoSeleccionado={seleccionado} onActualizar={actualizarProducto} />)}

        {error && (
          <p className="text-red-400 mt-4 text-center font-semibold">
            Error al cargar los productos.
          </p>
        )}
      </div>
    </div>
  );
}

export default Admin;
