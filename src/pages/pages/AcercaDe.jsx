import React from 'react'
import Header from '../../components/static/Header'
import Footer from '../../components/static/Footer'


function AcercaDe() {
  return (
    <div>
    <Header />
    <section className="bg-gradient-to-r from-purple-900 text-white py-16 px-8 md:px-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Acerca de Nosotros</h2>
          <p className="text-white mb-4">
            En <strong>GymTienda</strong> nos dedicamos a ofrecerte lo mejor en equipamiento deportivo. Creemos que el fitness es para todos, y trabajamos para que tengas acceso a productos de calidad al mejor precio.
          </p>
          <p className="text-white">
            Nuestro equipo está formado por profesionales del entrenamiento y entusiastas del bienestar que te acompañan en cada etapa de tu progreso.
          </p>
        </div>

        <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/img/sobre-nosotros.jpg" // asegurate de colocar la imagen en public/img con ese nombre
            alt="Acerca de GymTienda"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
    <Footer />
    </div>
    );

  
}
  

export default AcercaDe;

