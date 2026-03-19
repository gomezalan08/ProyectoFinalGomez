import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

// 🔥 IMPORTAMOS EL PROVIDER
import { CartProvider } from './context/CartContext'; 

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* 🔥 ENVOLVEMOS TODO CON EL CARTPROVIDER */}
        <CartProvider>
          <NavBar />
          <Routes>
  <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a ElectroShop!" />} />
  <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos filtrados" />} />
  <Route path="/item/:itemId" element={<ItemDetailContainer />} />
  <Route path="/cart" element={<Cart />} />
  
  {/* 🔥 LA RUTA FINAL */}
  <Route path="/checkout" element={<Checkout />} />
  
  <Route path="*" element={<h1>404 NOT FOUND</h1>} />
</Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;