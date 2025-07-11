import { StyleSheet } from 'react-native';

export const listScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 24,
    textAlign: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
    paddingTop: 16,
    paddingLeft: 8,
  },
  artistName: {
    marginBottom: 16,
    marginTop: 32,
    fontSize: 24,
    fontWeight: 'bold',
  },
  list: {
    width: '100%',
    marginTop: 16,
  },
  overlaySpinner: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
}); 