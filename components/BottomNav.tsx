
import React from 'react';
import { View } from '../types';
import { HomeIcon, CalendarIcon, GalleryIcon } from './Icons';

interface BottomNavProps {
  activeView: View;
  setActiveView: (view: View) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeView, setActiveView }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'appointment', label: 'Booking', icon: CalendarIcon },
    { id: 'gallery', label: 'Gallery', icon: GalleryIcon },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-30">
      <div className="container mx-auto px-4 h-20 flex justify-around items-center">
        {navItems.map(item => {
          const isActive = activeView === item.id;
          return (
            <button 
              key={item.id} 
              onClick={() => setActiveView(item.id as View)}
              className={`flex flex-col items-center justify-center space-y-1 w-24 transition-all duration-300 ease-in-out ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400 hover:text-blue-500'}`}
            >
              <item.icon className={`w-7 h-7 transition-transform ${isActive ? 'scale-110' : ''}`} />
              <span className={`text-xs font-semibold transition-opacity ${isActive ? 'opacity-100' : 'opacity-100'}`}>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
