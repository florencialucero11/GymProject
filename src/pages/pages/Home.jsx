import React from 'react'
import Header from '../../components/static/Header'
import Footer from '../../components/static/Footer'
import ProductosList from '../../components/ProductosList'
import loading from "../../assets/loading.gif"


function Home(productos, cargando) {
  return (
    <>
      <p className='text-center'> 20% off abonando en efectivo</p>
        <Header />
        <main className="container mx-auto p-4">
         
          <h2 className="text-3xl font-bold mb-4 text-center">Bienvenido a Gold's GYM Equipamientos</h2>

          <p className='md:text-base lg:text-lg md:leading-relaxed text-gray-800 mb-4 mt-4 text-center text-justify '>Ofrecemos una amplia gama de productos para ayudarte a crear el gimnasio de tus sueños en casa. Desde máquinas de cardio hasta pesas y accesorios, tenemos todo lo que necesitas para mantenerte en forma y saludable.
            Explora nuestra selección de equipos de alta calidad, diseñados para adaptarse a cualquier espacio y nivel de habilidad. Ya sea que estés comenzando tu viaje fitness o buscando mejorar tu rutina, estamos aquí para apoyarte en cada paso del camino.
          </p>

          {
            cargando ? <img src={loading} alt="Cargando..." className='mx-auto' /> :

           <ProductosList productos={productos} />
          }
          

        </main>
        <Footer />
    </>
  )
}

export default Home
