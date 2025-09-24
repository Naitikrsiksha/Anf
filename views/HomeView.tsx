
import React from 'react';

const HomeView: React.FC = () => {
  return (
    <div className="p-6 space-y-6 text-center animate-fadeIn">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Welcome to AN Fractures Clinic</h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
        Your trusted partner in orthopedic care. Our expert team is dedicated to providing the best treatment for fractures and bone-related injuries.
      </p>
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Our Doctors' Experience</h2>
        <div className="aspect-video max-w-3xl mx-auto bg-slate-200 dark:bg-slate-700 rounded-2xl shadow-lg overflow-hidden border-4 border-white dark:border-slate-600">
           <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/v-a_2PTvVCM?si=bJ6kZ7A_h9zT1xYy" 
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
          Hear from our leading specialists about our commitment to patient care and advanced treatment methodologies.
        </p>
      </div>

       <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default HomeView;
