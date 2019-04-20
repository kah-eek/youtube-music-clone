import React from "react";
import PropTypes from "prop-types";
import { Text, ImageBackground, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export const HotlistCard = ({ artSource, title, description }) => (
  <ImageBackground style={styles.imageBackground} source={artSource}>
    <LinearGradient
      colors={["transparent", "#0e0e0e"]}
      locations={[0.6, 1]}
      style={styles.info}
    >
      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>
      <Text style={styles.description}>{description}</Text>
    </LinearGradient>
  </ImageBackground>
);

HotlistCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  artSource: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired
};

const styles = StyleSheet.create({
  imageBackground: {
    height: 250,
    width: null,
    justifyContent: "flex-end",
    alignSelf: "stretch"
  },
  info: {
    padding: 18,
    justifyContent: "flex-end",
    flex: 1
  },
  title: {
    lineHeight: 40,
    flexWrap: "wrap",
    fontSize: 28,
    color: "#fefefc",
    fontWeight: "bold"
  },
  description: {
    lineHeight: 36,
    fontSize: 18,
    color: "#fbfbf9"
  }
});
