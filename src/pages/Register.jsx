import {Link} from 'react-router'
import Footer from "../components/footer/Footer"

const Register = () => {
    return (
        <>
            <section className="login__container">
                <h1 className="login__title" >Registro</h1>
                <button className="btn__container ">
                    <Link to="/">Regresar</Link>
                </button>

            </section>
            <Footer/>


        </>
    )
}

export default Register