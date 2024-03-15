import { StyleSheet } from "react-native";

export const Styling = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },

  modalContent: {
    backgroundColor: "#F5FCFF",
    flexDirection: "column",
    borderRadius: 10,
    padding: 10,
    width: "80%",
    alignItems: "center",
    marginBottom: 11,
    elevation: 7,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },

  closeBtn: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  closeBtnText: {
    fontSize: 16,
    color: "#fff",
  },
});
