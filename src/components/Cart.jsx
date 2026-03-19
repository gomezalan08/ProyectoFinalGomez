import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    // 1. Traemos todo lo que necesitamos de nuestro Contexto
    const { cart, clearCart, totalQuantity, total, removeItem } = useContext(CartContext);

    // 2. Renderizado Condicional: Si el carrito está vacío, mostramos un mensaje
    if (totalQuantity === 0) {
        return (
            <div style={{ textAlign: 'center', marginTop: '100px' }}>
                <h2>No hay items en el carrito 🛒</h2>
                <br />
                <Link to='/' style={{ padding: '10px 20px', backgroundColor: '#282c34', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
                    Volver a la tienda
                </Link>
            </div>
        );
    }

    // 3. Si hay productos, mostramos la lista
    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h2>Tu Carrito de Compras</h2>
            <hr />
            
            {/* Iteramos sobre el array del carrito para mostrar cada producto */}
            {cart.map(p => (
                <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', padding: '15px 0' }}>
                    <img src={p.img} alt={p.name} style={{ width: '60px', borderRadius: '5px' }} />
                    <p style={{ width: '150px' }}><strong>{p.name}</strong></p>
                    <p>Cant: {p.quantity}</p>
                    <p>Precio: ${p.price}</p>
                    <p><strong>Subtotal: ${p.price * p.quantity}</strong></p>
                    
                    {/* Botón para eliminar solo este producto */}
                    <button onClick={() => removeItem(p.id)} style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
                        X
                    </button>
                </div>
            ))}
            
            <h3 style={{ textAlign: 'right', marginTop: '20px', fontSize: '1.5rem' }}>Total a pagar: ${total}</h3>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
                {/* Botón para vaciar todo el carrito */}
                <button onClick={() => clearCart()} style={{ padding: '10px 20px', backgroundColor: '#f0ad4e', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
                    Vaciar Carrito
                </button>
                
                {/* Link para ir al formulario final (lo haremos en el siguiente paso) */}
                <Link to='/checkout' style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
                    Ir al Checkout
                </Link>
            </div>
        </div>
    );
};

export default Cart;