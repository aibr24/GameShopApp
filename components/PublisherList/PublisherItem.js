import React from "react";
import defaultUKNOW from "../../defaultUKNOW.jpg";

//styles
import { ListItem, Left, Thumbnail, Body, Right } from "native-base";
import { PubDescription } from "./styles";

const PublisherItem = ({ publisher }) => {
  return (
    <ListItem avatar>
      <Left>
        <Thumbnail small source={{ uri: publisher.image } || defaultUKNOW} />
      </Left>
      <Body>
        <PubDescription>{publisher.name}</PubDescription>
      </Body>
    </ListItem>
  );
};

export default PublisherItem;
