import axios from 'axios'
import {
  MUSICBRAINZ_ORGANIZATION_NAME,
  MUSICBRAINZ_USER_AGENT_NAME,
  MUSICBRAINZ_USER_AGENT_EMAIL,
  MUSICBRAINZ_USER_AGENT_VERSION,
} from '@env'
import type { AlbumListResponse, AlbumDetails } from './types';

const userAgent = `
  ${MUSICBRAINZ_ORGANIZATION_NAME}
  ${MUSICBRAINZ_USER_AGENT_NAME}/
  ${MUSICBRAINZ_USER_AGENT_VERSION} 
  (${MUSICBRAINZ_USER_AGENT_EMAIL})`

const musicBrainzApi = axios.create({
  baseURL: 'https://musicbrainz.org/ws/2/',
  headers: {
    'User-Agent': userAgent,
    'Accept': 'application/json',
  },
})

export async function fetchAlbumsByArtist(artist: string, limit: number = 10): Promise<AlbumListResponse> {
  const response = await musicBrainzApi.get<AlbumListResponse>(
    `release/?query=artist:${encodeURIComponent(artist)},type=Album&limit=${limit}`
  );
  return response.data;
}

export async function fetchAlbumDetails(albumId: string): Promise<AlbumDetails> {
  const response = await musicBrainzApi.get<AlbumDetails>(
    `release/${albumId}?inc=recordings`
  );
  return response.data;
}