// Album list item type
export interface AlbumListItem {
  id: string;
  title: string;
  date: string;
  country: string;
  "track-count": number;
}

// Album list response type
export interface AlbumListResponse {
  created: string;
  count: number;
  offset: number;
  releases: AlbumListItem[];
}

// Track type for album details
export interface Track {
  id: string;
  title: string;
  number: string;
}

// Media type for album details
export interface Media {
  position: number;
  format: string;
  id: string;
  "track-count": number;
  tracks: Track[];
}

// Album details type
export interface AlbumDetails {
  id: string;
  title: string;
  date: string;
  country: string;
  media: Media[];
}
