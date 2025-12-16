import { createContext, useState, useEffect } from 'react'

/* CartProvider es nuestra "Cajita de herramientas, donde vamos a exportar todas las funciones que 
hicimos en App para que quede el código mas limpio
CartContex la variable a la que vamos a poder llamar para usar esas herramientas
children seria todo lo qe tenemos en App
El armado de contexto SIEMPRE son las mismas líneas, siempre la misma estructura

*/


export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);
    const [isAuthenticated, setIsAuth] = useState(false);

    useEffect(() => {
  async function cargarProductos() {
    try {
      const response = await fetch(
        "https://68556b276a6ef0ed66326e0d.mockapi.io/Productos"
      );

      const data = await response.json();

      setProductos(data);
    } catch (error) {
      console.error("Error al cargar productos:", error);
      setError(true);
    } finally {
      setCargando(false);
    }
  }

  cargarProductos();
}, []);



    const handleAddToCart = (product, cantidad = 1) => {
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
        setCart(cart.map((item) =>
        item.id === product.id
            ? { ...item, quantity: item.quantity + cantidad }
            : item
        ));
    } else {
        setCart([...cart, { ...product, quantity: cantidad }]);
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

    const vaciarCarrito = () => {
        setCart([]);
        localStorage.removeItem("cart");
    };


    return (
        <CartContext.Provider value={
            {cart, productos, cargando, error, handleAddToCart, eliminarDelCarrito, eliminarPorUnidad, vaciarCarrito ,isAuthenticated , setIsAuth, calcularTotal }}>
            {children}
        </CartContext.Provider>
    )
}
 