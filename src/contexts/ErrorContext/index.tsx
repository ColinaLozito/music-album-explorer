import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ErrorContextType } from './types';

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const ErrorProvider = ({ children }: { children: ReactNode }) => {
  const [error, setError] = useState<string | null>(null);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = () => {
  const ctx = useContext(ErrorContext);
  if (!ctx) throw new Error('useError must be used within an ErrorProvider');
  return ctx.error;
};

export const useSetError = () => {
  const ctx = useContext(ErrorContext);
  if (!ctx) throw new Error('useSetError must be used within an ErrorProvider');
  return ctx.setError;
}; 