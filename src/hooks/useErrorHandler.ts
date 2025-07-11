import { useState, useCallback } from 'react';

interface ErrorState {
  hasError: boolean;
  error?: Error;
}

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

// Wrapper for async functions to catch errors
export const withErrorHandler = <T extends any[], R>(
  fn: (...args: T) => Promise<R>,
  errorHandler: (error: Error) => void
) => {
  return async (...args: T): Promise<R | undefined> => {
    try {
      return await fn(...args);
    } catch (error) {
      errorHandler(error as Error);
      return undefined;
    }
  };
}; 