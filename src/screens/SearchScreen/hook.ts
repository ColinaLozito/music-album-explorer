import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { fetchAlbumsByArtist } from '../../services/musicbrainz';
import { useSearchHistory } from '../../contexts/SearchHistoryContext';
import type { RootStackParamList } from '../../navigation/types';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSetError } from '../../contexts/ErrorContext';

export function useSearchArtist() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { addSearch } = useSearchHistory();
  const setError = useSetError();

  const searchArtist = async (artist: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchAlbumsByArtist(artist, 10);
      console.log('data', data);
      if (data.releases && data.releases.length > 0) {
        addSearch(artist);
        navigation.navigate('List');
      } else {
        setError('No albums found for this artist.');
      }
    } catch (e) {
      setError('An error occurred while searching.');
    } finally {
      setLoading(false);
    }
  };

  return {
    searchArtist,
    loading,
  };
}
