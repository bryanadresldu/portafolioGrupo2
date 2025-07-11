import { useState } from "react"
import { Main } from '../main/Main';
import './Header.css';
import { Link } from "react-router";

const Header = () => {
    const [menuActive, setMenuActive] = useState(false)
    const toggleMenu = () => {
        setMenuActive(!menuActive)
    }
    const closeMenu = () => {
        setMenuActive(false)
    }
    return (

        <header>
            <nav className="navbar__container">
                <div className="navbar__logo">Grupo 2</div>
                <div className={`header__barra ${menuActive ? "active" : ""}`}>
                    <ul className="navbar__menu">
                        <li><a href="#navbar" onClick={closeMenu}>Inicio</a></li>
                        <li><a href="#about" onClick={closeMenu}>Acerca de nosotros</a></li>
                        <li><a href="#project" onClick={closeMenu}>Proyectos</a></li>
                        <li><a href="#trajectory" onClick={closeMenu}>Trayectoria</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contactos</a></li>
                        <li><Link to="/login" onClick={closeMenu}>Ingresar</Link></li>
                        <li><Link to="/register" onClick={closeMenu}>Registrarse</Link></li>
                    </ul>
                </div>
                <div className="header__hamburger" onClick={toggleMenu}>
                    <i className="fas fa-bars hamburger"></i>
                </div>
            </nav>
            <Main />
        </header>

    )
}

export default Header