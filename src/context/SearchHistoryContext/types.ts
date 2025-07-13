export interface SearchHistoryContextType {
  history: string[];
  addSearch: (artist: string) => void;
  clearHistory: () => void;
}
