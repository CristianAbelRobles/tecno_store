import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS DE BOOTSTRAP
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Carousel from './components/Carousel/Carousel';
import Accordion from './components/Accordion/Accordion';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <ItemListContainer greeting={"Bienvenidos a la tienda"}/>
      {/* <Accordion /> */}
      <Footer/>
    </div>
  );
}

export default App;
