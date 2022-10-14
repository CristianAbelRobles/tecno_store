import { RiShoppingCart2Line } from "react-icons/ri";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "./item.css";
// import ItemCount from './ItemCount';     // TODAVIA NO DEFINO SI VOY A MOSTRAR EL CONTADOR EN CADA TARJETA, POR AHORA SOLO LO VOY A MOSTRAR EN EL ITEMDETAIL

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
                        <span className="fs-5">Precio $ {product.price}</span>
                    </Card.Text>
                    <Card.Text>
                        <Link to={`/item/${product.id}`}>
                            <button className='buttonCustom'>VER DETALLE <span></span></button>
                        </Link>
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </>
    );
}

export default Item;