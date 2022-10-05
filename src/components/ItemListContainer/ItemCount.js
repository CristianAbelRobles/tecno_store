import { useState } from "react";
import Button from 'react-bootstrap/Button';
import './itemCount.css'; 

const ItemCount = () => {
    const item = {
        id: 1,
        nombre: "Teclado Corsair",
        Url:"https://www.muycomputer.com/wp-content/uploads/2020/10/Corsair-1.jpg",
        Categoria: "Teclados",
        Detalle: "El K60 RGB PRO, equipado con las nuevas teclas CHERRY VIOLA, ofrece a los jugadores la precisión, el tacto y la fiabilidad que solo ofrecen los teclados mecánicos.",
        Precio: 100,
        Stock: 10
    };

    const [Count, setCount] = useState(1);

    const decCount = () => {
        Count > 1 ? setCount(Count - 1) : setCount(Count)
    }

    const incCount = () => {
        Count < item.Stock ? setCount(Count + 1) : setCount(Count)
    }

    return (
        <div className="">
            <Button onClick={decCount} variant="outline-primary fs-4"> - </Button>
            <label className="fs-3" style={{ width: '4rem' }}>
                {Count}
            </label>
            <Button onClick={incCount} variant="outline-primary fs-4"> + </Button>
        </div>
    )
}

export default ItemCount