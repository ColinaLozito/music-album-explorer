import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { AlbumDetails } from '../../services/types';
import { AlbumDetailContextType } from './types';

const AlbumDetailContext = createContext<AlbumDetailContextType | undefined>(undefined);

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

export const useAlbumDetail = () => {
  const ctx = useContext(AlbumDetailContext);
  if (!ctx) throw new Error('useAlbumDetail must be used within an AlbumDetailProvider');
  return ctx;
}; 