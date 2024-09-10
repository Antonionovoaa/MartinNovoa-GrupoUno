import React, { useState } from 'react';
import './Header.css';

const Navbar = () => {
    return (
        <header>
            {/*BARRA DE NAVEGACION*/}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Entre Brujos</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Articulos</a>
                            </li>
                            {/*DROPDOWN 1*/}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Ropa
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">Hombre</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Mujer</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Niños</a>
                                    </li>
                                </ul>
                            </li>
                            {/*DROPDOWN 2*/}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Accesorios para el hogar
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">Living y sala de estar</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Cocina</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Comedor</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Dormitorio</a>
                                    </li>
                                </ul>
                            </li>
                            {/*DROPDOWN 3*/}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    jugueteria
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">Vehiculos</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Muñecas</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Niños</a>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;