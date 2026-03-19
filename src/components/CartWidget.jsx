import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    // 1. Traemos la cantidad total del contexto
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to='/cart' style={{ 
            display: 'flex', 
            alignItems: 'center', 
            textDecoration: 'none', 
            color: 'white', 
            position: 'relative', // Necesario para posicionar la burbuja
            padding: '5px'
        }}>
            
            {/* Ícono de carrito minimalista (URL actualizada) */}
            <img 
                src="https://img.icons8.com/m_sharp/200/FFFFFF/shopping-cart--v1.png" 
                alt="cart-widget" 
                style={{ width: '28px', height: '28px' }}
            />
            
            {/* 2. Burbuja del contador: Ahora flotante arriba a la derecha */}
            {totalQuantity > 0 && (
                <span style={{ 
                    position: 'absolute',
                    top: '-5px',
                    right: '-10px',
                    backgroundColor: '#e74c3c', // Un rojo más vibrante
                    color: 'white', 
                    borderRadius: '50%', 
                    width: '20px',
                    height: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    fontSize: '0.75rem',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}>
                    {totalQuantity}
                </span>
            )}
        </Link>
    );
};

export default CartWidget;