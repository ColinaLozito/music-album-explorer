import React, { useCallback } from "react";
import { View, FlatList, ListRenderItemInfo } from "react-native";
import { Text, List } from "react-native-paper";
import { useAlbumDetail } from "@context/AlbumDetailContext";
import { detailsScreenStyles } from "./styles";
import type { Media, Track } from "@services/types";

const DetailsScreen = () => {
  const { albumDetail } = useAlbumDetail();

  const renderTrackItem = useCallback(
    ({ item: track }: ListRenderItemInfo<Track>) => (
      <List.Item
        title={`${track.number}. ${track.title}`}
        left={(props) => <List.Icon {...props} icon="music-note" />}
      />
    ),
    [],
  );

  const renderMediaItem = useCallback(
    ({ item: media }: ListRenderItemInfo<Media>) => (
      <View style={detailsScreenStyles.mediaSection}>
        <Text style={detailsScreenStyles.mediaTitle}>
          Media {media.position} ({media.format})
        </Text>
        <FlatList
          data={media.tracks}
          keyExtractor={(track) => track.id}
          renderItem={renderTrackItem}
        />
      </View>
    ),
    [renderTrackItem],
  );

  if (!albumDetail) {
    return (
      <View style={detailsScreenStyles.noDetails}>
        <Text>No album details available.</Text>
      </View>
    );
  }

  return (
    <View style={detailsScreenStyles.container}>
      <Text>Date: {albumDetail.date}</Text>
      <Text>Country: {albumDetail.country}</Text>
      <FlatList
        data={albumDetail.media}
        keyExtractor={(item) => item.id}
        style={detailsScreenStyles.list}
        renderItem={renderMediaItem}
      />
    </View>
  );
};

export default DetailsScreen;
