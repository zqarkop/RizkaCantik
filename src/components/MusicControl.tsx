import { Volume2, VolumeX } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface MusicControlProps {
  url: string;
  isPlaying: boolean;
  onTogglePlay: () => void;
  startTime?: number;
}

export function MusicControl({ url, isPlaying, onTogglePlay, startTime = 0 }: MusicControlProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio(url);
      audio.loop = true;
      audio.volume = 0.4;
      
      // Event listener for when audio metadata is loaded
      audio.addEventListener('loadedmetadata', () => {
        if (startTime > 0 && audio.duration > startTime) {
          audio.currentTime = startTime;
        }
      });

      // Loop back to startTime when the audio ends
      audio.addEventListener('timeupdate', () => {
        if (audio.currentTime >= audio.duration - 0.5) {
          audio.currentTime = startTime;
          audio.play().catch(e => console.error("Loop play failed", e));
        }
      });
      
      audioRef.current = audio;

      audio.addEventListener('error', () => {
        console.error("Failed to load audio file");
        setHasError(true);
      });
    }

    if (isPlaying && audioRef.current) {
      if (startTime > 0 && audioRef.current.currentTime === 0 && audioRef.current.readyState >= 1) {
         audioRef.current.currentTime = startTime;
      }
      
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Auto-play prevented", error);
          // Let the parent know playing failed so UI can update
          if (isPlaying) {
             onTogglePlay();
          }
        });
      }
    } else {
      audioRef.current.pause();
    }

    return () => {
      // Cleanup happens on unmount, but we keep the audio alive while component exists
    };
  }, [isPlaying, url, onTogglePlay]);

  if (hasError) return null;

  return (
    <button
      onClick={onTogglePlay}
      className="fixed top-4 right-4 z-50 p-3 bg-white/60 backdrop-blur-md rounded-full shadow-lg text-romantic-500 hover:text-romantic-600 hover:bg-white/80 transition-all duration-300"
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
    </button>
  );
}
