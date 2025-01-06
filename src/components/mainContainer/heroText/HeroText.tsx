import './heroText.css'
import HeroSpritesheet from '../spritesheet/HeroSpritesheet';


function HeroText() {
    return (
        <>
            <div className='heroContainer'>
                <div className='heroBienvenido'>
                    <h1>¡Bienvenido a mi Portfolio!</h1>
                </div>

                <div className='heroText'>
                    <p>Soy Ale, un desarrollador de software apasionado por la tecnología.</p>
                </div>

                <HeroSpritesheet />


                <div className='heroText'>
                    <p>Vivo en Tandil, provincia de Buenos Aires, Argentina.</p>
                    <p>Actualmente estoy terminando mi carrera como desarrollador de aplicaciones en la Universidad de Ciencias Exactas de UNICEN en Tandil.</p>
                    <p>También, trabajo de forma remota como desarrollador backend en Apexlict, una empresa de desarrollo de software ubicada en Guayaquil, Ecuador.</p>
                </div>
            </div>
        </>
    )
}

export default HeroText;