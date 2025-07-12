/**
 * musicbrainz.ts
 *
 * Service for interacting with the MusicBrainz API to fetch album data.
 * Provides functions to search for albums by artist and fetch album details.
 * Uses environment variables for API identification.
 */
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

// Axios instance configured for MusicBrainz API
const musicBrainzApi = axios.create({
  baseURL: 'https://musicbrainz.org/ws/2/',
  headers: {
    'User-Agent': userAgent,
    'Accept': 'application/json',
  },
})

/**
 * Fetch a list of albums by artist name.
 * @param artist - The artist name to search for
 * @param limit - Maximum number of albums to return (default: 10)
 * @returns Promise resolving to AlbumListResponse
 */
export async function fetchAlbumsByArtist(artist: string, limit: number = 10): Promise<AlbumListResponse> {
  const response = await musicBrainzApi.get<AlbumListResponse>(
    `release/?query=artist:${encodeURIComponent(artist)},type=Album&limit=${limit}`
  );
  return response.data;
}

/**
 * Fetch detailed information for a specific album by ID.
 * @param albumId - The MusicBrainz album ID
 * @returns Promise resolving to AlbumDetails
 */
export async function fetchAlbumDetails(albumId: string): Promise<AlbumDetails> {
  const response = await musicBrainzApi.get<AlbumDetails>(
    `release/${albumId}?inc=recordings`
  );
  return response.data;
}