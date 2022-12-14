import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS DE BOOTSTRAP
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { CartProvider } from './contexts/CartContext';

function App() {
  
  return (
    <>
      <BrowserRouter basename='/tecno_store'>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
              <Route path='/item/:id' element={<ItemDetailContainer greeting={'Detalle del Producto'} />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </CartProvider>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;


