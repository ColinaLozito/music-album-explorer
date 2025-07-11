import React from 'react';
import { ErrorProvider } from './ErrorContext';
import { SearchHistoryProvider } from './SearchHistoryContext';
import { ArtistProvider } from './ArtistContext';
import { SearchResultProvider } from './SearchResultContext';

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ErrorProvider>
    <SearchHistoryProvider>
      <SearchResultProvider>
        <ArtistProvider>
          {children}
        </ArtistProvider>
      </SearchResultProvider>
    </SearchHistoryProvider>
  </ErrorProvider>
); 