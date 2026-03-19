import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="item-count" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <div className="controls" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <button onClick={decrement} style={{ padding: '5px 15px', fontSize: '1.2rem', cursor: 'pointer' }}>-</button>
                <h4 style={{ margin: 0, fontSize: '1.2rem' }}>{quantity}</h4>
                <button onClick={increment} style={{ padding: '5px 15px', fontSize: '1.2rem', cursor: 'pointer' }}>+</button>
            </div>
            
            <div>
                {/* Acá es donde se ejecuta el onAdd que está fallando */}
                <button 
                    onClick={() => onAdd(quantity)} 
                    disabled={!stock}
                    style={{ padding: '10px 20px', backgroundColor: '#282c34', color: 'white', border: 'none', borderRadius: '5px', cursor: stock ? 'pointer' : 'not-allowed' }}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount;