import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

import Home from "./screens/Home";

EStyleSheet.build({
  $primaryColor: "#5F495F",
  $white: "#FFFFFF"
});

export default () => <Home />;
