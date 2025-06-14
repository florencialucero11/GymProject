import React from 'react'

function Admin() {
  return (
     <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="mb-8 border-b border-gray-700 pb-4">
        <h1 className="text-4xl font-bold">Panel de Control</h1>
        <p className="text-gray-400 mt-1">Bienvenido al panel administrativo</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Usuarios registrados</h2>
          <p className="text-3xl font-bold">120</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Órdenes recientes</h2>
          <p className="text-3xl font-bold">35</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Ganancias del mes</h2>
          <p className="text-3xl font-bold">$12,500</p>
        </div>
      </section>

      <footer className="mt-12 text-sm text-gray-500 text-center">
        © 2025 Admin Panel. Todos los derechos reservados.
      </footer>
    </div>
  )
}

export default Admin

