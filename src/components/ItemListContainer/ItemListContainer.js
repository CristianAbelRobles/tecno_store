import './ItemListContainer.css';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getAllProducts, getProductsByCategory } from '../../utils/Products';
import { Button, Spinner } from 'react-bootstrap';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId)
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))
        .finally(() => setLoading(false))
    } else {
      getAllProducts()
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))
        .finally(() => setLoading(false))
    }
  }, [categoryId])

  return (
    <>
        {loading ? (
            <Container className="text-center">
                <Button className="m-5" variant="success" disabled>
                    <Spinner as="span" animation="border" size="lg" role="status" aria-hidden="true" />L O A D I N G ...
                </Button>
            </Container>
        ) : (
          <Container>
          <h1>Productos</h1>
          <h3 className="greeting">{greeting}</h3>
          <ItemList products={products} />
        </Container>
        )}  
    </> 
  );
}

export default ItemListContainer;


