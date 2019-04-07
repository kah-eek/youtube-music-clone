import React from "react";
import PropTypes from "prop-types";
import { Image as ImageRN, StyleSheet } from "react-native";

export function Image({ source, rounded }) {
  function renderBorderRadius({ rounded }) {
    return { borderRadius: rounded ? 100 : 0 };
  }

  return (
    <ImageRN
      style={[styles.image, renderBorderRadius({ rounded })]}
      source={source}
    />
  );
}

Image.propTypes = {
  source: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};

const styles = StyleSheet.create({
  image: {
    width: 190,
    height: 190
  }
});
