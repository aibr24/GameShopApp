import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Home from "../Home";
import PublisherList from "../PublisherList";
import GameList from "../GameList";

const RootNav = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen name="Publisher" component={PublisherList} />
      <Screen
        name="Games"
        component={GameList}
        options={({ route }) => {
          const publisher = route.params?.publisher;
          return publisher ? { title: publisher.name } : { title: "Games" };
        }}
      />
    </Navigator>
  );
};

export default RootNav;
