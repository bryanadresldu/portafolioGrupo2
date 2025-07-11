import {Link} from 'react-router'
import Footer from "../components/footer/Footer"

const Login = () => {
    return (
        <>

            <section className="login__container">
                <h1 className="login__title" >Inicio de sesión</h1>
                <button className="btn__container ">
                    <Link to="/">Regresar</Link>
                </button>

            </section>
            <Footer/>

            
        </>

    )
}

export default Login