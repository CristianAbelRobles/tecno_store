import './ItemListContainer.css';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';

const products = [
  {id: 1, nombre: "Teclado Corsair", url:"https://www.muycomputer.com/wp-content/uploads/2020/10/Corsair-1.jpg", categoria: "Teclados", detalle: "El K60 RGB PRO, equipado con las nuevas teclas CHERRY VIOLA, ofrece a los jugadores la precisión, el tacto y la fiabilidad que solo ofrecen los teclados mecánicos.", precio: 100, stock: 10},
  {id: 2, nombre: "Teclado Red Dragon", url:"https://redragon.es/content/uploads/2021/04/Harpe-Pro-K503-Desktop1356x890-7.jpg", categoria: "Teclados", detalle: "El K60 RGB PRO, equipado con las nuevas teclas CHERRY VIOLA, ofrece a los jugadores la precisión, el tacto y la fiabilidad que solo ofrecen los teclados mecánicos.", precio: 100, stock: 10},
  {id: 3, nombre: "Teclado Logitech", url:"https://i.ytimg.com/vi/bEOVVD7pW2I/maxresdefault.jpg", categoria: "Teclados", detalle: "El K60 RGB PRO, equipado con las nuevas teclas CHERRY VIOLA, ofrece a los jugadores la precisión, el tacto y la fiabilidad que solo ofrecen los teclados mecánicos.", precio: 100, stock: 10}
];

const ItemListContainer = ({ greeting }) => {
  return (
    <Container>
      <h1>Productos</h1>
      <h3 className="greeting">{greeting}</h3>
      <ItemList products={products}/>
    </Container>
  );
}

export default ItemListContainer;