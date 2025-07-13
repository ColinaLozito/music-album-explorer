import React, { useState } from "react";
import { View, Image } from "react-native";
import { TextInput, Button, Text, ActivityIndicator } from "react-native-paper";
import { searchScreenStyles as styles } from "./styles";
import { useSearchArtist } from "./useSearchArtist";
import splashIcon from "@assets/splash-icon.png";
import PreviousSearches from "@components/PreviousSearches";
import { useSearchHistory } from "@context/SearchHistoryContext";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const { searchArtist, loading } = useSearchArtist();
  const { history } = useSearchHistory();
  const handleSearch = () => {
    if (query.trim()) {
      searchArtist(query.trim());
      setQuery("");
    }
  };

  const handleSelectPrevious = (artist: string) => {
    setQuery(artist);
    searchArtist(artist);
    setQuery("");
  };

  return (
    <View style={styles.container}>
      <Image
        source={splashIcon}
        style={styles.splashIcon}
        resizeMode="contain"
      />
      <Text variant="titleLarge" style={styles.title}>
        Search Artist
      </Text>
      <TextInput
        label="Artist Name"
        value={query}
        onChangeText={setQuery}
        mode="outlined"
        style={styles.input}
        onSubmitEditing={handleSearch}
        returnKeyType="search"
        disabled={loading}
      />
      <Button
        mode="contained"
        onPress={handleSearch}
        style={styles.button}
        disabled={loading}
      >
        Search
      </Button>
      {loading && (
        <ActivityIndicator style={styles.spinner} animating size="large" />
      )}
      <PreviousSearches artists={history} onSelect={handleSelectPrevious} />
    </View>
  );
};

export default SearchScreen;
