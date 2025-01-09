import Footer from "../home/components/footer/Footer";
import Navbar from "../home/components/navBar/Navbar";

import "./mainProjectsPage.css";

function MainProjectsPage() {
    return (
        <>
        <div className="mainPage">
            <Navbar />
            <div className="mainContainer">
                <h1>Proyectos</h1>
                <div className="dd1">
                    <div className="dd2">
                        <div className="botones">
                            <button id="b1"></button>
                            <button id="b2"></button>
                            <button id="b3"></button>
                        </div>
                        <div className="lista">
                            <ul>
                                <li>Backend</li>
                                <li>Frontend</li>
                                <li>Fullstack</li>
                                <li>Videos</li>
                            </ul>
                        </div>
                    </div>
                    <div className="dd3">
                        <div className="arriba">
                            <h3>Recientes</h3>
                            <h2>Alejandro Abdala</h2>
                        </div>
                        <div className="proyectos">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
  }

export default MainProjectsPage;