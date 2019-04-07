import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text } from "react-native";
import { black } from "../../../assets/colors";

export function Description({ children, numberOfLines }) {
  return (
    <Text numberOfLines={numberOfLines} style={styles.text}>
      {children}
    </Text>
  );
}

Description.defaultProps = {
  numberOfLines: 2
};

Description.propTypes = {
  numberOfLines: PropTypes.number,
  children: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: black.light
  }
});
