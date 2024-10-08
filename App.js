import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, StatusBar } from "react-native";
import Colors from "./styles/Colors";
import AppTopContainer from "./components/AppTopContainer";
import AppBotContainer from "./components/AppBotContainer";

// CONSTANT VARIABLES
const statusBarHeight = StatusBar.currentHeight || 0;

export default function App() {
  const [displayValue, setDisplayValue] = useState("0");

  return (
    <SafeAreaView style={styles.fullContainer}>
      <AppTopContainer displayValue={displayValue} />
      <AppBotContainer
        displayValue={displayValue}
        setDisplayValue={setDisplayValue}
      />
    </SafeAreaView>
  );
}

// these are the styles
const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    backgroundColor: Colors.white01,
    marginTop: statusBarHeight,
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
});
