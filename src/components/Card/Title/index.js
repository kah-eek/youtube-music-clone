import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

export function Title({ align, children }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { textAlign: align }]} numberOfLines={2}>
        {children}
      </Text>
    </View>
  );
}

Title.defaultProps = { align: "center" };

Title.propTypes = {
  children: PropTypes.string.isRequired,
  align: PropTypes.oneOf(["center", "left", "right"])
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch"
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff"
  }
});
