import React, { Component } from "react";
import { Provider } from "react-redux";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { HomeStack } from "./src/screens";
import store from "./src/store";

const AppNavigator = createStackNavigator({
  Home: HomeStack
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
