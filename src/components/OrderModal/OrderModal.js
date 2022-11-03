import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const OrderModal = ({ showModal, onClose, onBuy, orderId, setMail, setRepeatMail, setNombre, setTel, isDisabled }) => {
  const { cart, total } = useContext(CartContext);
  return (
    <Modal size="lg" show={showModal} onHide={onClose}>
      <Modal.Header className="bg-success" closeButton>
        <Modal.Title className="text-white text-center">
          {!orderId ? ("FINALIZAR COMPRA"):("¡COMPRA REALIZADA!")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {!orderId && (
        <>
        <div className="container-fluid">
          <div className="row justify-content-around">
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h4>PRODUCTOS:</h4>
              <ul>
                  {cart.map((item) => (
                    <li key={item.id}>
                      <span className="mx-1">{item.quantity}</span>
                      <span className="mx-1">$ {item.price}</span>
                      <span className="mx-1">{item.name}</span>
                    </li>
                  ))}
              </ul>
              <h5 className="my-2">Total: $ {total}</h5>
            </div>
            <div className="col-md-6 border-left border-danger">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control 
                requiered="true"
                name="nombre" 
                type="text" 
                placeholder="Ingrese nombre" 
                onChange={ev => setNombre (ev.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Telefono</Form.Label>
              <Form.Control 
                requiered
                name="tel"
                type="text" 
                placeholder="Ingrese telefono" 
                onChange={ev => setTel (ev.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                requiered
                name="mail" 
                type="email" 
                placeholder="Ingrese email"
                onChange={ev => setMail (ev.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Repita Email</Form.Label>
              <Form.Control 
                requiered
                name="repeatMail" 
                type="email" 
                placeholder="Repita su email"
                onChange={ev => setRepeatMail (ev.target.value)}
                />
            </Form.Group>
            </div>
          </div>
        </div>
            <Form.Group className="my-2 text-center" controlId="formBasicEmail">
                  <Button className="fs-4 mx-1" variant="danger" onClick={onClose}>
                    CANCELAR
                  </Button>
                  <Button className="fs-4 mx-1" disabled={isDisabled} variant="success" onClick={onBuy}>
                    COMPRAR
                  </Button>
            </Form.Group>
          </>
        )}
      </Modal.Body>
        {orderId && (
          <div className='footerOrderSuccess p-3 text-center'>
            <Alert>
              <p>¡Felicitacidades! Su compra se realizo con exito, puede seguir su pedido con el siguiente codigo:</p>
              <span className="fs-3">{orderId}</span>
            </Alert>
            <Modal.Footer className="justify-content-center">
              <Link to='/'>
                <Button className="fs-4" variant="primary">
                  <i className="bi bi-arrow-left"></i> 
                  VOLVER AL INICIO
                </Button>
              </Link>
            </Modal.Footer>
          </div>
        )}
      
    </Modal>
  );
}
 
export default OrderModal;
