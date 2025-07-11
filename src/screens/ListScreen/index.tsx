import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { listScreenStyles } from './styles';
import BackButton from '../../components/BackButton';

const ListScreen = () => {
  return (
    <View style={listScreenStyles.container}>
      <View style={listScreenStyles.header}>
        <BackButton />
      </View>
      <Text variant="titleLarge" style={listScreenStyles.title}>Albums List</Text>
      <Text>Album results will be displayed here.</Text>
    </View>
  );
};

export default ListScreen;
