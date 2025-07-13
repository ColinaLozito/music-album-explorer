import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useArtist } from "@context/ArtistContext";
import { useSetError } from "@context/ErrorContext";
import { useSearchHistory } from "@context/SearchHistoryContext";
import { fetchAlbumsByArtist } from "@services/musicbrainz";
import { RootStackParamList } from "src/navigation/types";


export const useSearchArtist = () => {
  const [loading, setLoading] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { addSearch } = useSearchHistory();
  const setError = useSetError();
  const { setSearchResult, setArtist } = useArtist();

  const searchArtist = async (artist: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchAlbumsByArtist(artist, 10);
      if (data.releases && data.releases.length > 0) {
        addSearch(artist);
        setSearchResult(data);
        // Set artist in context if available
        const firstRelease = data.releases[0];
        setArtist({ id: firstRelease.id, name: artist });
        navigation.navigate("List");
      } else {
        setError("No albums found for this artist.");
      }
    } catch (_e) {
      setError("An error occurred while searching.");
    } finally {
      setLoading(false);
    }
  };

  return {
    searchArtist,
    loading,
  };
};
