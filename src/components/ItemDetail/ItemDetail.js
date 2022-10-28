import { useContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import ItemCount from "../ItemListContainer/ItemCount";
import "./itemDetail.css";

const ItemDetail = ({ product }) => {
    const { addItem } = useContext (CartContext)
    const [count, setCount] = useState(0);
    const [showItemCount, setShowItemCount] = useState(true)

    const handleAdd = (value)=> {
        setCount(value);
        setShowItemCount(false);
        addItem(product, value);
    };

    return (
    <Container className="d-flex justify-content-around">
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-8">
                    <img src={product.pictureUrl} className="img-fluid rounded-start" alt={product.name}/>
                </div>
                <div className="col-md-4 d-flex flex-column text-center">
                    <div className="card-body">
                        <h2 className="card-title">{product.name}</h2>
                        <p className="card-text text-bg-info">Código del producto : {product.id}</p>
                        <p className="card-text">Cantidad Disponible : {product.stock}</p>
                        <p className="card-text">{product.detail}</p>
                        <p className="card-text">Precio efectivo o transferencia ${product.price}</p>
                        <div className="text-center">
                            {
                                product.stock > 0 ? (
                                    showItemCount ? (
                                            <ItemCount 
                                                stock={product.stock} 
                                                initial={1} 
                                                onAdd={handleAdd} />
                                            ) : (
                                                <>
                                                    <Link to="/cart" className="mt-3">
                                                        <Button variant="success" className='customButomGreen'><i class="bi bi-cart-check"></i> TERMINAR COMPRA</Button>
                                                    </Link>
                                                    <Link to="/" className="mt-3">
                                                        <Button className='customButomBlue'><i class="bi bi-arrow-left"></i> SEGUIR COMPRANDO</Button>
                                                    </Link>
                                                </>
                                            )
                                    ) : (
                                        <>
                                            <span className="fs-3 bg-danger p-1 my-5"><i class="bi bi-exclamation-square"></i> Sin Stock Disponible</span>
                                            <Link to="/" className="mt-3 text-center">
                                                <Button className='customButomBlue'><i class="bi bi-arrow-left"></i> SEGUIR COMPRANDO</Button>
                                            </Link>
                                        </>
                                )
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </Container>
    );
}

export default ItemDetail;


            