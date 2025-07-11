import { Link } from "react-router-dom";
import piePagina from '../../assets/hombreContact.webp';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="container" id="contact" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">

            <div className="footer" data-aos="fade-right" data-aos-delay="200">
                <h2 className="footer__title">Contáctanos</h2>
                <div className="footer__icons">
                    <a href="https://facebook.com" className="fab fa-facebook"></a>
                    <a href="https://twitter.com" className="fab fa-x-twitter"></a>
                    <a href="https://github.com"><i className="fab fa-github"></i></a>
                    <a href="https://wa.me/" className="fab fa-whatsapp"></a>

                    <Link to="/memes" className="fa-solid fa-face-smile-wink" title="Ver memes divertidos"></Link>
                </div>
                <p className="footer__copy">Derechos reservados &copy; Grupo 2</p>
            </div>

            <figure className="footer__img" data-aos="fade-up" data-aos-delay="300">
                <img src={piePagina} className="footer__picture" alt="contactme" />
            </figure>
        </footer>
    );
};

export default Footer;
