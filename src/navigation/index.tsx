import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './types'
import SearchScreen from '../screens/SearchScreen'
import ListScreen from '../screens/ListScreen'
import DetailsScreen from '../screens/DetailsScreen'
import { Appbar } from 'react-native-paper';
import { useArtist } from '../context/ArtistContext';
import { useAlbumDetail } from '../context/AlbumDetailContext';

const Stack = createNativeStackNavigator<RootStackParamList>()

const ListHeader = ({ navigation, back }: { navigation?: any; back?: any }) => {
  const { artist } = useArtist();
  return (
    <Appbar.Header mode="center-aligned">
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={artist?.name || 'Albums'} />
    </Appbar.Header>
  );
}

const DetailsHeader = ({ navigation, back }: { navigation?: any; back?: any }) => {
  const { albumDetail } = useAlbumDetail();
  return (
    <Appbar.Header mode="center-aligned">
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={albumDetail?.title || 'Album Details'} />
    </Appbar.Header>
  );
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="List" component={ListScreen} options={{ header: (props) => <ListHeader {...props} /> }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ header: (props) => <DetailsHeader {...props} /> }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;