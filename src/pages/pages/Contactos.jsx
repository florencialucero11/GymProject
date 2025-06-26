import React from 'react';
import Header from '../../components/static/Header';
import Footer from '../../components/static/Footer';

function Contactos() {
  return (
    <>
      <Header />

      <main className="bg-gradient-to-b from-violet-950 via-purple-900 to-indigo-900 text-white min-h-screen px-6 py-12 flex flex-col items-center">
        {/* Título */}
        <section className="max-w-3xl text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-violet-100">Contáctanos</h1>
          <p className="text-slate-200 text-lg">
            Si tenés alguna consulta o querés comunicarte con nuestro equipo, completá el siguiente formulario y te responderemos a la brevedad.
          </p>
        </section>

        {/* Logo */}
        <img
          src="/src/assets/logo.jpg"
          alt="Logo de Gold's GYM"
          className="w-28 h-28 mb-8 shadow-md rounded-full"
        />

        {/* Formulario */}
        <form className="w-full max-w-md bg-white/10 backdrop-blur-sm border border-violet-600 p-6 rounded-xl shadow-lg space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-violet-200 mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 rounded bg-white/5 border border-violet-700 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
              placeholder="Tu nombre"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-violet-200 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded bg-white/5 border border-violet-700 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
              placeholder="tu@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-violet-200 mb-1">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 rounded bg-white/5 border border-violet-700 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
              placeholder="Escribí tu mensaje acá..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-violet-700 hover:bg-fuchsia-800 text-white font-bold py-2 px-4 rounded-md transition duration-200"
          >
            Enviar mensaje
          </button>
        </form>
      </main>

      <Footer />
    </>
  );
}

export default Contactos;
