import React from "react";
import Home from "./screens/home";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Text,
  IconRegistry,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { default as theme } from "./theme/custom-theme.json"; // <-- Import app theme

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <Home />
      </ApplicationProvider>
    </>
  );
}
