import { SafeAreaView } from 'react-native'
import { Card, PaperProvider, Text } from 'react-native-paper'
import AppNavigator from './src/navigation';
import { ContextProvider } from './src/contexts/ContextProvider';
import ErrorBanner from './src/components/ErrorBanner';
import ErrorHandler from './src/components/ErrorHandler';
import { useError, useSetError } from './src/contexts/ErrorContext';

function GlobalErrorBanner() {
  const error = useError();
  const setError = useSetError();
  return <ErrorBanner visible={!!error} message={error} onDismiss={() => setError(null)} />;
}

export default function App() {
  return (
    <PaperProvider>
      <ContextProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <GlobalErrorBanner />
          <ErrorHandler>
            <AppNavigator />
          </ErrorHandler>
        </SafeAreaView>
      </ContextProvider>
    </PaperProvider>
  );
}
