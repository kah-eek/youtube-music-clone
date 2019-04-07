import React from "react";
import { Text } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { black } from "../assets/colors";
import HomeScreen from "./HomeScreen";
import HotlistScreen from "./HotlistScreen";
import LibraryScreen from "./LibraryScreen";
import YouTubeLogo from "../components/YouTubeLogo";

export const HomeStack = createMaterialBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Hotlist: { screen: HotlistScreen },
    Library: { screen: LibraryScreen }
  },
  {
    initialRouteName: "Home",
    inactiveTintColor: "#8e8e8e",
    barStyle: { backgroundColor: black.dark }
  }
);

HomeStack.navigationOptions = {
  headerTitle: <YouTubeLogo />,
  headerStyle: {
    backgroundColor: black.primary
  },
  headerTintColor: "white"
};
