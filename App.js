import React from "react";
import "react-native-gesture-handler";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Button,
  IconRegistry,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { default as theme } from "./theme/custom-theme.json"; // <-- Import app theme
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// screens
import Home from "./screens/Home";
import Results from "./screens/Results";
import { View, ImageBackground, StatusBar } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                elevation: 0,
              },
              headerTintColor: theme["color-primary-500"],
            }}
          >
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: "Travel app",
              }}
            />
            <Stack.Screen
              name="Results"
              component={Results}
              options={{ title: "Resultats" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
      <StatusBar style="auto" />
    </>
  );
}
