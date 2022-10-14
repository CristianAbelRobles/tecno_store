import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemListContainer/ItemCount";

const ItemDetail = ({ product }) => {
    const [count, setCount] = useState(0);
    const [showItemCount, setShowItemCount] = useState(true)

    const handleAdd = (value)=> {
        setCount(value);
        setShowItemCount(false);
    };

    return (
    <Container className="d-flex justify-content-around">
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-8">
                    <img src={product.url} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-4 d-flex flex-column align-items-center">
                    <div className="card-body">
                        <h2 className="card-title">{product.nombre}</h2>

                        <p className="card-text text-bg-info">Código del producto : {product.id}</p>
                        <p className="card-text">{product.detalle}</p>
                        <p className="card-text">Precio efectivo o transferencia ${product.price}</p>
                        <p className="card-text"><small className="text-muted">{product.categoria}</small></p>
                        <div>
                            {showItemCount && (<ItemCount
                                initial={1}
                                stock={10}
                                onAdd={handleAdd}
                            />)}
                            {!showItemCount && (
                                <Link to="/cart" className="mt-3">
                                    <Button variant="outline-success"> Terminar Compra</Button>
                                </Link>
                            )}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </Container>
    );
}

export default ItemDetail;



            