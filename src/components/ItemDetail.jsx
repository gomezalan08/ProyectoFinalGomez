import React from 'react';
// import ItemCount from './ItemCount'; // Descomenta si ya tienes este componente

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
        <article className="card-detail" style={{ 
            maxWidth: '800px', 
            margin: '50px auto', 
            padding: '20px', 
            display: 'flex', 
            gap: '30px',
            border: '1px solid #eee',
            borderRadius: '10px'
        }}>
            <picture style={{ flex: 1 }}>
                <img src={img} alt={name} className="detail-img" style={{ width: '100%', borderRadius: '10px' }}/>
            </picture>
            
            <section style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <header>
                    <h2 className="detail-title" style={{ fontSize: '2rem' }}>{name}</h2>
                    <p style={{ color: '#666', fontSize: '0.9rem', textTransform: 'uppercase' }}>{category}</p>
                </header>
                
                <p className="detail-description">
                    {description}
                </p>
                
                <p className="detail-price" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    Precio: ${price}
                </p>
                
                <footer className="detail-footer">
                    {/* Aquí va tu ItemCount. 
                        Por ahora mostramos el stock.
                    */}
                    <p>Stock disponible: {stock}</p>
                    
                    {/* <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada: ', quantity)}/> */}
                </footer>
            </section>
        </article>
    );
};

export default ItemDetail;