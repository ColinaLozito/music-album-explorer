/**
 * App navigation setup using React Navigation's native stack navigator.
 *
 * - Defines the main navigation stack for the app: Search, List, and Details screens.
 * - Custom headers display artist or album information using context.
 * - Each screen is registered with its component and header options.
 */
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

// Create the main stack navigator with type safety
const Stack = createNativeStackNavigator<RootStackParamList>()

/**
 * Custom header for the List screen, showing the current artist name from context.
 */
const ListHeader = ({ navigation, back }: { navigation?: any; back?: any }) => {
  const { artist } = useArtist();
  return (
    <Appbar.Header mode="center-aligned">
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={artist?.name || 'Albums'} />
    </Appbar.Header>
  );
}

/**
 * Custom header for the Details screen, showing the current album title from context.
 */
const DetailsHeader = ({ navigation, back }: { navigation?: any; back?: any }) => {
  const { albumDetail } = useAlbumDetail();
  return (
    <Appbar.Header mode="center-aligned">
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={albumDetail?.title || 'Album Details'} />
    </Appbar.Header>
  );
}

/**
 * Main app navigator component.
 * Registers all screens and their headers in the navigation stack.
 */
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