import './CartWidget.css';
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import { Badge } from 'react-bootstrap';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <>
      <Link to="/cart">
      <RiShoppingCart2Line />
      </Link>
      {totalQuantity > 0 && (
        <Badge pill bg="danger">{totalQuantity}</Badge>
      )}
    </>
  );
}
 
export default CartWidget;