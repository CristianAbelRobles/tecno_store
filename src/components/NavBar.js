import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    Tecno Store
                </Navbar.Brand>
                <Nav className="me-auto">      
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#home">Armá tu PC</Nav.Link>
                    <Nav.Link href="#">PC Armadas</Nav.Link>
                    <Nav.Link href="#">Hardware</Nav.Link>
                    <Nav.Link href="#">Periféricos</Nav.Link>
                    <Nav.Link href="#">Notebooks</Nav.Link>
                    <Nav.Link href="#">Monitores</Nav.Link>
                    <Nav.Link href="#">Ver todo</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;