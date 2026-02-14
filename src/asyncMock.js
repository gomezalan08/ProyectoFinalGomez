const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'smartphones',
        img: 'https://placehold.co/200x200',
        stock: 25,
        description: 'Descripción del Iphone 12'
    }, // <--- ¡Esta coma es importante!
    {
        id: '2',
        name: 'Samsung S21',
        price: 800,
        category: 'smartphones',
        img: 'https://placehold.co/200x200',
        stock: 15,
        description: 'Descripción del Samsung S21'
    }, // <--- ¡Esta también!
    {
        id: '3',
        name: 'Ipad 8va gen',
        price: 1200,
        category: 'tablets',
        img: 'https://placehold.co/200x200',
        stock: 10,
        description: 'Descripción del Ipad'
    }, // <--- AQUÍ ES DONDE TE FALTABA LA COMA ANTES DE PEGAR LO NUEVO
    {
        id: '4',
        name: 'Macbook Air M2',
        price: 1500,
        category: 'notebooks',
        img: 'https://placehold.co/400x400',
        stock: 5,
        description: 'La notebook más ligera y potente de Apple.'
    }
];

// ... (el resto del código con las funciones getProducts, etc. déjalo igual);

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500);
    });
};