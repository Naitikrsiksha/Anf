
import React from 'react';

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gray-100 flex items-center justify-center z-50 animate-fadeOut">
      <div className="w-48 h-48 animate-pulse">
        <img src="/an-logo.png" alt="AN Fractures Clinic Logo" className="w-full h-full object-contain" />
      </div>
      <style>{`
        @keyframes fadeOut {
          0% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 0; }
        }
        .animate-fadeOut {
          animation: fadeOut 3s forwards;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
