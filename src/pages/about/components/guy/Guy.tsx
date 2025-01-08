import { useState } from 'react';
import './guy.css'


function Guy() {
    const frames = [
        "src/assets/images/guy-svg.svg",
        "src/assets/images/guy2-svg.svg"
    ];

    const [frame, setFrame] = useState(frames[0]);

    const handleHover = () => {
        setFrame(frames[1]); // Cambia al segundo frame al hacer hover
    };

    const handleMouseOut = () => {
        setFrame(frames[0]); // Regresa al primer frame al salir del hover
    };

    return (
        <div className="guyImg">
            <img 
                onMouseOver={handleHover} 
                onMouseOut={handleMouseOut} 
                src={frame} 
                alt="Guy Animation" 
            />
        </div>
    );
}

export default Guy;
