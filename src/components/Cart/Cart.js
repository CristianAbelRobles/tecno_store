import { useContext, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import Card from 'react-bootstrap/Card';
import CartContext from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import CartEmpty from "./CartEmpty";
import { IconContext } from "react-icons";
import { createOrder } from "../../utils/orders";
import OrderModal from "../OrderModal/OrderModal";
import './cart.css'; 

const Cart = () => {
  const { cart, total, removeItem, clear } = useContext(CartContext);

  const [mail, setMail] = useState("");
  const [repeatMail, setRepeatMail] = useState("");
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [orderId, setOrderId] = useState();

  const isDisabled = mail !== repeatMail || mail === '' ||  repeatMail === '' || nombre === '' || tel === '';

  const handleRemove = (itemId) => {
    removeItem(itemId);
  }

  const handleOpen = () => setShowModal(true);

  const handleClose = () => setShowModal(false);

  const handleBuy = async () => {
    const newOrder = {
      buyer: {nombre, mail, tel},
      items: cart,
      estado: "generada",
      total
    };
    const newOrderId = await createOrder(newOrder);
    setOrderId(newOrderId);
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
            <i className="bi bi-cart-x"></i> VACIAR CARRITO
            </button>
            <Button as={Link} to="/" className="mx-3 customButtomBlue">
            <i className="bi bi-arrow-left-short"></i> SEGUIR COMPRANDO
            </Button>
            <button variant="success" className="mx-3 customButtomGreen" onClick={handleOpen}>
              <i className="bi bi-cart-check"></i> TERMINAR COMPRA
            </button>
          </div>
          
        </>
      )}
      {!showTable && (
        <CartEmpty/>
      )}
      <OrderModal
        setMail={setMail}
        setRepeatMail={setRepeatMail}
        setNombre={setNombre}
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