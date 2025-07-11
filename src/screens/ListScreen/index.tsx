import React from 'react';
import { View, FlatList, Pressable, StyleSheet } from 'react-native';
import { Text, List, Portal, ActivityIndicator } from 'react-native-paper';
import { listScreenStyles } from './styles';
import BackButton from '../../components/BackButton';
import { useSearchResult } from '../../contexts/SearchResultContext';
import { useArtist } from '../../contexts/ArtistContext';
import { useAlbumDetailHandler } from './hook';

const ListScreen = () => {
  const { searchResult } = useSearchResult();
  const { artist } = useArtist();

  const { handleAlbumPress, loading } = useAlbumDetailHandler();

  return (
    <View style={listScreenStyles.container}>
      <View style={listScreenStyles.header}>
        <BackButton />
      </View>
      {artist?.name ? (
        <Text style={listScreenStyles.artistName}>{artist?.name}</Text>
      ) : null}
      {!searchResult?.releases?.length ? (
        <Text>No albums to display.</Text>
      ) : (
        <FlatList
          data={searchResult.releases}
          keyExtractor={item => item.id}
          style={listScreenStyles.list}
          renderItem={({ item }) => (
            <Pressable onPress={() => handleAlbumPress(item.id)}>
              <List.Item
                title={item.title}
                description={item.date}
                left={props => <List.Icon {...props} icon="album" />}
              />
            </Pressable>
          )}
        />
      )}
      <Portal>
        {loading && (
          <View style={listScreenStyles.overlaySpinner}>
            <ActivityIndicator size="large" />
          </View>
        )}
      </Portal>
    </View>
  );
};

export default ListScreen;
