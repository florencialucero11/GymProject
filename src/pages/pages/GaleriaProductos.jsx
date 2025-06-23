import React from 'react';
import Header from '../../components/static/Header';
import ProductosList from '../../components/ProductosList';
import loading from '../../assets/loading.gif';
import Footer from '../../components/static/Footer';
import { CartContext } from '../../context/CartContext';

function GaleriaProductos({ cart, productos, cargando, agregarCarrito, eliminarDelCarrito }) {
  return (
    <>
      <Header eliminarDelCarrito={eliminarDelCarrito} cartItems={cart} />

      <main className="min-h-screen bg-gradient-to-b from-violet-950 via-purple-900 to-indigo-900 text-white py-10 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-violet-200">
          Nuestra colección de productos
        </h2>

        {cargando ? (
          <div className="flex justify-center items-center py-20">
            <img src={loading} alt="Cargando..." className="w-16 h-16" />
          </div>
        ) : (
          <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <ProductosList agregarCarrito={agregarCarrito} productos={productos} />
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

export default GaleriaProductos;

