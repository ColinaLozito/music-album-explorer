import { useState, useCallback } from 'react';
import { ErrorState } from './types';

export const useErrorHandler = () => {
  const [errorState, setErrorState] = useState<ErrorState>({ hasError: false });

  const handleError = useCallback((error: Error) => {
    console.error('Error caught by useErrorHandler:', error);
    setErrorState({ hasError: true, error });
  }, []);

  const resetError = useCallback(() => {
    setErrorState({ hasError: false, error: undefined });
  }, []);

  return {
    hasError: errorState.hasError,
    error: errorState.error,
    handleError,
    resetError,
  };
};
