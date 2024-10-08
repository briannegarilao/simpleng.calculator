import React from "react";
import { Text, View, StyleSheet } from "react-native";
import WindowWidth from "../styles/WindowWidth"; // Assuming you have WindowWidth for sizing
import Colors from "../styles/Colors"; // Assuming Colors is available for styling

const MainText = ({ value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: WindowWidth.windowWidth,
    alignItems: "flex-end",
  },
  textStyle: {
    fontSize: 50,
    color: Colors.black01,
  },
});

export default MainText;
