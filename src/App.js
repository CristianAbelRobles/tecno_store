import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS DE BOOTSTRAP
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/tecno_store'>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
          <Route path='/item/:id' element={<ItemDetailContainer greeting={'Detalle del Producto'} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;


