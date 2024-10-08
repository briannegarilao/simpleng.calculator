import { StyleSheet, Image, View } from "react-native";
import WindowWidth from "../styles/WindowWidth";

const Icon = ({ source }) => {
  return (
    <View style={styles.icon}>
      <Image source={source} style={styles.image} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: WindowWidth.windowWidth / 4,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default Icon;
