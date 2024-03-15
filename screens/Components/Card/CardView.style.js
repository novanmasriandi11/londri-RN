import { StyleSheet } from "react-native";

export const Styling = StyleSheet.create({
  card: {
    backgroundColor: "#d4eaf7",
    borderRadius: 8,
    margin: 11,
    padding: 11,
    flexDirection: "row",
    gap: 17,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  content: {
    flex: 1,
    width: 250,
  },

  title: {
    fontSize: 21,
    fontWeight: "bold",
  },

  description: {
    fontSize: 16,
    marginTop: 5,
  },
});
