import './heroText.css'


function HeroText() {
    return (
        <>
            <div className='heroContainer'>
                <div className='heroBienvenido'>
                    <h1>¡Bienvenido a mi Portfolio!</h1>
                </div>

                <div className='heroImg'>
                    <img src="src/assets/bgsvg.svg" alt="" />
                </div>


                <div className='heroText'>
                    <p>Soy Ale, un desarrollador de software apasionado por la tecnologia.</p>
                    <p>Vivo en Tandil, provincia de Buenos Aires, Argentina.</p>
                    <p>Actualmente estoy terminando mi carrera como desarrollador de aplicaciones en la universidad de ciencias exactas de Unicen en Tandil.</p>
                    <p>Tambien, trabajo de forma remota como desarrollador backend en Apexlict, una empresa de desarrollo de software ubicada en Guayaquil, Ecuador.</p>
                </div>
            </div>
        </>
    )
}

export default HeroText;