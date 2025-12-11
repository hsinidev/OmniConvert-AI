import React, { useMemo } from 'react';

const GalaxyBackground: React.FC = () => {
  // Generate random stars for the background
  const stars = useMemo(() => {
    const starCount = 100;
    return Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      duration: `${Math.random() * 3 + 3}s`,
      opacity: Math.random() * 0.7 + 0.3,
      delay: `${Math.random() * 5}s`
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#020617]">
      {/* Deep Space Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#020617] to-black opacity-90"></div>
      
      {/* Animated Nebulas */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-900/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob opacity-60"></div>
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob opacity-60" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-blue-900/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob opacity-50" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-[20%] left-[40%] w-[400px] h-[400px] bg-pink-900/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob opacity-40" style={{ animationDelay: '6s' }}></div>
      
      {/* Cosmic Dust / Grain */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] brightness-100 contrast-150 mix-blend-overlay"></div>

      {/* Grid Overlay for Modern Tech Feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Twinkling Stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,1)]"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
              animation: `twinkle ${star.duration} ease-in-out infinite`,
              animationDelay: star.delay
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GalaxyBackground;