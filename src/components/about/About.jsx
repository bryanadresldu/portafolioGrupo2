import './About.css';
import banner1 from '../../assets/student-group.jpg';
import banner2 from '../../assets/software-developer.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about__content">
                        <h2 className="about__title">Acerca de nosotros</h2>
             <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    autoplay={{ delay: 3000 }}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    className="mySwiper">
                    
                        <SwiperSlide className='swiper'>
                        <img src={banner1} alt="Slide 1"/>
                        <p className="about__paragraph">
                            Somos estudiantes de Desarrollo de Software en la Escuela Politécnica Nacional, apasionados por la tecnología y comprometidos con crear soluciones innovadoras y funcionales. 
                        </p>
                         </SwiperSlide>
                        
                        <SwiperSlide className='swiper'>
                        <img src={banner2} alt="Slide 2"/>
                        <p className="about__paragraph">
                            Estamos en constante aprendizaje, explorando nuevas herramientas, lenguajes y metodologías que nos permiten crecer profesionalmente y aportar con ideas frescas a cada proyecto.
                        </p>
                        </SwiperSlide>
                        
                       

                </Swiper>
                 <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn__light">Ver nuestro Github</a>

                    </div>
            

        </section>

    )
}

export default About

