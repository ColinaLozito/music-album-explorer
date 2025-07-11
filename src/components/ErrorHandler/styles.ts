import { StyleSheet } from 'react-native';

export const errorHandlerStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 16,
    color: '#b00020',
    fontWeight: 'bold',
  },
  message: {
    marginBottom: 24,
    color: '#333',
    textAlign: 'center',
  },
  button: {
    marginTop: 8,
  },
}); 