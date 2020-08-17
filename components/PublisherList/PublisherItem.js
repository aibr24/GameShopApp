import React from "react";

//styles
import defaultUKNOW from "../../defaultUKNOW.jpg";
import { ListItem, Left, Thumbnail, Body, Right } from "native-base";
import { PubDescription } from "./styles";

const PublisherItem = ({ publisher, navigation }) => {
  return (
    <ListItem
      avatar
      onPress={() => {
        navigation.navigate("Games", { publisher: publisher });
      }}
    >
      <Left>
        <Thumbnail source={{ uri: publisher.image }} />
      </Left>
      <Body>
        <PubDescription>{publisher.name}</PubDescription>
      </Body>
    </ListItem>
  );
};

export default PublisherItem;
