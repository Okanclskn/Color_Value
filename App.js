import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ShowColorScreen from "./src/screens/ShowColorScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ShowColorScreen></ShowColorScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
