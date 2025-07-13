/**
 * SearchHistoryContext provides the recent search history and functions to add or clear it.
 * Uses AsyncStorage to persist history between app launches.
 * Used to display and manage previous artist searches.
 */
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SearchHistoryContextType } from "./types";

const STORAGE_KEY = "SEARCH_HISTORY";
const MAX_HISTORY = 5;

/**
 * The context object for search history data and actions.
 */
const SearchHistoryContext = createContext<
  SearchHistoryContextType | undefined
>(undefined);

/**
 * Provider component for SearchHistoryContext.
 * Wrap your component tree with this to provide search history state.
 */
export const SearchHistoryProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) setHistory(JSON.parse(stored));
    })();
  }, []);

  const persistHistory = async (newHistory: string[]) => {
    setHistory(newHistory);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
  };

  const addSearch = (artist: string) => {
    setHistory((prev) => {
      const filtered = prev.filter(
        (a) => a.toLowerCase() !== artist.toLowerCase(),
      );
      const updated = [artist, ...filtered].slice(0, MAX_HISTORY);
      persistHistory(updated);
      return updated;
    });
  };

  const clearHistory = () => {
    persistHistory([]);
  };

  return (
    <SearchHistoryContext.Provider value={{ history, addSearch, clearHistory }}>
      {children}
    </SearchHistoryContext.Provider>
  );
};

/**
 * Hook to access the search history context.
 * Throws if used outside a SearchHistoryProvider.
 */
export const useSearchHistory = () => {
  const ctx = useContext(SearchHistoryContext);
  if (!ctx)
    throw new Error(
      "useSearchHistory must be used within a SearchHistoryProvider",
    );
  return ctx;
};
