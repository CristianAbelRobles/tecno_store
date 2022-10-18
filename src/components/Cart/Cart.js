import { useContext, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { BsCartCheck, BsTrash, BsFillCartXFill, BsFillBasket2Fill } from "react-icons/bs";
import Card from 'react-bootstrap/Card';
import CartContext from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import CartEmpty from "./CartEmpty";
import { IconContext } from "react-icons";
import { createOrder } from "../../utils/orders";
import OrderModal from "../OrderModal/OrderModal";

const buyerMock = {
  name: 'cristian',
  phone: '1132316444',
  email: 'cristian@gmail.com'
}

const Cart = () => {
  const { cart, total, removeItem, clear } = useContext(CartContext);
  const [user, setUser] = useState(buyerMock);
  const [showModal, setShowModal] = useState(false);
  const [orderId, setOrderId] = useState();

  const handleRemove = (itemId) => {
    removeItem(itemId);
  }

  const handleOpen = () => setShowModal(true);

  const handleClose = () => setShowModal(false);

  const handleBuy = async () => {
    const newOrder = {
      buyer: buyerMock,
      items: cart,
      total
    };
    const newOrderId = await createOrder(newOrder);
    setOrderId(newOrderId);
    clear();
  }

  const showTable = cart.length > 0

  return (
    <Container className='cartContainer'>
      <h1>Carrito de Compras</h1>
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

          <Button 
          onClick={() => { clear() }}
						variant="danger"
						className="mx-3">
              <BsFillCartXFill/> 
						Vaciar carrito
					</Button>
          <Button as={Link} to="/" variant="primary" className="mx-2"><BsFillBasket2Fill/> 
					 Seguir Comprando
          </Button>
            <Button variant="success" className="mx-2" onClick={handleOpen}><BsCartCheck/> 
            Terminar Compra
          </Button>
          <h3>Total: $ {total}</h3>
        </>
      )}
      {!showTable && (
        <CartEmpty/>
      )}
      <OrderModal
        showModal={showModal}
        onClose={handleClose}
        onBuy={handleBuy}
        orderId={orderId}
      />
    </Container>
  );
}
 
export default Cart;