/**
 * ArtistContext provides the current artist selection,
 * search result, and functions to set or clear them.
 * Used to share the selected artist and their album search results across the app.
 */
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Artist, ArtistContextType } from "./types";
import { AlbumListResponse } from '@services/types';

/**
 * The context object for artist and search result data and actions.
 */
const ArtistContext = createContext<ArtistContextType | undefined>(undefined);

/**
 * Provider component for ArtistContext.
 * Wrap your component tree with this to provide artist and search result state.
 */
export const ArtistProvider = ({ children }: { children: ReactNode }) => {
  const [artist, setArtistState] = useState<Artist | null>(null);
  const [searchResult, setSearchResultState] = useState<AlbumListResponse | null>(null);

  const setArtist = (artist: Artist) => setArtistState(artist);
  const clearArtist = () => setArtistState(null);
  const setSearchResult = (result: AlbumListResponse) => setSearchResultState(result);
  const clearSearchResult = () => setSearchResultState(null);

  return (
    <ArtistContext.Provider
      value={{
        artist,
        setArtist,
        clearArtist,
        searchResult,
        setSearchResult,
        clearSearchResult,
      }}
    >
      {children}
    </ArtistContext.Provider>
  );
};

/**
 * Hook to access the artist and search result context.
 * Throws if used outside an ArtistProvider.
 */
export const useArtist = () => {
  const ctx = useContext(ArtistContext);
  if (!ctx) throw new Error("useArtist must be used within an ArtistProvider");
  return ctx;
};
