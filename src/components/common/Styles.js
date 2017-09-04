import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ActivityIndicator
} from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF",
    paddingTop: 40,
    padding: 10,
    alignItems: "center",
    flex: 1
  },
  logo: {
    width: 66,
    height: 55
  },
  heading: {
    fontSize: 30,
    margin: 10,
    marginBottom: 20
  },
  loginInput: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#48BBEC",
    borderRadius: 3,
    color: "#48BBEC"
  },
  button: {
    height: 50,
    backgroundColor: "#48BBEC",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 3,
    alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "400",
    color: "white"
  },
  loader: {
    marginTop: 20
  },
  error: {
    color: "red",
    paddingTop: 10
  }
})
