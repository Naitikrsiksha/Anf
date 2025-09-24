
import React, { useState } from 'react';
import { CLINIC_EMAIL } from '../constants';

const AppointmentView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    village: '',
    district: '',
    date: '',
    time: '',
    phone: '',
    problem: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Appointment Booking for ${formData.name}`;
    const body = `
      A new appointment request has been submitted.

      Patient Details:
      - Name: ${formData.name}
      - Phone: ${formData.phone}
      - Village: ${formData.village}
      - District: ${formData.district}
      - Preferred Date: ${formData.date}
      - Preferred Time: ${formData.time}
      
      Problem Description:
      ${formData.problem}
    `;
    const mailtoLink = `mailto:${CLINIC_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.trim())}`;
    
    window.open(mailtoLink, '_blank');
    
    setSubmitted(true);
    setFormData({ name: '', village: '', district: '', date: '', time: '', phone: '', problem: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <div className="p-6 text-center animate-fadeIn flex flex-col items-center justify-center h-full">
        <svg className="w-24 h-24 text-green-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Thank You!</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mt-2">
          Your appointment request has been submitted. We will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-center">Appointment Booking</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full p-3 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg border-2 border-transparent focus:border-blue-500 focus:outline-none transition" />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full p-3 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg border-2 border-transparent focus:border-blue-500 focus:outline-none transition" />
          <input type="text" name="village" placeholder="Village / Town" value={formData.village} onChange={handleChange} required className="w-full p-3 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg border-2 border-transparent focus:border-blue-500 focus:outline-none transition" />
          <input type="text" name="district" placeholder="District" value={formData.district} onChange={handleChange} required className="w-full p-3 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg border-2 border-transparent focus:border-blue-500 focus:outline-none transition" />
          <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full p-3 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg border-2 border-transparent focus:border-blue-500 focus:outline-none transition" />
          <input type="time" name="time" value={formData.time} onChange={handleChange} required className="w-full p-3 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg border-2 border-transparent focus:border-blue-500 focus:outline-none transition" />
        </div>
        <textarea name="problem" placeholder="Describe your problem" value={formData.problem} onChange={handleChange} required rows={4} className="w-full p-3 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg border-2 border-transparent focus:border-blue-500 focus:outline-none transition" />
        <button type="submit" className="w-full p-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 active:scale-95 transition-all shadow-lg">Submit Request</button>
      </form>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        input[type="date"]::-webkit-calendar-picker-indicator,
        input[type="time"]::-webkit-calendar-picker-indicator {
            filter: invert(0.5);
        }
        .dark input[type="date"]::-webkit-calendar-picker-indicator,
        .dark input[type="time"]::-webkit-calendar-picker-indicator {
            filter: invert(1);
        }
      `}</style>
    </div>
  );
};

export default AppointmentView;
