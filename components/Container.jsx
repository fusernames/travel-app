import React from "react";
import { SafeAreaView, View, ImageBackground, Dimensions } from "react-native";
const image = require("../assets/images/turkey.jpg");

const screen = Dimensions.get("screen");

export default ({ children }) => {
  return (
    <View>
      <ImageBackground
        style={{ width: screen.width, height: "100%" }}
        source={image}
      >
        <SafeAreaView>
          <View style={{ padding: 24 }}>{children}</View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
