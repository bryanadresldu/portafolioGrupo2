import './Main.css';
import { useEffect } from "react"
import Typed from "typed.js"



export const Main = () => {
    useEffect(() => {
        const typed = new Typed("#typed", {
            strings: [
                "Bienvenidos a nuestro portafolio",
                "Conoce nuestros proyectos",
            ],
            typeSpeed: 80,
            loop: true,
            showCursor: false,
        })

        return () => typed.destroy();
    }, [])
    
    return (
        <main className='principal'>
            <h1 className='principal__title' id="typed"></h1>
            <p className='principal__description'>Somos un grupo de estudiantes de Desarrollo de Software</p>
            <a href="#portfolio" className="btn btn__light">Hoja de vida</a>
        </main>
    )
}