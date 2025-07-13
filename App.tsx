import { SafeAreaView } from "react-native";
import { PaperProvider } from "react-native-paper";
import AppNavigator from "./src/navigation";
import ErrorBanner from "./src/components/ErrorBanner";
import ErrorBoundary from "./src/components/ErrorBoundary";
import { useError, useSetError } from "./src/context/ErrorContext";
import { ContextProvider } from "./src/context";

const GlobalErrorBanner = () => {
  const error = useError();
  const setError = useSetError();
  return (
    <ErrorBanner
      visible={!!error}
      message={error}
      onDismiss={() => setError(null)}
    />
  );
};

export default function App() {
  return (
    <PaperProvider>
      <ContextProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
          <ErrorBoundary>
            <GlobalErrorBanner />
            <AppNavigator />
          </ErrorBoundary>
        </SafeAreaView>
      </ContextProvider>
    </PaperProvider>
  );
}
