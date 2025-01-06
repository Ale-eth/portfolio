import './mainContainer.css'
import Navbar from '../navBar/Navbar';
import HeroText from './heroText/HeroText';
import HeroSpritesheet from './spritesheet/HeroSpritesheet';

function MainContainer() {
    return (
        <>
       
        <Navbar />
        <div className="mainContainer">
            <HeroText />
        </div>
        
        </>
    )
  }

export default MainContainer;

