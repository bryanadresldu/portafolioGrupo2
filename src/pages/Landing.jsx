import Header from "../components/header/Header";
import About from "../components/about/About";
import Project from "../components/project/Project";
import Trajectory from "../components/trajectory/Trajectory";
import Footer from "../components/footer/Footer";

const Landing = () => {
    return (
        <>
            <div data-aos="fade-down">
                <Header/>
            </div>
            <About/>
            <Project/>
            <div data-aos="zoom-in" data-aos-duration="1500">
                <Trajectory/>
            </div>
            <Footer/>
        </>
    )
}

export default Landing