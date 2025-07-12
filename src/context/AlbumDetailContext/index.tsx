/**
 * AlbumDetailContext provides the current album details and functions to set or clear them.
 * Used to share the selected album's details across the app.
 */
import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { AlbumDetails } from '../../services/types';
import { AlbumDetailContextType } from './types';

/**
 * The context object for album detail data and actions.
 */
const AlbumDetailContext = createContext<AlbumDetailContextType | undefined>(undefined);

/**
 * Provider component for AlbumDetailContext.
 * Wrap your component tree with this to provide album detail state.
 */
export const AlbumDetailProvider = ({ children }: { children: ReactNode }) => {
  const [albumDetail, setAlbumDetailState] = useState<AlbumDetails | null>(null);

  const setAlbumDetail = (detail: AlbumDetails) => setAlbumDetailState(detail);
  const clearAlbumDetail = () => setAlbumDetailState(null);

  return (
    <AlbumDetailContext.Provider value={{ albumDetail, setAlbumDetail, clearAlbumDetail }}>
      {children}
    </AlbumDetailContext.Provider>
  );
};

/**
 * Hook to access the album detail context.
 * Throws if used outside an AlbumDetailProvider.
 */
export const useAlbumDetail = () => {
  const ctx = useContext(AlbumDetailContext);
  if (!ctx) throw new Error('useAlbumDetail must be used within an AlbumDetailProvider');
  return ctx;
}; 