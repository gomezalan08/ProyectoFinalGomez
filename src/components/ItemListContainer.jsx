import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Importamos las funciones para traer datos
import { getProducts, getProductsByCategory } from '../asyncMock';
// Importamos el componente que pinta la lista (lo crearemos abajo)
import ItemList from './ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    // 1. Estado para guardar los productos
    const [products, setProducts] = useState([]);

    // 2. Obtenemos el ID de la categoría desde la URL
    // (El nombre 'categoryId' debe coincidir con lo que pusimos en App.js: path='/category/:categoryId')
    const { categoryId } = useParams();

    // 3. Efecto: Se ejecuta cuando se monta el componente O cuando cambia la categoría
    useEffect(() => {
        // Definimos qué función usar: si hay categoría, filtramos; si no, traemos todo.
        const asyncFunc = categoryId ? getProductsByCategory : getProducts;

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error);
            });
            
    }, [categoryId]); // IMPORTANTE: El array de dependencias hace que esto reaccione al navegar

    return (
        <div className="list-container">
            <h1 className="greeting">
                {greeting} 
                {/* Agregamos un detalle visual: mostrar qué categoría estamos viendo */}
                <span style={{ textTransform: 'capitalize' }}>
                    {categoryId && ` - ${categoryId}`}
                </span>
            </h1>
            
            {/* 4. Renderizamos la lista enviándole los productos como props */}
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;