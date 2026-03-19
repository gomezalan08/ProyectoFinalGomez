import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price, stock }) => {
    return (
        <article className="card-producto" style={{ width: '100%', maxWidth: '300px' }}>
            <header>
                <h3 style={{ margin: '15px 0' }}>{name}</h3>
            </header>
            
            <picture>
                <img src={img} alt={name} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }} />
            </picture>
            
            <section style={{ margin: '15px 0', width: '100%' }}>
                <p style={{ margin: '5px 0', fontSize: '1.2rem' }}>Precio: <strong>${price}</strong></p>
                <p style={{ margin: '5px 0', color: stock > 0 ? '#4CAF50' : '#f44336', fontWeight: 'bold' }}>
                    Stock: {stock}
                </p>
            </section>
            
            <footer style={{ marginBottom: '10px' }}>
                <Link to={`/item/${id}`} style={{ 
                    padding: '10px 20px', 
                    backgroundColor: '#2c3e50', 
                    color: 'white', 
                    textDecoration: 'none', 
                    borderRadius: '5px',
                    fontWeight: 'bold',
                    display: 'inline-block'
                }}>
                    Ver detalle
                </Link>
            </footer>
        </article>
    );
};

export default Item;