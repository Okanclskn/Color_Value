import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorBox from "../components/ColorBox";

const COLOR_INCREMENT = 1;

const ShowColorScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  function rgbToHex(red, green, blue) {
    return (
      "#" +
      ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)
    );
  }

  var color = rgbToHex(red, green, blue);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.colorarea,
          { backgroundColor: `rgb(${red},${green},${blue})` },
        ]}
      ></View>
      <Text>{`RGB(${red},${green},${blue})`}</Text>
      <Text>{`Hex "${color}"`}</Text>

      <View style={styles.boxes}>
        <ColorBox
          title="Kırmızı"
          onIncrease={() =>
            red + COLOR_INCREMENT > 255 ? null : setRed(red + COLOR_INCREMENT)
          }
          onDecrease={() =>
            red - COLOR_INCREMENT < 0 ? null : setRed(red - COLOR_INCREMENT)
          }
        ></ColorBox>
        <View style={{ alignSelf: "center" }}>
          <ColorBox
            title="Mavi"
            onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
            onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
          ></ColorBox>
        </View>
        <ColorBox
          title="Yeşil"
          onIncrease={() => {
            green + COLOR_INCREMENT > 255
              ? null
              : setGreen(green + COLOR_INCREMENT);
          }}
          onDecrease={() => setGreen(green - COLOR_INCREMENT)}
        ></ColorBox>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  colorarea: {
    alignSelf: "center",
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  },
  boxes: {
    marginVertical: 50,
    height: 200,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});
export default ShowColorScreen;
