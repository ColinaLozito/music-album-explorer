import React from 'react';
import { ErrorProvider } from './ErrorContext';
import { SearchHistoryProvider } from './SearchHistoryContext';

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ErrorProvider>
    <SearchHistoryProvider>
      {children}
    </SearchHistoryProvider>
  </ErrorProvider>
); 