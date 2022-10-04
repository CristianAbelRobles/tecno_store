import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Item = ( { product }) => {
    return (
        <>
            <Card className="my-2" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.url} />
                <Card.Body>
                    <Card.Title>{product.nombre}</Card.Title>
                    <Card.Text>
                        {product.categoria}
                    </Card.Text>
                    <Card.Text>
                        {product.detalle}
                    </Card.Text>
                    <Card.Text>
                        <Link to={`/item/${product.id}`}>
                            <Button variant="primary">
                            Ver detalle
                            </Button>
                        </Link>
                    </Card.Text>
                    <div className="d-flex justify-content-around">
                        <Button variant="outline-primary"> + Agregar</Button>
                        <Button variant="outline-danger"> - Quitar</Button>
                    </div>
                    <Button variant="outline-success"> Agregar al Carrito</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default Item;