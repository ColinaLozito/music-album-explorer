import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { RootStackParamList } from '../../navigation/types';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { fetchAlbumDetails } from '../../services/musicbrainz';
import { useSetError } from '../../context/ErrorContext';
import { useAlbumDetail } from '../../context/AlbumDetailContext';

export function useAlbumDetailHandler() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const setError = useSetError();
  const { setAlbumDetail } = useAlbumDetail();

  const handleAlbumPress = async (albumId: string) => {
    setLoading(true);
    setError(null);
    try {
      const details = await fetchAlbumDetails(albumId);
      setAlbumDetail(details);
      navigation.navigate('Details');
    } catch (e) {
      setError('Failed to fetch album details.');
    } finally {
      setLoading(false);
    }
  };

  return {
    handleAlbumPress,
    loading,
  };
}
