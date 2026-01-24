import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            {/* Logo de la tienda */}
            <h3 className="nav-logo">ElectroShop</h3>

            {/* Enlaces de navegación (3 categorías) */}
            <div className="nav-categories">
                <a href="/" className="nav-link">Smartphones</a>
                <a href="/" className="nav-link">Tablets</a>
                <a href="/" className="nav-link">Notebooks</a>
            </div>

            {/* Widget del carrito */}
            <CartWidget />
        </nav>
    );
};

export default NavBar;