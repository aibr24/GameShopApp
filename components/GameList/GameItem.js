import React from "react";
//styles
import defaultUKNOW from "../../defaultUKNOW.jpg";
import { ListItem, Left, Thumbnail, Body, Right } from "native-base";
import { GameDescription } from "./styles";

const GameItem = ({ game }) => {
  return (
    <ListItem avatar>
      <Left>
        <Thumbnail small source={{ uri: game.image } || defaultUKNOW} />
      </Left>
      <Body>
        <GameDescription>{game.name}</GameDescription>
      </Body>
    </ListItem>
  );
};

export default GameItem;
