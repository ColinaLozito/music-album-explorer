import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text, ActivityIndicator } from 'react-native-paper';
import { searchScreenStyles as styles } from './styles';
import { useSearchArtist } from './hook';
import { useSearchHistory } from '../../context/SearchHistoryContext';
import PreviousSearches from '../../components/PreviousSearches';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const { searchArtist, loading } = useSearchArtist();
  const { history } = useSearchHistory();

  const handleSearch = () => {
    if (query.trim()) {
      searchArtist(query.trim());
      setQuery('');
    }
  };

  const handleSelectPrevious = (artist: string) => {
    setQuery(artist);
    searchArtist(artist);
    setQuery('');
  };

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>Search Artist</Text>
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
      <Button mode="contained" onPress={handleSearch} style={styles.button} disabled={loading}>
        Search
      </Button>
      {loading && <ActivityIndicator style={styles.spinner} animating size="large" />}
      <PreviousSearches artists={history} onSelect={handleSelectPrevious} />
    </View>
  );
};

export default SearchScreen;
