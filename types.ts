
export type View = 'home' | 'appointment' | 'gallery';

export interface Doctor {
  name: string;
  specialty: string;
  experience: string;
  photoUrl: string;
}

export interface UserProfile {
  name: string;
  phone: string;
  region: string;
  isVerified: boolean;
}
