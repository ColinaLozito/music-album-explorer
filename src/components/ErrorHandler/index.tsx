import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useErrorHandler } from '../../hooks/useErrorHandler';
import { ErrorHandlerProps } from './types';
import { errorHandlerStyles } from './styles';

const ErrorHandler: React.FC<ErrorHandlerProps> = ({ children }) => {
  const { hasError, error, resetError } = useErrorHandler();

  if (hasError) {
    return (
      <View style={errorHandlerStyles.container}>
        <Text variant="titleLarge" style={errorHandlerStyles.title}>Something went wrong</Text>
        <Text style={errorHandlerStyles.message}>{error?.message || 'An unexpected error occurred.'}</Text>
        <Button mode="contained" onPress={resetError} style={errorHandlerStyles.button}>
          Try Again
        </Button>
      </View>
    );
  }

  return <>{children}</>;
};

export default ErrorHandler; 