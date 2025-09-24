
import React from 'react';
import { UserIcon, SettingsIcon } from './Icons';

interface HeaderProps {
  onProfileClick: () => void;
  onSettingsClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onProfileClick, onSettingsClick }) => {
  return (
    <header className="sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-md z-30">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <div className="flex items-center space-x-2">
            <img src="/an-logo.png" alt="Logo" className="h-10 w-10"/>
            <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100">AN Fractures</h1>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={onProfileClick} className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <UserIcon className="w-6 h-6" />
          </button>
          <button onClick={onSettingsClick} className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <SettingsIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
