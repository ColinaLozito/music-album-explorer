import { StyleSheet } from 'react-native';

export const errorBoundaryStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#b00020',
    marginBottom: 16,
  },
  message: {
    marginBottom: 24,
    color: '#333',
    textAlign: 'center',
  },
});
