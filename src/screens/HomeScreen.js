import React from "react";
import { Text, View, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { black } from "../assets/colors";

function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <StatusBar barStyle="light-content" backgroundColor={black.primary} />
    </View>
  );
}

HomeScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" color={tintColor} size={24} />
  )
};

export default HomeScreen;
