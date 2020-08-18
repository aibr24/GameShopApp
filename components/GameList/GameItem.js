import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";
//styles
import defaultUKNOW from "../../defaultUKNOW.jpg";
import {
  ListItem,
  Left,
  Thumbnail,
  Body,
  Right,
  Button,
  Text,
} from "native-base";
import { GameDescription } from "./styles";
import cartStore from "../../stores/CartStore";
import { observer } from "mobx-react";
const GameItem = ({ game }) => {
  console.log(game.image);
  const [quant, setQuant] = useState(0);

  const handleAdd = () => {
    const newGame = { quant, gameId: game.id };
    cartStore.addItemToCart(newGame);
  };
  return (
    <ListItem avatar>
      <Left>
        <Thumbnail small source={{ uri: game.image }} />
      </Left>
      <Body>
        <GameDescription>{game.name}</GameDescription>
      </Body>
      <NumericInput
        rounded
        totalHeight={40}
        totalWidth={100}
        rightButtonBackgroundColor="#4c525c"
        iconStyle={{ color: "lightgreen" }}
        leftButtonBackgroundColor="#4c525c"
        value={quant}
        onChange={setQuant}
      />
      <Button transparent onPress={handleAdd}>
        <Text
          style={{
            color: "#4c525c",
            marginBottom: -10,
            fontWeight: "bold",
            includeFontPadding: true,
          }}
        >
          Add
        </Text>
      </Button>
    </ListItem>
  );
};

export default observer(GameItem);
