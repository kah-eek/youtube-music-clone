import React from "react";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

function LibraryScreen() {
  return <Text>Hotlist</Text>;
}

LibraryScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="library-music" color={tintColor} size={24} />
  )
};

export default LibraryScreen;
