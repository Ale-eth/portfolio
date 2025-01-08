import './mainContainer.css'
import Navbar from '../navBar/Navbar';
import HeroText from './heroText/HeroText';
import BackgroundMusic from '../backgroundMusic/BackgroundMusic';

import Test from '../mainContainer/Test';

function MainContainer() {
    return (
        <>
       
        <Navbar />
        <div className="mainContainer">
            <HeroText />
            <BackgroundMusic />
        </div>
        <Test></Test>
        </>
    )
  }

export default MainContainer;

