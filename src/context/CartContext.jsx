import { createContext, useState, useEffect } from 'react'
import Productos from '../components/Productos';
/* CartProvider es nuestra "Cajita de herramientas, donde vamos a exportar todas las funciones que 
hicimos en App para que quede el código mas limpio
CartContex la variable a la que vamos a poder llamar para usar esas herramientas
children seria todo lo qe tenemos en App
El armado de contexto SIEMPRE son las mismas líneas, siempre la misma estructura

*/


export const CartContex = createContext()

export const CartProvider = ({ children }) => {
    /* Aca vamos a retornar es el provider que es el cartcontext */

    const [cart, setCart] = useState([]);
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);
    const [isAuthenticated, setIsAuth] = useState(false);

    useEffect(() => {
        fetch("/data/data.json")
            .then(respuesta => respuesta.json())
            .then(datos =>
                setTimeout(() => {
                    setProductos(datos)
                    setCargando(false);
                }, 2000) // Simula un retraso de 2 segundos para la carga;
            )
            .catch(error => {
                console.log("Error al cargar los productos:", error);
                setCargando(false);
                setError(true);
            })
    }, []);

    const handleAddToCart = (product) => {
        const productInCart = cart.find((item) => item.id === product.id);
        if (productInCart) {

            setCart(cart.map((item) => item.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity + 1
                } : item));

        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const eliminarDelCarrito = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };


    const eliminarPorUnidad = (productId) => {
        setCart(prevCart => prevCart.map(item => {
            if (item.id === productId){
                return{...item, quantity: item.quantity -1}
            }
            return item;
        }).filter(item => item.quantity > 0))
    }
    const calcularTotal = () => {
        return cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
    };  


    return (
        <CartContex.Provider value={{cart, productos, cargando, error, handleAddToCart, eliminarDelCarrito, eliminarPorUnidad, isAuthenticated, calcularTotal }}>
            {children}
        </CartContex.Provider>
    )
}
 