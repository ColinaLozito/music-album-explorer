import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Artist, ArtistContextType } from './types';

const ArtistContext = createContext<ArtistContextType | undefined>(undefined);

export const ArtistProvider = ({ children }: { children: ReactNode }) => {
  const [artist, setArtistState] = useState<Artist | null>(null);

  const setArtist = (artist: Artist) => setArtistState(artist);
  const clearArtist = () => setArtistState(null);

  return (
    <ArtistContext.Provider value={{ artist, setArtist, clearArtist }}>
      {children}
    </ArtistContext.Provider>
  );
};

export const useArtist = () => {
  const ctx = useContext(ArtistContext);
  if (!ctx) throw new Error('useArtist must be used within an ArtistProvider');
  return ctx;
}; 