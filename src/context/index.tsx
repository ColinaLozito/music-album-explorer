/**
 * ContextProvider wraps the app with all global context providers.
 *
 * This ensures that error state, search history, artist selection,
 * and album details are available throughout the component tree.
 *
 * Usage:
 *   <ContextProvider>
 *     <App />
 *   </ContextProvider>
 */
import React from "react";
import { ErrorProvider } from "./ErrorContext";
import { SearchHistoryProvider } from "./SearchHistoryContext";
import { ArtistProvider } from "./ArtistContext";
import { AlbumDetailProvider } from "./AlbumDetailContext";

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <ErrorProvider>
    <SearchHistoryProvider>
      <ArtistProvider>
        <AlbumDetailProvider>
          {children}
        </AlbumDetailProvider>
      </ArtistProvider>
    </SearchHistoryProvider>
  </ErrorProvider>
);
