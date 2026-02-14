import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({ id, name, img, price, stock }) => {
    return (
        <article className="card-item" style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', width: '250px' }}>
            <header className="header">
                <h2 className="item-header" style={{ fontSize: '1.2rem', margin: '0 0 10px' }}>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="item-img" style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }}/>
            </picture>
            <section style={{ margin: '15px 0' }}>
                <p className="info">Precio: ${price}</p>
                <p className="info">Stock disponible: {stock}</p>
            </section>
            <footer className="item-footer">
                {}
                <Link to={`/item/${id}`} className="option-button" style={{ 
                    backgroundColor: '#333', 
                    color: 'white', 
                    padding: '10px 20px', 
                    textDecoration: 'none', 
                    borderRadius: '5px',
                    display: 'inline-block' 
                }}>
                    Ver detalle
                </Link>
            </footer>
        </article>
    );
};

export default Item;