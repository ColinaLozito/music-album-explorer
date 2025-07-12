/**
 * SearchResultContext provides the current search result and functions to set or clear it.
 * Used to share the latest album search results across the app.
 */
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SearchResultContextType } from './types';
import { AlbumListResponse } from '../../services/types';

/**
 * The context object for search result data and actions.
 */
const SearchResultContext = createContext<SearchResultContextType | undefined>(undefined);

/**
 * Provider component for SearchResultContext.
 * Wrap your component tree with this to provide search result state.
 */
export const SearchResultProvider = ({ children }: { children: ReactNode }) => {
  const [searchResult, setSearchResultState] = useState<AlbumListResponse | null>(null);

  const setSearchResult = (result: AlbumListResponse) => setSearchResultState(result);
  const clearSearchResult = () => setSearchResultState(null);

  return (
    <SearchResultContext.Provider value={{ searchResult, setSearchResult, clearSearchResult }}>
      {children}
    </SearchResultContext.Provider>
  );
};

/**
 * Hook to access the search result context.
 * Throws if used outside a SearchResultProvider.
 */
export const useSearchResult = () => {
  const ctx = useContext(SearchResultContext);
  if (!ctx) throw new Error('useSearchResult must be used within a SearchResultProvider');
  return ctx;
}; 