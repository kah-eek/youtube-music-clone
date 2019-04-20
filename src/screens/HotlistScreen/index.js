import React from "react";
import { View, FlatList, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { HotlistCard } from "../../components/Card";
import { Container, Description, Title, Header } from "./styles";
import { data } from "../../../data.json";

function HotlistScreen() {
  function renderItem({ item, index }) {
    if (!index)
      return (
        <Header>
          <Title>Video Hotlist</Title>
          <Description>New, cool, and trending</Description>
        </Header>
      );

    const { description, title, url } = item;
    return (
      <HotlistCard
        artSource={{
          uri: url
        }}
        title={title}
        description={description}
      />
    );
  }

  return (
    <FlatList
      style={{ flex: 1, backgroundColor: "#000000" }}
      data={data.hotlist}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

HotlistScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="whatshot" color={tintColor} size={24} />
  )
};

export default HotlistScreen;
