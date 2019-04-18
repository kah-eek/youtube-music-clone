import React from "react";
import PropTypes from "prop-types";
import { Image, View, StyleSheet, TouchableNativeFeedback } from "react-native";

const ProfilePicture = ({ size, source, applyPadding, onPress }) => {
  const { borderRadius } = styles.container;

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        style={{
          ...styles.container,
          padding: applyPadding ? 3 : undefined
        }}
      >
        <Image
          style={{
            borderRadius,
            width: size,
            height: size
          }}
          source={source}
        />
      </View>
    </TouchableNativeFeedback>
  );
};

ProfilePicture.defaultProps = {
  onPress: () => {}
};

ProfilePicture.propTypes = {
  onPress: PropTypes.func,
  applyPadding: PropTypes.bool,
  size: PropTypes.number.isRequired,
  source: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#d31119"
  }
});

export default ProfilePicture;
