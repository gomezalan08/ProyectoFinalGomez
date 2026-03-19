import Item from './Item';

const ItemList = ({ products = [] }) => { 
    return (
        <div style={{ 
            display: 'grid', 
            // 🔥 LA MAGIA ESTÁ ACÁ: Le decimos que cree exactamente 4 columnas del mismo tamaño
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '20px',
            padding: '20px',
            maxWidth: '1200px', // Evita que se estiren al infinito en monitores gigantes
            margin: '0 auto' // Centra toda la grilla en la pantalla
        }}>
            {products.map(prod => (
                <Item key={prod.id} {...prod} />
            ))}
        </div>
    );
};

export default ItemList;