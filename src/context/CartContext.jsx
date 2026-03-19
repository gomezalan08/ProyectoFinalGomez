import { createContext, useState } from "react";

// 1. Creamos el contexto (el megáfono)
export const CartContext = createContext();

// 2. Creamos el Provider (el proveedor de los datos)
export const CartProvider = ({ children }) => {
    // Estado para guardar los productos agregados
    const [cart, setCart] = useState([]);

    // Función para agregar un producto
    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            console.error('El producto ya fue agregado al carrito');
        }
    };

    // Función para eliminar un solo producto
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };

    // Función para vaciar todo el carrito de golpe
    const clearCart = () => {
        setCart([]);
    };

    // Función para verificar si un producto ya está en el carrito
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    // Calculamos el total de unidades (para el ícono del NavBar)
    const totalQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);

    // Calculamos el dinero total a pagar
    const total = cart.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0);

    return (
        // Proveemos todos estos datos y funciones al resto de la app
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    );
};