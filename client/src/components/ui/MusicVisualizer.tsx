import React from 'react';

const MusicVisualizer: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-10 flex items-end justify-center z-10 pointer-events-none">
      <div className="wave-group flex items-end space-x-1">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="wave h-1 w-1 md:w-1.5 bg-primary-600 rounded-full opacity-70"
            style={{ 
              '--i': i, 
              height: `${Math.random() * 20 + 5}px`,
              animationDelay: `${i * 0.1}s`
            } as React.CSSProperties}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MusicVisualizer;