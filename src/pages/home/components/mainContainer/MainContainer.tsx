import './mainContainer.css'
import Navbar from '../navBar/Navbar';
import HeroText from './heroText/HeroText';
import BackgroundMusic from '../backgroundMusic/BackgroundMusic';
import Footer from '../footer/Footer';

function MainContainer() {
    return (
        <>
       
        <Navbar />
        <div className="mainContainer">
            <HeroText />
            <BackgroundMusic />
        </div>
        <Footer />
        </>
    )
  }

export default MainContainer;

