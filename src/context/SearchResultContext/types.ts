import { AlbumListResponse } from "../../services/types";

export interface SearchResultContextType {
  searchResult: AlbumListResponse | null;
  setSearchResult: (result: AlbumListResponse) => void;
  clearSearchResult: () => void;
}