
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { CloseIcon } from '../components/Icons';
import Modal from '../components/Modal';

const GalleryView: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="p-4 animate-fadeIn">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-center">Clinic Gallery</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {GALLERY_IMAGES.map((src, index) => (
                    <div key={index} className="aspect-square bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 shadow-lg" onClick={() => setSelectedImage(src)}>
                        <img src={src} alt={`Clinic gallery image ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                ))}
            </div>

            {selectedImage && (
                 <div 
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-3xl max-h-[80vh]" onClick={e => e.stopPropagation()}>
                        <img src={selectedImage} alt="Enlarged gallery view" className="w-full h-full object-contain rounded-lg"/>
                        <button 
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-4 -right-4 bg-white text-black rounded-full p-2"
                        >
                            <CloseIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            )}
            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              .animate-fadeIn {
                animation: fadeIn 0.5s ease-in-out;
              }
            `}</style>
        </div>
    );
};

export default GalleryView;
