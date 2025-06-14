import React from 'react'
import Header from '../../components/static/Header'
import Footer from '../../components/static/Footer'
import ProductosList from '../../components/ProductosList'
import loading from "../../assets/loading.gif"


function Home({cart, productos, cargando, agregarCarrito, eliminarDelCarrito}) {
  return (
    <>
        <Header eliminarDelCarrito={eliminarDelCarrito} cartItems={cart}  />
        <main className="sm:px:4 lg:px-6 xl:p-1">
         <div className="bg-fuchsia-900/50 text-gray-200">
          <h1 className="text-6xl text-gray-200 font-bold mb-4 text-center">Gold's GYM Equipamientos</h1>
          <h2 className="text-4xl font-bold mb-4 text-center" >Bienvenido a Gold's GYM Equipamientos</h2>
          <img 
            src="../img/hero1.jpg" 
            alt="Imagen del Hero" 
            className="w-full h-full object-cover brightness-75"
          />
    


          <p className='md:text-base lg:text-lg md:leading-relaxed text-gray-200 mb-4 mt-4 text-justify'>Ofrecemos una amplia gama de productos para ayudarte a crear el gimnasio de tus sueños en casa. Desde máquinas de cardio hasta pesas y accesorios, tenemos todo lo que necesitas para mantenerte en forma y saludable.
            Explora nuestra selección de equipos de alta calidad, diseñados para adaptarse a cualquier espacio y nivel de habilidad. Ya sea que estés comenzando tu viaje fitness o buscando mejorar tu rutina, estamos aquí para apoyarte en cada paso del camino.
          </p>
          </div>
          <h2 className="text-5xl font-bold mb-4 p-4 text-center">Productos destacados</h2>
        <div className='grid columns-1 gap-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
            cargando ? <img src={loading} alt="Cargando..." className='p-4 m-4' /> :

           <ProductosList agregarCarrito={agregarCarrito} productos={productos} />
          }
        </div>

        </main>
        <Footer />
    </>
  )
}

export default Home
