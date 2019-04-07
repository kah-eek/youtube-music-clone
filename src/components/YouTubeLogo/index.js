import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function YouTubeLogo() {
  return (
    <View style={styles.container}>
      <Icon name="youtube" size={38} color="#fe0002" />
      <Text style={styles.text}>Music</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    marginLeft: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
    // backgroundColor: "green"
  },
  text: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 20
  }
});

export default YouTubeLogo;
