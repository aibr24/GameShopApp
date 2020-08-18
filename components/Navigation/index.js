import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Home from "../Home";
import PublisherList from "../PublisherList";
import GameList from "../GameList";
import CartList from "../CartList";
import CartButton from "../buttons/CartButton";

const RootNav = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#4c525c",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="Publisher"
        component={PublisherList}
        options={{ headerRight: () => <CartButton /> }}
      />
      <Screen
        name="Games"
        component={GameList}
        options={({ route }) => {
          const publisher = route.params?.publisher;
          return publisher
            ? { title: publisher.name, headerRight: () => <CartButton /> }
            : { title: "Games", headerRight: () => <CartButton /> };
        }}
      />
      <Screen name="My Cart" component={CartList} />
    </Navigator>
  );
};

export default RootNav;
