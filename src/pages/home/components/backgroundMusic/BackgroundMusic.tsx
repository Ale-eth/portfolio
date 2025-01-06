import { useEffect } from "react";
import React, { useRef, useState } from "react";

import './backgroundMusic.css'


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

  return (
    <div>
      <audio ref={audioRef} src="src/assets/background-music.mp3" loop />
      <button onClick={togglePlay}>
        {isPlaying ? "Pause" : "Play"}
      </button>

      <label>
        Volumen:
        <input
          className="volumeInput"
          type="range"
          min="0" // Volumen mínimo
          max="0.07" // Volumen máximo
          step="0.01" // Incrementos de ajuste
          value={volume}
          onChange={handleVolumeChange}
        />
      </label>
    </div>
  );
};

export default BackgroundMusic;
