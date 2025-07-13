/**
 * ErrorBoundary is a class-based React error boundary for catching render errors in the app.
 * Displays a fallback UI when an error is caught and allows the user to reset the error state.
 * Wrap your app or component subtree with this to catch unexpected errors.
 */
import React from "react";
import { View, Text, Button } from "react-native";
import { errorBoundaryStyles } from "./styles";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<
  React.PropsWithChildren<object>,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<object>) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(_error: Error, _errorInfo: React.ErrorInfo) {
    // Optionally log error info
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={errorBoundaryStyles.container}>
          <Text style={errorBoundaryStyles.title}>Something went wrong</Text>
          <Text style={errorBoundaryStyles.message}>
            {this.state.error?.message || "An unexpected error occurred."}
          </Text>
          <Button title="Try Again" onPress={this.handleReset} />
        </View>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
