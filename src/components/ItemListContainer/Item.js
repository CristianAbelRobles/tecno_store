import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './item.css';

const Item = ( { product }) => {
    return (
        <>
            <Card className="my-2 borderCustom" style={{ width: '18rem' }}>
                <div className="overflow">
                    <Card.Img variant="top" className="img-animada" src={product.pictureUrl} />
                </div>
                <Card.Body>
                    <Card.Title>
                        {product.name}
                    </Card.Title>
                    <Card.Text>
                        <span className="fs-5">Precio $ {product.price}</span>
                    </Card.Text>
                    <Card.Text>
                        <span className="fs-5">Disponibles {product.stock}</span>
                    </Card.Text>
                    <Card.Text className='ms-auto'>
                        <Link to={`/item/${product.id}`}>
                            <Button className='customButomBlue'>VER DETALLE</Button>
                        </Link>
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </>
    );
}

export default Item;