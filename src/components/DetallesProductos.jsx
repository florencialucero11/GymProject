import React from 'react'
import { useParams } from 'react-router-dom'

const DetallesProductos = ({productos}) => {
 /** Aca desestructuramos */



    const {id} = useParams();
    

    const product = productos.find(producto => producto.id == id);

    console.log(product)

    return (






    <div>
        <h1 className='text-3xl font-bold mb-4'>
            Detalle del producto:
            {id}
        </h1>
        {product ? (<h2> {product.nombre} </h2>): (<p>Producto no encontrado</p>)}
       
    </div>
)
}

export default DetallesProductos
