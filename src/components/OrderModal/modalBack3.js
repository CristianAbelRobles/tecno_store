
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import './orderModal.css';

const OrderModal = ({ showModal, onClose, onBuy, orderId, mail, setMail, repeatMail, setRepeatMail, nombre, setNombre, tel, setTel, isDisabled }) => {

  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header className="bg-success" closeButton>
        <Modal.Title className="text-white">FINALIZAR COMPRA</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control 
            requiered
            name="nombre" 
            type="text" 
            placeholder="Ingrese nombre" 
            onChange={ev => setNombre (ev.target.value)}
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
        <Form.Group className="my-2 d-flex justify-content-around" controlId="formBasicEmail">
          {!orderId && (
            <>
              <Button className="fs-4" variant="danger" onClick={onClose}>
                CANCELAR
              </Button>
              <Button className="fs-4" disabled={isDisabled} variant="success" onClick={onBuy}>
                COMPRAR
              </Button>
            </>
          )}
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        {orderId && (
          <div className='footerOrderSuccess text-center'>
            <Alert>
              <p>¡Felicitacidades! Su compra se realizo con exito, puede seguir su pedido con el siguiente codigo:</p>
              <span className="fs-3 bg-warning p-2">{orderId}</span>
            </Alert>
            <Link to='/'>
              <Button className="fs-4" variant="primary">
                VOLVER AL INICIO
              </Button>
            </Link>
          </div>
        )}
      </Modal.Footer>
    </Modal>
  );
}
 
export default OrderModal;