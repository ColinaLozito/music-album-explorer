import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAlbumDetail } from '@context/AlbumDetailContext';
import { useSetError } from '@context/ErrorContext';
import { fetchAlbumDetails } from '@services/musicbrainz';
import { RootStackParamList } from 'src/navigation/types';

export const useAlbumDetailHandler = () => {
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
    } catch (_e) {
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
