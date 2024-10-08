import { View, StyleSheet } from "react-native";
import WindowWidth from "../styles/WindowWidth";
import Button from "./Button";
import Colors from "../styles/Colors"; // Make sure to import Colors

const ButtonContainer = ({ onButtonPress }) => {
  return (
    <>
      {/* // ROW 1 */}
      <View style={styles.buttonContainer}>
        <Button
          text={"C"}
          textStyle={{ color: Colors.red01 }}
          onPress={() => onButtonPress("C")}
        />
        <Button text={"( )"} onPress={() => onButtonPress("( )")} />
        <Button text={"%"} onPress={() => onButtonPress("%")} />
        <Button text={"÷"} onPress={() => onButtonPress("÷")} />
      </View>
      {/* // ROW 2 */}
      <View style={styles.buttonContainer}>
        <Button text={"7"} onPress={() => onButtonPress("7")} />
        <Button text={"8"} onPress={() => onButtonPress("8")} />
        <Button text={"9"} onPress={() => onButtonPress("9")} />
        <Button text={"×"} onPress={() => onButtonPress("×")} />
      </View>
      {/* // ROW 3 */}
      <View style={styles.buttonContainer}>
        <Button text={"4"} onPress={() => onButtonPress("4")} />
        <Button text={"5"} onPress={() => onButtonPress("5")} />
        <Button text={"6"} onPress={() => onButtonPress("6")} />
        <Button text={"−"} onPress={() => onButtonPress("−")} />
      </View>
      {/* // ROW 4 */}
      <View style={styles.buttonContainer}>
        <Button text={"1"} onPress={() => onButtonPress("1")} />
        <Button text={"2"} onPress={() => onButtonPress("2")} />
        <Button text={"3"} onPress={() => onButtonPress("3")} />
        <Button text={"+"} onPress={() => onButtonPress("+")} />
      </View>
      {/* // ROW 5 */}
      <View style={styles.buttonContainer}>
        <Button text={"+/-"} onPress={() => onButtonPress("+/-")} />
        <Button text={"0"} onPress={() => onButtonPress("0")} />
        <Button text={"."} onPress={() => onButtonPress(".")} />
        <Button text={"="} onPress={() => onButtonPress("=")} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: WindowWidth.windowWidth,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
  },
});

export default ButtonContainer;
