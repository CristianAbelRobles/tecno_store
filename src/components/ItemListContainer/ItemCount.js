import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

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
        <div className='d-flex flex-column'>
            <div className="d-flex countContainer justify-content-center mb-2">
                <div className="d-flex">
                    <Button onClick={handleSubtract} className='customButomBlue buttomCount' disabled={count <= initial}> - </Button>
                    <div className='d-flex text-center justify-content-center align-items-center'>
                        <label className='fs-3' style={{ width: '10rem' }}>
                            {count}
                        </label>
                    </div>
                    <Button onClick={handleAdd} className='customButomBlue buttomCount' disabled={count >= stock}> + </Button>
                </div>
            </div>
            <Button variant="success" className='customButomGreen' disabled={count <= 0} onClick={handleClick}>
                AGREGAR AL CARRITO
            </Button>
            <Link to='/'>
                <Button className='customButomBlue' >
                    VOLVER
                </Button>
            </Link>
        </div>
    )
}

export default ItemCount
