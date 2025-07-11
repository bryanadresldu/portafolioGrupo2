import './Project.css';
import portfolio1 from '../../assets/portfolio-1.jpg';


const Project = () => {
    return (
        <section id="project" className="project">
                <h3 className="project__title">Proyectos</h3>
                <div className="project__cards"data-aos="fade-down-left" data-aos-duration="2500">
                    <div className="cards" data-aos="flip-left">
                        <img src={portfolio1} className="card__img" alt="Proyecto" />
                        <div className="card ">
                            <h4 className="card__title">AutoTours</h4>
                            <p className="card__description">Proyecto de alquiler de autos para turismo guiado.</p>
                            <div className="card__buttons">
                                <a href="https://github.com/bryanadresldu/AutoTours.github.io" className="card__category">Repositorio</a>
                                <a href="https://autotours.netlify.app/" className="card__category">Despliegue</a>
                            </div>
                        </div>
                    </div>
                </div>

        </section>
    )
}

export default Project