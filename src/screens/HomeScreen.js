import React from "react";
import { View, StatusBar, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { black } from "../assets/colors";
import ListOfArtistsAndPlaylists from "../components/ListOfArtistsAndPlaylists";
import { data } from "../../data.json";

function HomeScreen() {
  function renderItem({ item }) {
    return (
      <ListOfArtistsAndPlaylists
        title={item.listTitle}
        subtitle={item.listSubtitle}
        listData={item.content}
      />
    );
  }

  return (
    <View style={{ backgroundColor: "#000", padding: 16, flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor={black.primary} />
      <FlatList
        data={data.lists}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

HomeScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" color={tintColor} size={24} />
  )
};

export default HomeScreen;
