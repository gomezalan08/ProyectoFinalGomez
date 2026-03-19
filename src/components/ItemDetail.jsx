import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    // Esta es la función que le estamos enviando al ItemCount
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        const item = { id, name, price, img };
        addItem(item, quantity);
    };

    return (
        <article style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', maxWidth: '400px', margin: '0 auto', marginTop: '20px' }}>
            <header>
                <h2 style={{ textAlign: 'center' }}>{name}</h2>
            </header>
            
            <picture style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={img} alt={name} style={{ width: '100%', maxWidth: '300px', borderRadius: '10px' }} />
            </picture>
            
            <section style={{ margin: '20px 0' }}>
                <p><strong>Categoría:</strong> {category}</p>
                <p><strong>Descripción:</strong> {description}</p>
                <p><strong>Precio:</strong> ${price}</p>
                <p><strong>Stock disponible:</strong> {stock}</p>
            </section>
            
            <footer style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
                            Terminar compra
                        </Link>
                    ) : (
                        /* Acá le pasamos la función al prop onAdd */
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </article>
    );
};

export default ItemDetail;