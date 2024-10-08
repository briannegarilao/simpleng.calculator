import { Text, View, StyleSheet } from "react-native";

const SubText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>238483</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WindowWidth.windowWidth,
    alignItems: "flex-end",
  },
  textStyle: {
    fontSize: 25,
    color: Colors.black50,
    textAlign: "right",
  },
});

export default SubText;
