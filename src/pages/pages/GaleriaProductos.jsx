import React, { useContext } from 'react';
import Header from '../../components/static/Header';
import ProductosList from '../../components/ProductosList';
import loading from '../../assets/loading.gif';
import Footer from '../../components/static/Footer';
import { CartContext } from '../../context/CartContext';

function GaleriaProductos() {
  const { cargando } = useContext(CartContext);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-violet-950 via-purple-900 to-indigo-900 text-white py-10 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-violet-200">
          Nuestra colección de productos
        </h2>

        {cargando ? (
          <div className="flex justify-center items-center py-20">
            <img src={loading} alt="Cargando..." className="w-16 h-16" />
          </div>
        ) : (
          <section className="max-w-6xl mx-auto">
            <ProductosList />
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

export default GaleriaProductos;
