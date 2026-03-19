import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    // Estilo para el link que está seleccionado (activo)
    const activeStyle = {
        fontWeight: 'bold',
        borderBottom: '2px solid white',
        paddingBottom: '5px'
    };

    return (
        <nav style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '1rem 5%', 
            backgroundColor: '#1a1a1a', // Un negro asfalto muy moderno
            color: 'white',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            position: 'sticky', // Se queda fijo arriba al hacer scroll
            top: 0,
            zIndex: 1000
        }}>
            
            {/* LOGO */}
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                <h1 style={{ margin: 0, fontSize: '1.8rem', fontWeight: 'bold' }}>
                    <span style={{color: '#3498db'}}>Electro</span>Shop
                </h1>
            </Link>

            {/* CATEGORÍAS (Al centro) */}
            <div style={{ display: 'flex', gap: '25px' }}>
                {['smartphones', 'notebooks', 'tablets'].map(cat => (
                    <NavLink 
                        key={cat} 
                        to={`/category/${cat}`}
                        style={({ isActive }) => ({
                            textDecoration: 'none',
                            color: 'white',
                            fontSize: '1.1rem',
                            textTransform: 'capitalize',
                            transition: 'color 0.2s ease',
                            ...(isActive ? activeStyle : {}) // Aplica el estilo si está activo
                        })}
                    >
                        {cat}
                    </NavLink>
                ))}
            </div>

            {/* CARRITO (A la derecha) */}
            <CartWidget />
        </nav>
    );
};

export default NavBar;