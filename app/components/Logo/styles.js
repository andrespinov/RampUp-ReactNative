import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const imageWidth = Dimensions.get("window").width / 2;

export default EStyleSheet.create({
  container: {
    alignItems: "center"
  },
  background: {
    justifyContent: "center",
    alignItems: "center",
    width: imageWidth,
    height: imageWidth
  },
  logo: {
    width: imageWidth / 2
  },
  title: {
    fontWeight: "500",
    fontSize: 25,
    letterSpacing: 2,
    marginTop: 15,
    color: "$white"
  }
});
