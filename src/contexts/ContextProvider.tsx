import React from 'react';
import { ErrorProvider } from './ErrorContext';
import { SearchHistoryProvider } from './SearchHistoryContext';
import { ArtistProvider } from './ArtistContext';
import { SearchResultProvider } from './SearchResultContext';
import { AlbumDetailProvider } from './AlbumDetailContext';

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ErrorProvider>
    <SearchHistoryProvider>
      <SearchResultProvider>
        <ArtistProvider>
          <AlbumDetailProvider>
            {children}
          </AlbumDetailProvider>
        </ArtistProvider>
      </SearchResultProvider>
    </SearchHistoryProvider>
  </ErrorProvider>
); 