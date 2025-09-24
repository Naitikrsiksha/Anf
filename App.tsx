
import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import HomeView from './views/HomeView';
import AppointmentView from './views/AppointmentView';
import GalleryView from './views/GalleryView';
import Modal from './components/Modal';
import { View, UserProfile } from './types';
import { DOCTORS, CLINIC_EMAIL, PHONE_VERIFICATION_CODE } from './constants';
import { SunIcon, MoonIcon, CheckCircleIcon } from './components/Icons';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeView, setActiveView] = useState<View>('home');
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });
  const [profile, setProfile] = useState<UserProfile>({ name: '', phone: '', region: '', isVerified: false });
  const [verificationCode, setVerificationCode] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile(p => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleVerifyPhone = () => {
    if (verificationCode === PHONE_VERIFICATION_CODE) {
      setProfile(p => ({ ...p, isVerified: true }));
      setVerificationCode('');
    } else {
      alert('Invalid verification code.');
    }
  };

  const renderView = () => {
    switch (activeView) {
      case 'appointment': return <AppointmentView />;
      case 'gallery': return <GalleryView />;
      case 'home':
      default:
        return <HomeView />;
    }
  };

  const FeedbackForm = () => {
    const [feedback, setFeedback] = useState('');
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = 'App Feedback';
        const body = feedback;
        const mailtoLink = `mailto:${CLINIC_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, '_blank');
        setSent(true);
        setFeedback('');
        setTimeout(() => setSent(false), 3000);
    };

    if (sent) {
        return <p className="text-center text-green-600 font-semibold">Thank you for your feedback!</p>
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea value={feedback} onChange={e => setFeedback(e.target.value)} placeholder="Your feedback..." required rows={4} className="w-full p-3 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg border-2 border-transparent focus:border-blue-500 focus:outline-none transition"></textarea>
        <button type="submit" className="w-full p-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 active:scale-95 transition-all shadow-lg">Send Feedback</button>
      </form>
    );
  };
  
  const DoctorsInfo = () => (
    <div className="space-y-4">
      {DOCTORS.map(doctor => (
        <div key={doctor.name} className="flex items-center space-x-4 p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
          <img src={doctor.photoUrl} alt={doctor.name} className="w-16 h-16 rounded-full object-cover" />
          <div>
            <h3 className="font-bold text-slate-800 dark:text-slate-100">{doctor.name}</h3>
            <p className="text-sm text-blue-600 dark:text-blue-400">{doctor.specialty}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{doctor.experience}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const AboutInfo = () => (
    <div className="space-y-2 text-slate-600 dark:text-slate-300">
      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">About AN Fractures Clinic</h3>
      <p>We are a leading orthopedic clinic specializing in fracture treatment and care. Our team of 4 expert doctors is committed to providing the highest quality medical services to help you recover quickly and effectively.</p>
    </div>
  );

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className={`min-h-screen font-sans bg-gray-50 dark:bg-slate-900 transition-colors duration-300`}>
      <div 
        className="fixed inset-0 z-0 bg-no-repeat bg-center bg-contain opacity-5 dark:opacity-[0.03]" 
        style={{ backgroundImage: "url('/an-logo.png')" }}
      ></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header onProfileClick={() => setProfileModalOpen(true)} onSettingsClick={() => setSettingsModalOpen(true)} />
        <main className="flex-grow pb-24 overflow-y-auto">
          {renderView()}
        </main>
        <BottomNav activeView={activeView} setActiveView={setActiveView} />
      </div>

      <Modal isOpen={isProfileModalOpen} onClose={() => setProfileModalOpen(false)} title="My Profile">
        <div className="space-y-4">
          <input type="text" name="name" placeholder="Name" value={profile.name} onChange={handleProfileChange} className="w-full p-3 bg-slate-100 dark:bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="text" name="region" placeholder="Region" value={profile.region} onChange={handleProfileChange} className="w-full p-3 bg-slate-100 dark:bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <div>
            <div className="flex items-center space-x-2">
              <input type="tel" name="phone" placeholder="Phone Number" value={profile.phone} onChange={handleProfileChange} className="w-full p-3 bg-slate-100 dark:bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" readOnly={profile.isVerified} />
              {profile.isVerified && <CheckCircleIcon className="w-8 h-8 text-green-500 flex-shrink-0" />}
            </div>
            {!profile.isVerified && profile.phone && (
              <div className="mt-2 space-y-2">
                <p className="text-xs text-slate-500 dark:text-slate-400">An SMS with code 'knutpH7' has been sent.</p>
                <div className="flex space-x-2">
                  <input type="text" placeholder="Verification Code" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} className="w-full p-3 bg-slate-100 dark:bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <button onClick={handleVerifyPhone} className="p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Verify</button>
                </div>
              </div>
            )}
          </div>
          <button className="w-full p-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 active:scale-95 transition-all">Save Profile</button>
        </div>
      </Modal>

      <Modal isOpen={isSettingsModalOpen} onClose={() => setSettingsModalOpen(false)} title="Settings">
        <div className="space-y-4">
            <div className="p-4 bg-slate-100 dark:bg-slate-700 rounded-lg">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">About</h3>
                <AboutInfo />
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-700 rounded-lg">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Theme</h3>
                <button onClick={toggleTheme} className="w-full flex justify-between items-center p-3 bg-white dark:bg-slate-600 rounded-lg">
                    <span>Change Theme</span>
                    {theme === 'light' ? <MoonIcon className="w-6 h-6 text-slate-700"/> : <SunIcon className="w-6 h-6 text-yellow-400"/>}
                </button>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-700 rounded-lg">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Doctor's Info</h3>
                <DoctorsInfo />
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-700 rounded-lg">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Feedback</h3>
                <FeedbackForm />
            </div>
        </div>
      </Modal>
    </div>
  );
};

export default App;
