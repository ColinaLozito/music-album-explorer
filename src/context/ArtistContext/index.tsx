/**
 * ArtistContext provides the current artist selection and functions to set or clear it.
 * Used to share the selected artist across the app.
 */
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Artist, ArtistContextType } from './types';

/**
 * The context object for artist data and actions.
 */
const ArtistContext = createContext<ArtistContextType | undefined>(undefined);

/**
 * Provider component for ArtistContext.
 * Wrap your component tree with this to provide artist state.
 */
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

/**
 * Hook to access the artist context.
 * Throws if used outside an ArtistProvider.
 */
export const useArtist = () => {
  const ctx = useContext(ArtistContext);
  if (!ctx) throw new Error('useArtist must be used within an ArtistProvider');
  return ctx;
}; 