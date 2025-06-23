import React, { useState, useEffect } from 'react';
import FormularioProducto from '../../components/static/FormularioProducto';

function Admin() {
  const [productos, setProductos] = useState([]);
  const [form, setForm] = useState({ id: null, nombre: '', precio: '', descripcion: '' });
  const [cargando, setCargando] = useState(true);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('data/data.json')
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error('Error al cargar los datos:', error);
        setError(true);
        setCargando(false);
      });
  }, []);

  const agregarProducto = async () => {
    try {
      const respuesta = await fetch('https://68556b276a6ef0ed66326e0d.mockapi.io/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!respuesta.ok) {
        throw new Error('Error al agregar el producto');
      }

      const nuevoProducto = await respuesta.json();
      setProductos([...productos, nuevoProducto]);
      setOpen(false);
    } catch (error) {
      console.error('Error al agregar el producto:', error);
    }
  };

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

        {cargando ? (
          <p className="text-center text-slate-300">Cargando...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productos.map((producto) => (
              <div
                key={producto.id}
                className="bg-white/10 rounded-xl shadow-lg p-4 backdrop-blur-md flex flex-col items-center"
              >
                <img src={producto.img} alt={producto.nombre} className="w-32 h-32 object-contain mb-4" />
                <h2 className="text-xl font-semibold text-purple-200">{producto.nombre}</h2>
                <p className="text-sm text-violet-300">${producto.precio}</p>
                <div className="mt-4 flex gap-2">
                  <button className="px-4 py-1 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-sm">
                    Editar
                  </button>
                  <button className="px-4 py-1 bg-red-500 hover:bg-red-600 rounded-lg text-sm">
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

        {open && <FormularioProducto />}

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
