import { useEffect, useState } from "react";
import { Button, Container, Spinner } from "react-bootstrap";
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
                    <Button className="m-5" variant="success" disabled>
                        <Spinner as="span" animation="border" size="lg" role="status" aria-hidden="true" />L O A D I N G ...
                    </Button>
                </Container>
            ) : (
                <Container>
                    <h1 className="text-center my-5">DETALLE DEL PRODUCTO</h1>
                    {product && <ItemDetail product={product} />}
                </Container> 
            )}  
        </> 
    );
}

export default ItemDetailContainer;



