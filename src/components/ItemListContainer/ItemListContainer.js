import './ItemListContainer.css';
import Container from 'react-bootstrap/Container';
import ItemCount from './ItemCount';

const ItemListContainer = ({ greeting }) => {
  return (
    <Container>
      <h1>Productos</h1>
      <h3 className="greeting">{greeting}</h3>
      <ItemCount/>
    </Container>
  );
}

export default ItemListContainer;