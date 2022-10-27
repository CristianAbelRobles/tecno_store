import { useContext, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import Card from 'react-bootstrap/Card';
import CartContext from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import CartEmpty from "./CartEmpty";
import { IconContext } from "react-icons";
import { createOrder } from "../../utils/orders";
import OrderModal from "../OrderModal/OrderModal";
import './cart.css'; 

const buyerMock = {
  name: 'cristian',
  phone: '1132316444',
  email: 'cristian@gmail.com'
}

const Cart = () => {

  const [mail, setMail] = useState("");
  const [repeatMail, setRepeatMail] = useState("");
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");

  const isDisabled = mail !== repeatMail || mail === '' ||  repeatMail === '' || nombre === '' || tel === '';

  const { cart, total, removeItem, clear } = useContext(CartContext);
  const [user, setUser] = useState(buyerMock);
  const [showModal, setShowModal] = useState(false);
  const [orderId, setOrderId] = useState();
  const [orderProcess, setOrderProcess] = useState(false)

  const handleRemove = (itemId) => {
    removeItem(itemId);
  }

  const handleOpen = () => setShowModal(true);

  const handleClose = () => setShowModal(false);

  const handleBuy = async () => {
    setOrderProcess(true)
    const newOrder = {
      buyer: buyerMock,
      items: cart,
      total
    };
    const newOrderId = await createOrder(newOrder);
    setOrderId(newOrderId);
    setOrderProcess(false)
    clear();
  }

  const showTable = cart.length > 0

  return (
    <Container className="mt-5">
      <h1 className="text-center">CARRITO DE COMPRAS</h1>
      {showTable && (
        <>
          <Table striped bordered hover className="align-middle">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <Card.Img variant="top" src={item.pictureUrl} style={{ width: '10rem' }}/>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <IconContext.Provider value={{ color: "red" }}>
                          <BsTrash onClick={() => handleRemove(item.id)}/>
                      </IconContext.Provider>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <h3 className="my-5 text-end">Total: $ {total}</h3>
          <div className="text-center">
            <button onClick={() => { clear() }} className="mx-3 customButtomRed">
                VACIAR CARRITO
            </button>
            <button as={Link} to="/" className="mx-3 customButtomBlue">
                SEGUIR COMPRANDO
            </button>
            <button variant="success" className="mx-3 customButtomGreen" onClick={handleOpen}>
              TERMINAR COMPRA
            </button>
          </div>
          
        </>
      )}
      {!showTable && (
        <CartEmpty/>
      )}
      <OrderModal
        mail={mail}
        setMail={setMail}
        repeatMail={repeatMail}
        setRepeatMail={setRepeatMail}
        nombre={nombre}
        setNombre={setNombre}
        tel={tel}
        setTel={setTel}
        isDisabled={isDisabled}
        showModal={showModal}
        onClose={handleClose}
        onBuy={handleBuy}
        orderId={orderId}
      />
    </Container>
  );
}
 
export default Cart;