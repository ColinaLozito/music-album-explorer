import React, { useCallback } from "react";
import { View, FlatList, Pressable, ListRenderItemInfo } from "react-native";
import { Text, List, Portal, ActivityIndicator } from "react-native-paper";
import { AlbumListItem } from "@services/types";
import { useAlbumDetailHandler } from "./useAlbumDetailHandler";
import { listScreenStyles } from "./styles";
import { useArtist } from "@context/ArtistContext";

const ListScreen = () => {
  const { searchResult } = useArtist();
  const { handleAlbumPress, loading } = useAlbumDetailHandler();

  const renderAlbumItem = useCallback(
    ({ item }: ListRenderItemInfo<AlbumListItem>) => (
      <Pressable onPress={() => handleAlbumPress(item.id)}>
        <List.Item
          title={item.title}
          description={item.date}
          left={(props) => <List.Icon {...props} icon="album" />}
        />
      </Pressable>
    ),
    [handleAlbumPress],
  );

  return (
    <View style={listScreenStyles.container}>
      {!searchResult?.releases?.length ? (
        <Text>No albums to display.</Text>
      ) : (
        <FlatList
          data={searchResult.releases}
          keyExtractor={(item) => item.id}
          style={listScreenStyles.list}
          renderItem={renderAlbumItem}
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
