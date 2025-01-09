import { Link } from "react-router-dom";
import Navbar from "../../home/components/navBar/Navbar";
import Guy from "./guy/Guy";

import './mainAboutPage.css'
import Footer from "../../home/components/footer/Footer";



function MainAboutPage() {
    return (
        <>
        <div className="mainAbout">
            <Navbar />
            <div className="mainAboutContainer">
            <div className="sobreMi">
                <h1>Sobre mi</h1>
            </div>
                <div className="d1">
                    <div className="d2">
                        <Guy />
                    </div>
                    <div className="d3">
                        <div className="textCont">
                        <h2>¿Quién soy?</h2>
                        <h3>Me llamo Alejandro, soy un desarrollador de software Backend con más de 2 años de experiencia en la industria, 
                        tengo 25 años y estoy terminando mi carrera como desarrollador de software en la Universidad de Ciencias Exactas de UNICEN en Tandil. 
                        También, trabajo como desarrollador Backend remoto en Apexlict, una empresa ubicada en Guayaquil, Ecuador.
                        Soy una persona curiosa por naturaleza, me apasiona crear, investigar y aprender. Disfruto mucho escuchar LOFI o Jazz mientras estudio o hago mis cosas. 
                        Me gusta la ciencia, la tecnología, la matematica, el café, las plantas y el arte.
                        </h3>
                     </div>
                    </div>
                </div>

                <div className="d4">
                    <div className="d5">
                    <h2>Conocimientos técnicos</h2>
                    <h3>
                        <p><span className="spanT">Arquitecturas de software:</span> Monolito, MVC, Microservicios, Hexagonal, Clean</p>
                        <p><span className="spanT">Patrones de diseño:</span> Creacionales, Estructurales, de Comportamiento</p>
                        <p><span className="spanT">Estructuras de datos y algoritmos:</span> Recursividad, Complejidad computacional (Big O)</p>
                        <p><span className="spanT">Metodologias agiles:</span> Scrum, Kanban</p>
                        <p><span className="spanT">Diagramas UML:</span> de Clases, Casos de uso, Deployment</p>
                        <p><span className="spanT">Version Control Systems:</span> Git</p>
                    </h3>
                    </div>
                    <div className="d6">
                        <img src={"src/assets/images/olas-svg.svg"}/>
                    </div>
                </div>

                <div className="d7">
                    <div className="d7-content">
                    <h2>Stack Tecnológico</h2>
                    <h3>
                        <p><span className="spanT">Backend:</span> Java, Springboot</p>
                        <p><span className="spanT">Frontend:</span> Typescript, React</p>
                        <p><span className="spanT">Bases de datos:</span> MySQL, Postgres, migraciones con Flyway</p>
                        <p><span className="spanT">Cloud:</span> Google Cloud Platform (GCP), Amazon Web Services (AWS)</p>
                        <p><span className="spanT">Virtualizacion:</span>Docker, Kubernetes</p>
                    </h3>
                    </div>
                    </div>
                </div>
        </div>
        <Footer />
        </>
    )
  }

export default MainAboutPage;