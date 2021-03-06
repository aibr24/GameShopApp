import { ImageBackground } from "react-native";
import React from "react";
import { Button, View, Text, Container, Content } from "native-base";
import { HomePageBackground, TopView, ButtonView } from "./styles";

const Home = ({ navigation }) => {
  return (
    <Container>
      <HomePageBackground
        resizeMode="cover"
        blurRadius="1"
        source={{
          uri:
            "https://s1.econotimes.com/assets/uploads/20190120e168eca74623a62b0_th_1024x0.jpg",
        }}
      >
        <TopView>
          <ButtonView>
            <Button full dark onPress={() => navigation.navigate("Games")}>
              <Text>Games</Text>
            </Button>
          </ButtonView>
          <ButtonView>
            <Button
              full
              dark
              onPress={() => {
                navigation.navigate("Publisher");
              }}
            >
              <Text>Publishers</Text>
            </Button>
          </ButtonView>
        </TopView>
      </HomePageBackground>
    </Container>
  );
};

export default Home;
