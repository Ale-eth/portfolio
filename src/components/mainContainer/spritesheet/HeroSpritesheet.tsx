import { useState, useEffect } from 'react';

import './heroSpritesheet.css';


function HeroText() {
    const frames = 
    [
    "src/assets/bg-spritesheet/svg/1.svg",
    "src/assets/bg-spritesheet/svg/2.svg",
    "src/assets/bg-spritesheet/svg/3.svg",
    "src/assets/bg-spritesheet/svg/4.svg",
    "src/assets/bg-spritesheet/svg/5.svg",
    "src/assets/bg-spritesheet/svg/6.svg",
    "src/assets/bg-spritesheet/svg/7.svg",
    "src/assets/bg-spritesheet/svg/8.svg"
    ];

    const [frame, setFrame] = useState(frames[0]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFrame(currentFrame => {
                const currentIndex = frames.indexOf(currentFrame);
                const nextIndex = (currentIndex + 1) % frames.length;
                return frames[nextIndex];
            });
        }, 600); // 350ms = 0.35 seconds

        return () => clearInterval(intervalId);
    }, []); 


    return (
        <>
            <div className='heroImg'>
                <img src={frame} alt="" />
            </div>
        </>
    )
}

export default HeroText;