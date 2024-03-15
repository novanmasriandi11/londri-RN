import { StyleSheet } from "react-native";

export const Styling = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 7,
    backgroundColor: "transparent",
  },
  inputField: {
    width: 300,
    height: 45,
    borderWidth: 1,
    borderColor: "#bababa",
    backgroundColor: "#ECECEC",
    borderRadius: 11,
    padding: 10,
  },

  focused: {
    borderColor: "blue",
    borderWidth: 3,
  },
});
