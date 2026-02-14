import React from 'react';
import Item from './Item';


const ItemList = ({ products }) => {
    return (
        <div className="products-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {products.map(prod => (
                <Item key={prod.id} {...prod} />
            ))}
        </div>
    );
};

export default ItemList;