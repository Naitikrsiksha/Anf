
import { Doctor } from './types';

export const DOCTORS: Doctor[] = [
  { name: 'Dr. Alok Kumar', specialty: 'Orthopedic Surgeon', experience: '15+ years of experience in fracture management and joint replacement.', photoUrl: 'https://picsum.photos/seed/doc1/100/100' },
  { name: 'Dr. Neha Sharma', specialty: 'Trauma Specialist', experience: '12+ years specializing in complex trauma and reconstructive surgery.', photoUrl: 'https://picsum.photos/seed/doc2/100/100' },
  { name: 'Dr. Rajesh Singh', specialty: 'Pediatric Orthopedics', experience: '10+ years dedicated to treating fractures in children and adolescents.', photoUrl: 'https://picsum.photos/seed/doc3/100/100' },
  { name: 'Dr. Priya Desai', specialty: 'Sports Injury Specialist', experience: '8+ years focusing on athletic injuries and rehabilitation.', photoUrl: 'https://picsum.photos/seed/doc4/100/100' },
];

export const GALLERY_IMAGES: string[] = Array.from({ length: 15 }, (_, i) => `https://picsum.photos/seed/clinic${i + 1}/400/300`);

export const CLINIC_EMAIL = 'rajputnaitik723@gmail.com';
export const PHONE_VERIFICATION_CODE = 'knutpH7';
