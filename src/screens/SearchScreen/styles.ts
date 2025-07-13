import { StyleSheet } from "react-native";

export const searchScreenStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
  spinner: {
    marginVertical: 24,
    alignSelf: "center",
  },
  errorBanner: {
    backgroundColor: "#ffcccc",
    padding: 12,
    borderRadius: 6,
    marginBottom: 16,
    alignItems: "center",
  },
  errorText: {
    color: "#b00020",
    fontWeight: "bold",
  },
  splashIcon: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 24,
  },
});
