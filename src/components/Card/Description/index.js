import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "react-native";

export function Description({ children }) {
  return (
    <Text numberOfLines={2} style={styles.text}>
      {children}
    </Text>
  );
}

Description.propTypes = {
  children: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "#acacac"
  }
});
