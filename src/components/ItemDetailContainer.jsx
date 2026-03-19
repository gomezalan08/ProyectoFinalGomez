import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../services/config'; 
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);
        const productRef = doc(db, "products", itemId);

        getDoc(productRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setProduct({ id: snapshot.id, ...snapshot.data() });
                } else {
                    console.log("El producto no existe en la base de datos");
                }
            })
            .catch((error) => console.error("Error al obtener el detalle:", error))
            .finally(() => setLoading(false));
    }, [itemId]);

    return (
        <div className="detail-container" style={{ padding: '2rem 5%' }}>
            {loading ? (
                <h2 style={{ textAlign: 'center', width: '100%', marginTop: '50px' }}>
                    Cargando información del producto... ⏳
                </h2>
            ) : (
                product ? <ItemDetail {...product} /> : <h2 style={{textAlign: 'center', width: '100%'}}>Producto no encontrado ❌</h2>
            )}
        </div>
    );
};

export default ItemDetailContainer;