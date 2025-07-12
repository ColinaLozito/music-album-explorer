export interface Artist {
  id: string;
  name: string;
}

export interface ArtistContextType {
  artist: Artist | null;
  setArtist: (artist: Artist) => void;
  clearArtist: () => void;
}