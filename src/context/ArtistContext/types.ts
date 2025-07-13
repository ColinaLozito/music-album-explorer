import { AlbumListResponse } from '@services/types';

export interface Artist {
  id: string;
  name: string;
}

export interface ArtistContextType {
  artist: Artist | null;
  setArtist: (artist: Artist) => void;
  clearArtist: () => void;
  searchResult: AlbumListResponse | null;
  setSearchResult: (result: AlbumListResponse) => void;
  clearSearchResult: () => void;
}
