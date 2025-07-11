import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text, ActivityIndicator } from 'react-native-paper';
import { searchScreenStyles as styles } from './styles';
import { useSearchArtist } from './hook';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const { searchArtist, loading } = useSearchArtist();

  const handleSearch = () => {
    if (query.trim()) {
      searchArtist(query.trim());
    }
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
    </View>
  );
};

export default SearchScreen;
