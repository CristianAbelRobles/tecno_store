import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import "../CartWidget/CartWidget.css";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" className="sticky-top">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        className="logo"
                        width="200px"
                        src="./image/tecno_store_logo_deg.png"
                        alt="logo"
                    />
                </Navbar.Brand>
                <Nav className="me-auto">      
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#armadas">PC Armadas</Nav.Link>
                    <Nav.Link href="#hardware">Hardware</Nav.Link>
                    <Nav.Link href="#perifericos">Periféricos</Nav.Link>
                    <Nav.Link href="#monitores">Monitores</Nav.Link>
                    <Nav.Link href="#todos">Ver todo</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar;