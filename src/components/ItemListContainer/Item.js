import { RiShoppingCart2Line } from "react-icons/ri";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "./item.css";
// import ItemCount from './ItemCount';     // TODAVIA NO DEFINO SI VOY A MOSTRAR EL CONTADOR EN CADA TARJETA, POR AHORA SOLO LO VOY A MOSTRAR EN EL ITEMDETAIL

const Item = ( { product }) => {
    return (
        <>
            <Card className="my-2 borderCustom" style={{ width: '18rem' }}>
                <div className="overflow">
                    <Card.Img variant="top" src={product.pictureUrl} />
                </div>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.category}
                    </Card.Text>
                    {/* <Card.Text>
                        {product.detail}
                    </Card.Text> */}
                    <Card.Text>
                        <span className="fs-5">Precio $ {product.price}</span>
                    </Card.Text>
                    <Card.Text>
                        <span className="fs-5">Disponibles {product.stock}</span>
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