import { View, StyleSheet } from "react-native";
import Icon from "./Icon";

const IconContainer = () => {
  return (
    <View style={styles.iconContainer}>
      <View style={styles.iconContainerLeft}>
        <Icon source={require("../assets/icons/black_png/clock_black.png")} />
        <Icon source={require("../assets/icons/black_png/sun_black.png")} />
      </View>
      <Icon source={require("../assets/icons/black_png/delete_black.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: WindowWidth.windowWidth,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  iconContainerLeft: {
    flexDirection: "row",
  },
});

export default IconContainer;
