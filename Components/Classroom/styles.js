import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  createButton: {
    alignSelf: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgb(94, 32, 50)",
    marginTop: 20
  },

  createButtonText: {
    color: "#FCFDFF",
    fontSize: 16
  },

  authContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCFDFF",
    paddingRight: 60,
    paddingLeft: 60
  },

  authOther: {
    color: "#A47B88",
    marginTop: 15
  },

  authTextInput: {
    alignSelf: "stretch",
    height: 40,
    marginBottom: 30,
    color: "rgb(94, 32, 50)",
    borderBottomColor: "rgb(94, 32, 50)",
    borderBottomWidth: 1
  },

  authTitle: {
    color: "rgb(94, 32, 50)",
    fontSize: 24,
    marginBottom: 20,
    borderBottomColor: "rgb(94, 32, 50)"
  }
});

export default styles;
