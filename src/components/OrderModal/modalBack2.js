
import { Alert, Button, Form, Modal, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import './orderModal.css';

const OrderModal = ({ showModal, onClose, onBuy, orderId, orderProcess, mail, setMail, repeatMail, setRepeatMail, nombre, setNombre, tel, setTel, isDisabled }) => {

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
            placeholder="Ingrese email"
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
          <Button className="fs-4" variant="danger" onClick={onClose}>
            CANCELAR
          </Button>
          <Button className="fs-4" disabled={isDisabled} variant="primary" onClick={onBuy}>
            COMPRAR
          </Button>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        {!orderId && (
             orderProcess ? (
                <Spinner as="span" animation="border" role="status" aria-hidden="true" size="lg" />
              ) : (
                <></>
              )
          )
        }
        {orderId && (
          <div className='footerOrderSuccess'>
            <Alert>
              <span>¡Felicitacidades! Su compra se realizo con exito, puede seguir su pedido con el siguiente codigo.</span>
              <span>Numero de orden: {orderId}</span>
            </Alert>
            <Link to='/'>
              <Button variant="success">
                Volver al Inicio
              </Button>
            </Link>
          </div>
        )}
      </Modal.Footer>
    </Modal>
  );
}
 
export default OrderModal;