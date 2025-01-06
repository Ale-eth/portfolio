import './mainContainer.css'
import Navbar from '../navBar/Navbar';
import HeroText from './heroText/HeroText';
import BackgroundMusic from '../backgroundMusic/BackgroundMusic';

function MainContainer() {
    return (
        <>
       
        <Navbar />
        <div className="mainContainer">
            <HeroText />
            <BackgroundMusic />
        </div>
        
        </>
    )
  }

export default MainContainer;

