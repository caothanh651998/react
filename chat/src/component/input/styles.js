import { StyleSheet } from "react-native";
import { appStyle } from "../../utility";

export default StyleSheet.create({
  input: {
    paddingLeft: 16,
    backgroundColor: appStyle.fieldTextColor1,
    width: "90%",
    color: appStyle.udaColor,
    height: appStyle.fieldHeight,
    alignSelf: "center",
    marginVertical: appStyle.fieldMarginVertical,
    fontSize: 16,
    borderBottomColor: appStyle.udaColor,
    borderBottomWidth: 1,
  },
});
