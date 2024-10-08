import React from "react";
import { View } from "react-native";
import IconContainer from "./IconContainer";
import ButtonContainer from "./ButtonContainer";

const AppBotContainer = ({ displayValue, setDisplayValue }) => {
  // Function to handle button presses
  const handleButtonPress = (buttonText) => {
    if (buttonText === "C") {
      setDisplayValue("0");
    } else {
      if (displayValue === "0") {
        setDisplayValue(buttonText);
      } else {
        setDisplayValue(displayValue + buttonText);
      }
    }
  };
  return (
    <View>
      <IconContainer></IconContainer>
      <ButtonContainer onButtonPress={handleButtonPress} />
    </View>
  );
};

export default AppBotContainer;
