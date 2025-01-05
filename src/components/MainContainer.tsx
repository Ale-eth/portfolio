import './mainContainer.css'
import Navbar from './Navbar';

function MainContainer() {
    return (
        <>
        <Navbar />
        <div className="mainContainer">
            <div className='heroText'>
                <h1>¡Bienvenido a mi Portfolio!</h1>
            </div>
            <div className='heroSubtext'>
                <p>Soy Ale, un desarrollador de software apasionado por lo que hace.</p> 
                <br/>
                <p>Vivo en Tandil, provincia de Buenos Aires, Argentina.</p>
            </div>
            
        </div>
        </>
    )
  }

export default MainContainer;