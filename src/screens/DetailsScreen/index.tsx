import React, { useCallback } from 'react';
import { View, FlatList, ListRenderItemInfo } from 'react-native';
import { Text, List } from 'react-native-paper';
import { useAlbumDetail } from '../../contexts/AlbumDetailContext';
import BackButton from '../../components/BackButton';
import { detailsScreenStyles } from './styles';
import type { Media } from '../../services/types';

const DetailsScreen = () => {
  const { albumDetail } = useAlbumDetail();

  const renderMediaItem = useCallback(({ item: media }: ListRenderItemInfo<Media>) => (
    <View style={detailsScreenStyles.mediaSection}>
      {albumDetail?.media?.length && albumDetail.media.length > 1 && <Text style={detailsScreenStyles.mediaTitle}>Media {media.position} ({media.format})</Text>}
      <FlatList
        data={media.tracks}
        keyExtractor={track => track.id}
        renderItem={({ item: track }) => (
          <List.Item
            title={`${track.number}. ${track.title}`}
            left={props => <List.Icon {...props} icon="music-note" />}
          />
        )}
      />
    </View>
  ), []);

  if (!albumDetail) {
    return (
      <View style={detailsScreenStyles.noDetails}>
        <Text>No album details available.</Text>
      </View>
    );
  }

  return (
    <View style={detailsScreenStyles.container}>
      <View style={detailsScreenStyles.backButtonWrapper}>
        <BackButton />
      </View>
      <Text variant="titleLarge" style={detailsScreenStyles.title}>{albumDetail.title}</Text>
      <Text>Date: {albumDetail.date}</Text>
      <Text>Country: {albumDetail.country}</Text>
      <FlatList
        data={albumDetail.media}
        keyExtractor={item => item.id}
        renderItem={renderMediaItem}
      />
    </View>
  );
};

export default DetailsScreen;
