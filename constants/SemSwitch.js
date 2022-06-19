import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { VAR } from "../core/variable";

export default ({ selectionMode, option1, option2, onSelectSwitch }) => {
  const [getselectionMode, setSelectionMode] = useState(selectionMode);
  const updateSwitchData = (value) => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          updateSwitchData("up");
        }}
        style={[
          styles.button,
          {
            backgroundColor:
              getselectionMode == "up" ? VAR.BACKGROUND_COLOR : VAR.THEME_COLOR,
          },
        ]}
      >
        <Text
          style={{
            color: getselectionMode == "up" ? VAR.BLACK_COLOR : VAR.WHITE_COLOR,
            fontWeight: "bold",
          }}
        >
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          updateSwitchData("down");
        }}
        style={[
          styles.button,
          {
            backgroundColor:
              getselectionMode == "down"
                ? VAR.BACKGROUND_COLOR
                : VAR.THEME_COLOR,
          },
        ]}
      >
        <Text
          style={{
            color:
              getselectionMode == "down" ? VAR.BLACK_COLOR : VAR.WHITE_COLOR,
            fontWeight: "bold",
          }}
        >
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: VAR.THEME_COLOR,
  },
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 20,
    backgroundColor: "red",
  },
});
