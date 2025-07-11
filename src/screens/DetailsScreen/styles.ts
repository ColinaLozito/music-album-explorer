import { StyleSheet } from 'react-native';

export const detailsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  backButtonWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
    paddingTop: 16,
    paddingLeft: 8,
  },
  title: {
    marginBottom: 16,
    textAlign: 'center',
  },
  noDetails: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediaSection: {
    marginTop: 24,
  },
  mediaTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  list: {
    paddingBottom: 64,
  },
});
