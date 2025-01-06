import './mainContainer.css'
import Navbar from '../navBar/Navbar';
import HeroText from './heroText/HeroText';

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

