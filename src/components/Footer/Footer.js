
import './footer.css'; 
import { RiFacebookBoxFill, RiInstagramLine, RiYoutubeLine } from "react-icons/ri";
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
            <footer className="bg-dark py-5 mt-3">
                <div className="d-flex justify-content-between align-items-center bg-dark container">
                    <div className="logoFooter">
                        <img className="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/tecno-store-cr.appspot.com/o/tecno_store_logo.png?alt=media&token=bbc77a53-67f2-4f17-b65f-bcb310a2acd5" alt="logo"/>
                    </div>
                    <div className="footer__text">
                        <span>Sitio Creado con React por Cristian Robles - Todos los derechos reservados</span>
                    </div>
                    <div className="footer__redes d-flex flex-row">
                        <div className='redes_face mx-2'>
                            <RiFacebookBoxFill />
                        </div>
                        <div className='redes_instagram mx-2'>
                            <RiInstagramLine />
                        </div>
                        <div className='redes_youtube mx-2'>
                            <RiYoutubeLine />
                        </div>
                    </div>
                </div>
            </footer>
    )
};

export default Footer;

                        
                        
                        
                        