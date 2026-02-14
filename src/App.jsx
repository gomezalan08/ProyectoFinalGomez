import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
// Importamos el detalle (aunque aún no exista el archivo, lo crearemos pronto)
import ItemDetailContainer from './components/ItemDetailContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Ruta Raíz: Muestra todos los productos */}
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a ElectroShop!" />} />
          
          {/* Ruta Categoría: Muestra productos filtrados (ej: /category/celulares) */}
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos filtrados" />} />
          
          {/* Ruta Detalle: Muestra un solo producto (ej: /item/1) */}
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          
          {/* Ruta 404: Por si escriben cualquier cosa en la URL */}
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;