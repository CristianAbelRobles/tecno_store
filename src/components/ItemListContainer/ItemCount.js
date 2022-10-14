import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import './itemCount.css'; 

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));
  
    const handleSubtract = () => {
      setCount(count - 1)
    }
  
    const handleAdd = () => {
      setCount(count + 1)
    }
  
    const handleClick = () => onAdd(count);
  
    useEffect(() => {
        setCount(parseInt(initial));
    },[initial])

    return (
        <div>
            <div className="">
                <Button onClick={handleSubtract} variant="outline-primary fs-4"> - </Button>
                <label className="fs-3" style={{ width: '4rem' }}>
                    {count}
                </label>
                <Button onClick={handleAdd} variant="outline-primary fs-4"> + </Button>
            </div>
            <div>
                <Button variant="primary" disabled={stock <= 0} onClick={handleClick}>
                    Agregar al  Carrito
                </Button>
            </div>
        </div>
    )
}

export default ItemCount