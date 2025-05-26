import React from 'react'
import { Link } from 'react-router-dom' // Importa el componente Link de react-router-dom para la navegación





function NotFound() {
  return (
    <div >
      <h1>404</h1>
      <button><Link to="/">Volver al inicio</Link></button>

    </div>
  )
}

export default NotFound
