import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

function CartEmpty() {
	return (
		<Container className="d-flex flex-column text-center align-items-center mt-5">
			<h1 className="">Carrito vacío</h1>
			<video loop autoPlay className="">
				<source src="./image/empty_cart.mp4" type="video/mp4" alt="Carrito Vacio" loading="lazy"></source>
			</video>
			<Button as={Link} to="/" className="customButomBlue">
					¡VAMOS DE COMPRAS!
			</Button>

		</Container>
	)
}

export default CartEmpty


