import React from "react";
import { View } from "react-native";
import { List } from "react-native-paper";
import type { PreviousSearchesProps } from "./types";
import { previousSearchesStyles } from "./styles";

const PreviousSearches = ({ artists, onSelect }: PreviousSearchesProps) => {
  if (!artists.length) return null;

  return (
    <View style={previousSearchesStyles.container}>
      <List.Subheader>Previous Searches</List.Subheader>
      {artists.map((artist, idx) => (
        <List.Item
          key={artist + idx}
          title={artist}
          onPress={() => onSelect(artist)}
          left={(props) => <List.Icon {...props} icon="history" />}
        />
      ))}
    </View>
  );
};

export default PreviousSearches;
