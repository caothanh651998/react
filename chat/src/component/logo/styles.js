import { StyleSheet } from "react-native";
import { color, appStyle } from "../../utility";
import { smallDeviceHeight } from "../../utility/constants";

const getDimensions = () => {
  if (appStyle.deviceHeight > smallDeviceHeight) {
    return {
      height: 150,
      width: 150,
      borderRadius: 50,
      logoFontSize: 60,
    };
  } else {
    return {
      height: 120,
      width: 120,
      borderRadius: 40,
      logoFontSize: 70,
    };
  }
};

export default StyleSheet.create({
  logo: {
    height: getDimensions().height,
    width: getDimensions().width,
    borderRadius: getDimensions().borderRadius,
    backgroundColor: color.UDA,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: getDimensions().logoFontSize,
    fontWeight: "bold",
    color: color.WHITE,
  },
});
