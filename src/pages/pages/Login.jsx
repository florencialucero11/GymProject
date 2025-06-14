import React, {useState, useContext } from 'react'
import { CartContex } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'



function Login() {

  const { setIsAuth } = useContext(CartContex)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({ })

  const navigate = useNavigate()


  const handleSubmit = async (e) =>  {
    e.preventDefault()
/* Esta variable va a empezar a almacenar claves */ 
    let validarErrores = {}

    if(!email) validarErrores.email = 'El email es requerido '
    if(!password) validarErrores.password = 'La contraseña es requerida '


    /*Acá usamos un metodo Object.keys 
    Vamos a analizar el largo del array
    si tiene una clave va a ser mayor y por lo tanto va a retornar lo que nosotros queremos
    Object toma las claves y las pone en un array*/ 
    if(Object.keys(validarErrores).length > 0 ){
      setError(validarErrores) /* Acá setError manda el objeto actualizado */
      /*Acá iría: } return } que no me lo toma nose porqué aún */
    return
    }
    
  
    
    try{
      const res = await fetch('/data/users.json')
      const users = await res.json()

      const foundUser = users.find((user) => user.email === email && user.password === password)

      if(!foundUser){
        setError({email: 'credenciales invalidas '})
      } else{
        if(foundUser.role === 'admin'){
          setIsAuth(true)
          navigate('/Admin')
        }else {
          navigate('/')
        }
        }
      }catch(err){
      console.error('Error fetching users: ', err )
      setError({email: 'Algo salio mal. Por favor, intentelo nuevamente'})
      } 


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-sm w-full border border-white/20">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Iniciar sesión</h2>
      <form onSubmit={handleSubmit} className='space-y-5 text-center  ' >
      <div>
        <label htmlFor="formBasicEmail" className='text-sm text-gray-300 mb-1'>Email</label>
        <input 
        id='formBasicEmail'
        type="email"
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e)=> setEmail(e.target.value)}
          value={email}
         placeholder="ejemplo@correo.com" />
        {error.email && (<div className='text-red'>
          {error.email}
        </div>)}
       </div>
         <div>
             <label htmlFor='formBasicPassword' className="block text-sm text-gray-300 mb-1">Contraseña</label>
            <input
               type="password"
               value={password}
               className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
               onChange={(e) => setPassword(e.target.value)}
               placeholder="••••••••"
             />
            {error.password && (<div className='text-red'>
            {error.password}</div>)}
           </div>
          <button
             type="submit"
             className="w-60 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
           >
             Entrar
           </button>

           <p className="text-sm text-gray-400 text-center">
             ¿No tenés cuenta? <a href="#" className="text-blue-400 hover:underline">Registrate</a>
           </p>


        </form>
      </div>
      </div>

    )
  }
  console.log('Login renderizado')
}



export default Login
