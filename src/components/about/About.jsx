import './About.css';


const About = () => {
    return (
        <section id="about" className="about">
            <div className="about__content">
                <h2 className="about__title">Acerca de nosotros</h2>
                <p className="about__paragraph">
                    Somos estudiantes de Desarrollo de Software en la Escuela Politécnica Nacional, apasionados por la tecnología y comprometidos con crear soluciones innovadoras y funcionales. 
                </p>
                <p className="about__paragraph">
                    Estamos en constante aprendizaje, explorando nuevas herramientas, lenguajes y metodologías que nos permiten crecer profesionalmente y aportar con ideas frescas a cada proyecto.
                </p>
                <a href="#" className="btn btn__light">Ver nuestro Github</a>
            </div>


        </section>

    )
}

export default About