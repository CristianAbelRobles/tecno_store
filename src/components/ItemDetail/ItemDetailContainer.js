import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { getProduct } from "../../utils/Products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const { id } = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    getProduct(id)
        .then((data) => {
        setProduct(data)
        })
        .catch(error => console.warn(error))
        .finally(() => setLoading(false))
    }, [id])

    return (
        <>
            {loading ? (
                <Container className="text-center">
                    <Spinner as="span" animation="border" size="xl" role="status" aria-hidden="true" /> CARGANDO PRODUCTO ...
                </Container>
            ) : (
                <Container>
                    <h1 className="text-center my-3"> DETALLE DEL PRODUCTO</h1>
                    {product && <ItemDetail product={product} />}
                </Container> 
            )}  
        </> 
    );
}

export default ItemDetailContainer;



