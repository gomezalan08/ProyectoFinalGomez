import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getProductById } from '../asyncMock';
import ItemDetail from './ItemDetail';
import './ItemListContainer.css'; 

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);
        getProductById(itemId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
            
    }, [itemId]); 

    return (
        <div className="detail-container">
            {loading 
                ? <h2>Cargando producto...</h2> 
                : product && <ItemDetail {...product} />
            }
        </div>
    );
};

export default ItemDetailContainer;