import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ColorBox = ({ title, onIncrease, onDecrease }) => {
  return (
    <View style={styles.boxcontainer}>
      <Text>{title}</Text>
      <View style={styles.iconcontainer}>
        <MaterialCommunityIcons
          name="plus-circle-outline"
          size={40}
          color="black"
          onPress={() => onIncrease()}
        />
        <MaterialCommunityIcons
          name="minus-circle-outline"
          size={40}
          color="black"
          onPress={() => onDecrease()}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  boxcontainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 100,
  },
  iconcontainer: {
    flexDirection: "row",
  },
});

export default ColorBox;
