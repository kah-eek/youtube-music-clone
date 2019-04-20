import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import styled from "styled-components/native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { black } from "../assets/colors";
import HomeScreen from "./HomeScreen";
import HotlistScreen from "./HotlistScreen";
import LibraryScreen from "./LibraryScreen";
import YouTubeLogo from "../components/YouTubeLogo";
import ProfilePicture from "../components/ProfilePicture";

const Toolbar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 150;
  /* background-color: green; */
`;

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
  headerRight: (
    <Toolbar>
      <Icon borderRadius={100} name="cast-connected" color="white" size={24} />
      <Icon name="search" color="white" size={24} />
      <ProfilePicture
        applyPadding
        size={24}
        source={{
          uri:
            "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg"
        }}
      />
    </Toolbar>
  ),
  headerTintColor: "white"
};
