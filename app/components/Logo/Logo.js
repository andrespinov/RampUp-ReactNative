import React from "react";
import { View, Image, ImageBackground, Text } from "react-native";

import styles from "./styles";

const Logo = () => (
  <View style={styles.container}>
    <ImageBackground
      style={styles.background}
      resizeMode="contain"
      source={require("./images/background.png")}
    >
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require("./images/logo.png")}
      />
    </ImageBackground>
    <Text style={styles.title}>Welcome People</Text>
  </View>
);

export default Logo;
