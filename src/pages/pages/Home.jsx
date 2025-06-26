import React, { useContext } from 'react';
import Header from '../../components/static/Header';
import Footer from '../../components/static/Footer';
import ProductosList from '../../components/ProductosList';
import { AdminContext } from '../../context/AdminContext';
import loading from "../../assets/loading.gif";
import { CartContext } from '../../context/CartContext';
import { toast } from 'react-toastify';
import { FaWhatsapp } from 'react-icons/fa';

function Home() {
  const { cargando } = useContext(CartContext);
  const { productos} = useContext(AdminContext);


  const handleWhatsAppClick = () => {
  toast.success('Abriendo WhatsApp...');
  window.open('https://wa.me/5491134683047', '_blank'); 
};

  return (
    <>
      <Header />
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
        title="Contactar por WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </button>


      <main className="bg-gradient-to-b from-gray-950 via-purple-900 to-indigo-900 text-gray-100">
      
        <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <img
            src="../img/hero1.jpg"
            alt="Imagen del Hero"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-violet-100 drop-shadow-lg mb-2">
              Gold's GYM Equipamientos
            </h1>
            <h2 className="text-2xl md:text-3xl text-violet-300 font-semibold">
              Bienvenido a tu tienda fitness ideal
            </h2>
          </div>
        </section>

        
        <section className="max-w-5xl mx-auto px-6 py-12 text-lg leading-relaxed text-slate-200">
          <p className="text-justify">
            Ofrecemos una amplia gama de productos para ayudarte a crear el gimnasio de tus sueños o incluso crearlo en tu casa. Desde máquinas de cardio hasta pesas y accesorios, tenemos todo lo que necesitas para cumplir tu sueño de tener tu gimnasio.
          </p>
          <p className="mt-4 text-justify">
            Explora nuestra selección de equipos de alta calidad, diseñados para adaptarse a cualquier espacio y nivel de habilidad. Ya sea que estés comenzando tu viaje fitness o buscando mejorar tu rutina, estamos aquí para apoyarte en cada paso del camino.
          </p>
        </section>

        <section className="px-6 pb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-violet-200 mb-10">
            Productos destacados
          </h2>

          {cargando ? (
            <div className="flex justify-center">
              <img src={loading} alt="Cargando..." className="w-16 h-16 animate-spin" />
            </div>
          ) : productos.length > 0 ?(
           
              
                <ProductosList  />
            
            
        
          ) : (
            <p className="text-center text-slate-400">No se encontraron productos.</p>
          )}
        </section>


      </main>

      <Footer />
    </>
  );
}

export default Home;
