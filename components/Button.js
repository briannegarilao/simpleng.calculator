import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Colors from "../styles/Colors"; // Make sure to import Colors

const Button = ({ text, textStyle, onPress }) => {
  return (
    <TouchableOpacity style={Style.button} onPress={onPress}>
      <Text style={[Style.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const Style = StyleSheet.create({
  button: {
    color: Colors.white01,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: Colors.black01,
    borderStyle: "solid",
    width: WindowWidth.windowWidth / 4,
    aspectRatio: 1,
  },
  text: {
    color: Colors.black01,
    fontSize: 30,
  },
});

export default Button;
