import React from "react";
import './footer.css';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* ACERCA DE */}
                    <div className="col">
                        <h4>Acerca de</h4>
                        <ul className="listado">
                            <li>
                                <a href="#" className="footer-link">Entre Brujos</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Preguntas frecuentes</a>
                            </li>
                        </ul>
                    </div>
                    {/* AYUDA */}
                    <div className="col">
                        <h4>Ayuda</h4>
                        <ul className="listado">
                            <li><a href="#">Comprar</a></li>
                            <li><a href="#" >Resolución de problemas</a></li>
                            <li><a href="#">Centro de seguridad</a></li>
                        </ul>
                    </div>
                    {/* REDES SOCIALES */}
                    <div className="col">
                        <h4>Redes sociales</h4>
                        <ul className="listado">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                    {/* SERVICIO AL CLIENTE */}
                    <div className="col">
                        <h4>Servicio al cliente</h4>
                        <ul className="listado">
                            <li><a href="#">Contáctenos</a></li>
                            <li><a href="#">Forma De Pago</a></li>
                            <li><a href="#">Número de teléfono</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Entre Brujos  | Todos los derechos reservados  | Castro, Chiloé, Los lagos
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;