import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import Carousel from "../Carousel/Carousel";
import { Link } from "react-router-dom";
import "../CartWidget/CartWidget.css";

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" className="sticky-top">
                <Container className="justify-content-between">
                    <Navbar.Brand as={Link} to='/'>
                        <img
                            className="logo"
                            width="300px"
                            src="https://firebasestorage.googleapis.com/v0/b/tecno-store-cr.appspot.com/o/tecno-store-logo.png?alt=media&token=8c211d7a-b45f-4cb8-9eaf-cda40fec4ec8"
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">  
                        <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
                        <Nav.Link as={Link} to='/category/pcArmadas'>PC Armadas</Nav.Link>
                        <Nav.Link as={Link} to='/category/monitores'>Monitores</Nav.Link>
                        <Nav.Link as={Link} to='/category/placasVideo'>Placas de Video</Nav.Link>
                        <Nav.Link as={Link} to='/category/teclados'>Teclados</Nav.Link>
                        <Nav.Link as={Link} to='/category/mouse'>Mouse</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
            <Carousel/>
        </>
    )
}

export default NavBar;