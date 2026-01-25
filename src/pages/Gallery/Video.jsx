import React, { useRef, useState } from "react";
import {
  FaPlay,
  FaPause,
  
} from "react-icons/fa";

const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  

  

  return (
    <section className="py-12 px-4 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 max-w-3xl mx-auto py-6 leading-tight">
            Our Hotel Stands As A Beacon Of Comfort, Cozy
            And Personalized Service
          </h1>
         
        </div>

        {/* Video */}
        <div className="relative rounded-full overflow-hidden bg-black">
          <video
            ref={videoRef}
            src="/images/video.mp4"
            poster="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
            className="w-full max-h-[600px] object-cover cursor-pointer"
            onClick={togglePlay}
          />

          {/* Center Play Button */}
          {!isPlaying && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-[#ab8c55]/90 flex items-center justify-center hover:scale-110 transition">
                <FaPlay className="text-white text-2xl ml-1" />
              </div>
            </div>
          )}

          {/* Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <button
                  onClick={togglePlay}
                  className="p-3 rounded-full bg-white/20 hover:bg-white/30"
                >
                  {isPlaying ? (
                    <FaPause className="text-white" />
                  ) : (
                    <FaPlay className="text-white ml-0.5" />
                  )}
                </button>

                
              </div>

             
            </div>
          </div>
        </div>
      </div>

      
      <style jsx>{`
        video::-webkit-media-controls {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default Video;
