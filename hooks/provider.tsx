import { Images } from '@/constants';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Hotel {
  id: number;
  title: string;
  image: string;
  etoils:number;
  place:string;
  price:string
}

interface HotelContextProps {
  hotels: Hotel[];
  setHotels: (hotels: Hotel[]) => void;
}

const HotelContext = createContext<HotelContextProps | undefined>(undefined);

export const useHotels = () => {
  const context = useContext(HotelContext);
  if (!context) {
    throw new Error('useHotels must be used within a HotelProvider');
  }
  return context;
};

export const HotelProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [hotels, setHotels] = useState<Hotel[]>([
    { id: 1, title: 'Iberostar kuriat',image:Images.iberostart,etoils:5,place:"Tunis",price:"630$"},
    { id: 2, title: 'Argos',image:Images.argos,etoils:4,place:"In Cappadocia",price:"850$"},
    { id: 3, title: 'Bel Azur Hammammet',image:Images.beach,etoils:4,place:"Tunis",price:"600$"},
    { id: 4, title: 'Hilton Pyramids Golf',image:Images.hotel,etoils:5,place:"in Cappadocia",price:"850$"},
    { id: 5, title: 'Golf Beach Resort - Sharm El Sheikh',image:Images.beach,etoils:5,place:"Egypt",price:"850$"},
  ]);

  return (
    <HotelContext.Provider value={{ hotels, setHotels }}>
      {children}
    </HotelContext.Provider>
  );
};