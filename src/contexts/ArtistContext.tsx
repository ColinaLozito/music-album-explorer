import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Artist {
  id: string;
  name: string;
}

interface ArtistContextType {
  artist: Artist | null;
  setArtist: (artist: Artist) => void;
  clearArtist: () => void;
}

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