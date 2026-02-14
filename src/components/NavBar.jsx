import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Importamos las herramientas de ruteo
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            {/* Logo de la tienda con Link al Home */}
            <Link to="/" style={{ textDecoration: 'none' }}>
                <h3 className="nav-logo">ElectroShop</h3>
            </Link>

            {/* Enlaces de navegación con NavLink */}
            <div className="nav-categories">
                {/* Usamos una función en className para mantener tu clase 'nav-link'
                   y agregarle 'active' si el usuario está en esa URL.
                   ¡Ideal para tu perfil UX/UI! 
                */}
                <NavLink 
                    to="/category/smartphones" 
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                    Smartphones
                </NavLink>
                
                <NavLink 
                    to="/category/tablets" 
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                    Tablets
                </NavLink>
                
                <NavLink 
                    to="/category/notebooks" 
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                    Notebooks
                </NavLink>
            </div>

            {/* Widget del carrito */}
            <CartWidget />
        </nav>
    );
};

export default NavBar;