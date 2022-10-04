//import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import { Link } from 'react-router-dom';

const Detail = ( { product }) => {
    return (
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
                            <div className="">
                                <Button variant="outline-primary fs-4"> + </Button>
                                <label className="mx-5  fs-3">
                                    1
                                </label>
                                <Button variant="outline-primary fs-4"> - </Button>
                            </div>
                            <div className="mt-3">
                                <Button variant="outline-success"> Agregar al Carrito</Button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Detail;