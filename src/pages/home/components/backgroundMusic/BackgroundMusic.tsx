import { useEffect } from "react";
import React, { useRef, useState } from "react";

import './backgroundMusic.css'
import Test from "../mainContainer/Test";

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';  


const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.01);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };


  // Volumen inicial al 50%
  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value); // Convertir el valor a un número decimal
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume; // Ajustar el volumen del audio
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume; // Ajusta el volumen al 20% cuando carga
    }
  }, []); // Solo se ejecuta una vez al cargar el componente



  function guardar(){
    <input
    className="volumeInput"
    type="range"
    min="0" // Volumen mínimo
    max="0.07" // Volumen máximo
    step="0.01" // Incrementos de ajuste
    value={volume}
    onChange={handleVolumeChange}
    />
    }

  return (
    <div className="volumeContainer">
      <audio ref={audioRef} src="src/assets/background-music.mp3" loop />
      <div className="volumeComponent">
      <label>
        {volume > 0 ? (
          <img onClick={togglePlay} src="src/assets/icons/volumeOn-svg.svg" alt="Volume Icon" className="volumeOnIcon" />
        ) : (
          <img onClick={togglePlay} src="src/assets/icons/volumeOff-svg.svg" alt="Muted Icon" className="volumeOffIcon" />
        )}

        <Test />
      </label>
      </div>
      <p className="volumenP">¡ESCÚCHA LO-FI!</p>
      
    </div>
  );
};

export default BackgroundMusic;




