import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    // marginTop: 50,
    backgroundColor: "#222222",
    height: Dimensions.get("screen").height,
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  subtitleCTA:{
    fontSize: 16,
    textDecorationLine: "underline",
    color: "#222222"
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonsContainer:{
    position: "absolute",
    bottom: 50,
    width: "100%",
  }
});

export default styles;
