import { ImageBackground } from "react-native";
import React from "react";
import { Button, View, Text, Container, Content } from "native-base";
import { HomePageBackground, TopView } from "./styles";

const Home = ({ navigation }) => {
  return (
    <HomePageBackground
      source={{
        uri:
          "https://s1.econotimes.com/assets/uploads/20190120e168eca74623a62b0_th_1024x0.jpg",
      }}
    >
      <TopView>
        <Button block dark onPress={() => navigation.navigate("Games")}>
          <Text>Games</Text>
        </Button>
        <Button
          block
          dark
          onPress={() => {
            navigation.navigate("Publisher");
          }}
        >
          <Text>Publishers</Text>
        </Button>
      </TopView>
    </HomePageBackground>
  );
};

export default Home;
