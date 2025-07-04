import piePagina from '../../assets/hombreContact.webp';
import "./Footer.css";

const Footer = () => {
    return (

        <footer className="container" id="contact">

            <div className="footer">
                <h2 className="footer__title">Contáctanos</h2>
                <div className="footer__icons">
                    <a href="#" className="fab fa-facebook"></a>
                    <a href="#" className="fab fa-x-twitter"></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                    <a href="#" className="fab fa-whatsapp"></a>
                </div>
                <p className="footer__copy">Derechos reservados &copy; Grupo 2</p>
            </div>

            <figure className="footer__img">
                <img src={piePagina} className="footer__picture" alt="contactme" />
            </figure>
        </footer>

    )
}

export default Footer