import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS DE BOOTSTRAP
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import PokemonListContainer from './components/PokemonContainer/PokemonListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <ItemListContainer greeting={"Bienvenidos a la tienda"}/>
      {/* <Accordion /> */}
      <PokemonListContainer />
      <Footer/>
    </div>
  );
}

export default App;
