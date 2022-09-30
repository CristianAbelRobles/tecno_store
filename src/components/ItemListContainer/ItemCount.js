import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import './itemCount.css'; 

const ItemCount = () => {
    const item = {
        id: 1,
        Nombre: "Teclado Corsair",
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
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.Url} />
                <Card.Body>
                    <Card.Title>{item.Nombre}</Card.Title>
                    <Card.Text>
                        {item.Detalle}
                    </Card.Text>
                    <Card.Text className="numItemCount">
                        {Count}
                    </Card.Text>
                    <Card.Text>
                        Unidades
                    </Card.Text>

                    <div className="d-flex justify-content-around">
                        <Button onClick={incCount} variant="outline-primary"> + Agregar</Button>
                        <Button onClick={decCount} variant="outline-danger"> - Quitar</Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemCount