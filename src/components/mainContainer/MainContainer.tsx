import './mainContainer.css'
import Navbar from '../navBar/Navbar';
import HeroSubtext from './heroSubtext/HeroSubtext';

function MainContainer() {
    return (
        <>
        <Navbar />
        <div className="mainContainer">
            <div className='heroText'>
                <h1>¡Bienvenido a mi Portfolio!</h1>
            </div>
            <img src="src/assets/bgsvg.svg" alt="" />
            <HeroSubtext />
            
        </div>
        </>
    )
  }

export default MainContainer;