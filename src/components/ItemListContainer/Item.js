import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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