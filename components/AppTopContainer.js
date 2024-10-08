import { StyleSheet, View } from "react-native";
import WindowWidth from "../styles/WindowWidth";
import MainText from "./MainText";
import SubText from "./SubText";

const AppTopContainer = ({ displayValue }) => {
  return (
    <View style={styles.topContainer}>
      <MainText value={displayValue}></MainText>
      <SubText></SubText>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    width: WindowWidth.windowWidth,
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default AppTopContainer;
