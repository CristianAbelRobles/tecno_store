
import './footer.css'; 
import { RiFacebookBoxFill, RiInstagramLine, RiYoutubeLine, RiTwitterLine } from "react-icons/ri";

const Footer = () => {
    return (
            <footer className="d-flex bg-dark py-5 mt-3">
                <div className="d-flex justify-content-between align-items-center bg-dark container">
                    <div className="logoFooter">
                        <a href="/"><img className="img-fluid" src="./image/tecno_store_logo_deg.png" alt="logo"/></a>
                    </div>
                    <div className="footer__text">
                        <p>Sitio Creado con React por Cristian Robles - Todos los derechos reservados</p>
                    </div>
                    <div className="footer__redes">
                        <RiFacebookBoxFill />
                        <RiInstagramLine />
                        <RiYoutubeLine />
                        <RiTwitterLine />
                    </div>
                </div>
            </footer>
    )
};

export default Footer;