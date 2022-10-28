import './ItemListContainer.css';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getAllProducts, getProductsByCategory } from '../../utils/Products';
import { Spinner } from 'react-bootstrap';

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
            <Spinner as="span" animation="border" size="lg" role="status" aria-hidden="true" /> CARGANDO PRODUCTOS ...
          </Container>
        ) : (
          <Container>
            <h1 className='mt-3 top_title text-center'>PRODUCTOS</h1>
            <h3 className="greeting text-center">{greeting}</h3>
            <ItemList products={products} />
        </Container>
        )}  
    </> 
  );
}

export default ItemListContainer;


