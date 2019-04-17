import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { black } from "../../../assets/colors";
import { Card, Image, Title, Description } from "../";

export function PlaylistCard({ thumbSource, name, description, downloaded }) {
  function renderDownloadIcon({ downloaded }) {
    if (downloaded)
      return (
        <View style={styles.description}>
          <Icon
            style={{ marginRight: 5 }}
            name="check-circle"
            size={24}
            color={black.light}
          />
          <View style={{ flex: 1 }}>
            <Description numberOfLines={1}>{description}</Description>
          </View>
        </View>
      );

    return <Description numberOfLines={2}>{description}</Description>;
  }

  return (
    <Card>
      <Image source={thumbSource} />
      <Title align="left">{name}</Title>
      {renderDownloadIcon({ downloaded })}
    </Card>
  );
}

PlaylistCard.defaultProps = {
  downloaded: false
};

PlaylistCard.propTypes = {
  name: PropTypes.string.isRequired,
  downloaded: PropTypes.bool,
  thumbSource: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ uri: PropTypes.string })
  ]).isRequired,
  description: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  description: {
    flexDirection: "row",
    alignSelf: "stretch"
  },
  icon: {
    marginRight: 5
  }
});
