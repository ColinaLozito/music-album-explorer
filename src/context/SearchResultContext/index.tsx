import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SearchResultContextType } from './types';
import { AlbumListResponse } from '../../services/types';

const SearchResultContext = createContext<SearchResultContextType | undefined>(undefined);

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

export const useSearchResult = () => {
  const ctx = useContext(SearchResultContext);
  if (!ctx) throw new Error('useSearchResult must be used within a SearchResultProvider');
  return ctx;
}; 