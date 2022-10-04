import { RiShoppingCart2Line } from "react-icons/ri";
import "./CartWidget.css"
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <Link to="/cart">
      <RiShoppingCart2Line />
      </Link>
  );
};

export default CartWidget;
