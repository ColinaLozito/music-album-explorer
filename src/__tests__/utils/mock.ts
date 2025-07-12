import type { Artist } from '../../context/ArtistContext/types';
import type { AlbumDetails, AlbumListResponse } from '../../services/types';

export const mockArtist: Artist = {
  id: '1',
  name: 'Test Artist',
};

export const mockAlbumDetail: AlbumDetails = {
  id: '1',
  title: 'Test Album',
  date: '2024',
  country: 'US',
  media: [
    {
      position: 1,
      format: 'CD',
      id: 'media1',
      'track-count': 10,
      tracks: [
        { id: 'track1', title: 'Track 1', number: '1' },
        { id: 'track2', title: 'Track 2', number: '2' },
      ],
    },
  ],
};

export const mockResult: AlbumListResponse = {
  created: '2024-01-01',
  count: 1,
  offset: 0,
  releases: [
    {
      id: '1',
      title: 'Test Album',
      date: '2024',
      country: 'US',
      'track-count': 10,
      'artist-credit': [{ name: 'Test Artist' }],
    },
  ],
}; 