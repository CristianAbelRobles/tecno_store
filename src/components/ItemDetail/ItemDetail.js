import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Detail from "./Detail"

const ItemDetail = ({ product }) => {
    const [count, setCount] = useState(0);
    const handleClick = (value) => {
    setCount(value);
};

    return (
    <Container className="d-flex justify-content-around">
        <Detail product={product} />
        {/* <div >
            <Button onClick={() => handleClick(count - 1)}>-</Button>
            <h4>Cantidad de click {count}</h4>
            <Button onClick={() => handleClick(count + 1)}>+</Button>
        </div> */}
    </Container>
    );
}

export default ItemDetail;