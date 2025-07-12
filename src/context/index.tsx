import React from 'react';
import { ErrorProvider } from './ErrorContext';
import { SearchHistoryProvider } from './SearchHistoryContext';
import { ArtistProvider } from './ArtistContext';
import { SearchResultProvider } from './SearchResultContext';
import { AlbumDetailProvider } from './AlbumDetailContext';

export const ContextProvider = ({ children }: { children: React.ReactNode }) => (
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