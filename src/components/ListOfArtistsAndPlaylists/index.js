import React from "react";
import PropTypes from "prop-types";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { ArtistCard, PlaylistCard } from "../Card";

function ListOfArtistsAndPlaylists({ listData, title, subtitle }) {
  function renderSubtitle() {
    if (!subtitle) return;
    return <Text style={styles.subtitle}>{subtitle}</Text>;
  }
  function renderItem({ item }) {
    if (item.type === "playlist")
      return (
        <PlaylistCard
          downloaded={item.downloaded}
          thumbSource={{ uri: item.thumbnail.url }}
          name={item.name}
          description={item.description}
        />
      );
    return (
      <ArtistCard
        name={item.name}
        subscribersAmount={item.subscribersAmount}
        imageSource={{ uri: item.image.url }}
      />
    );
  }

  return (
    <View style={{ marginBottom: 80 }}>
      {renderSubtitle()}
      <Text style={styles.title}>{title}</Text>
      <FlatList
        style={{ marginTop: 20 }}
        horizontal
        data={listData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#fffffd",
    fontWeight: "900",
    fontSize: 24
  },
  subtitle: {
    textTransform: "uppercase",
    color: "#afafaf",
    fontSize: 18
  }
});

ListOfArtistsAndPlaylists.propTypes = {
  listData: PropTypes.array.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default ListOfArtistsAndPlaylists;
