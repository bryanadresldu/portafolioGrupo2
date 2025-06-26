import { Main } from '../main/Main';
import './Header.css';

const Header = () => {
    return (

        <header>
            <nav class="navbar__container">
                <p class="navbar__logo">Grupo 2</p>
                <ul class="navbar__menu">
                    <li><a href="#navbar">Inicio</a></li>
                    <li><a href="#about">Acerca de nosotros</a></li>
                    <li><a href="#project">Proyectos</a></li>
                    <li><a href="#trajectory">Trayectoria</a></li>
                    <li><a href="#contact">Contactos</a></li>
                </ul>
            </nav>
            <Main />
        </header>

    )
}

export default Header