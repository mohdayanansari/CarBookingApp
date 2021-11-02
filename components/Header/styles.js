import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 25,
    width: "100%",
    position: "absolute",
    top: 50,
    zIndex: 10,
    // backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});

export default Styles;
