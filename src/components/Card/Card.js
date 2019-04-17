import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

export function Card({ children }) {
  return <View style={styles.container}>{children}</View>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 190,
    minHeight: 250,
    margin: 10
    // backgroundColor: "#333"
  }
});
