import React from "react";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

function HotlistScreen() {
  return <Text>Hotlist</Text>;
}

HotlistScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="whatshot" color={tintColor} size={24} />
  )
};

export default HotlistScreen;
