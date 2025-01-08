import { Link } from "react-router-dom";
import Navbar from "../../home/components/navBar/Navbar";
import Guy from "./guy/Guy";

import './mainAboutPage.css'



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
                        <h3>Me llamo Alejandro, soy desarrollador de software Backend (aunque estoy estudiando a fondo Frotend con React), tengo 25 años y estoy terminando mi carrera como desarrollador de software en la universidad de Ciencias Exactas de Tandil. Tambien, trabajo como desarrollador backend</h3>
                     </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
  }

export default MainAboutPage;