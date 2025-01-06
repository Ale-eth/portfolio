import './navbar.css'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function Navbar() {
    return (
        <>
        <div className="navBar">
            <ul>
                <li><a href="https://www.ejemplo.com" target="_blank" rel="noopener noreferrer"> INICIO </a></li>
                <li><a href="https://www.ejemplo.com" target="_blank" rel="noopener noreferrer"> SOBRE MI </a></li>
                <li><a href="https://www.ejemplo.com" target="_blank" rel="noopener noreferrer"> PROYECTOS </a></li>
                <li><a href="https://www.ejemplo.com" target="_blank" rel="noopener noreferrer"> CONTACTO </a></li>
            </ul>
        </div>
        </>
    )
  }

export default Navbar;