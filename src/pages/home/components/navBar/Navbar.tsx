import './navbar.css'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function Navbar() {
    return (
        <>
        <div className="navBar">
            <ul>
                <Link to="/" className='li-items'>INICIO</Link>
                <Link to="about" className='li-items'>SOBRE MI</Link>
                <Link to="/" className='li-items'>PROYECTOS</Link>
                <Link to="/" className='li-items'>CONTACTO</Link>
            </ul>
        </div>
        </>
    )
  }

export default Navbar;