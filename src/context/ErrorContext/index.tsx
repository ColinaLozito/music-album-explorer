/**
 * ErrorContext provides global error state and a setter function for the app.
 * Used to display error banners and handle error state across components.
 */
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ErrorContextType } from './types';

/**
 * The context object for error data and actions.
 */
const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

/**
 * Provider component for ErrorContext.
 * Wrap your component tree with this to provide error state.
 */
export const ErrorProvider = ({ children }: { children: ReactNode }) => {
  const [error, setError] = useState<string | null>(null);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};

/**
 * Hook to access the current error value.
 * Throws if used outside an ErrorProvider.
 */
export const useError = () => {
  const ctx = useContext(ErrorContext);
  if (!ctx) throw new Error('useError must be used within an ErrorProvider');
  return ctx.error;
};

/**
 * Hook to access the error setter function.
 * Throws if used outside an ErrorProvider.
 */
export const useSetError = () => {
  const ctx = useContext(ErrorContext);
  if (!ctx) throw new Error('useSetError must be used within an ErrorProvider');
  return ctx.setError;
}; 