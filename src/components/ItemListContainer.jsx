import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../services/config'; 
import ItemList from './ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); 
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        const productsRef = categoryId 
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products");

        getDocs(productsRef)
            .then((snapshot) => {
                const productsAdapted = snapshot.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                setProducts(productsAdapted);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [categoryId]);

    return (
        <div className="list-container">
            <h1 className="greeting">
                {greeting} 
                <span style={{ textTransform: 'capitalize' }}>
                    {categoryId && ` - ${categoryId}`}
                </span>
            </h1>
            {loading ? (
                <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Cargando catálogo... ⏳</h2>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};

export default ItemListContainer;