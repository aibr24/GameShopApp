import React from "react";
import { View, Text } from "react-native";
import { TopView } from "../Home/styles";
import { ListItem, Left, Thumbnail, Body, Right } from "native-base";

//styling
import { GameName, GamePrice, GameTotalPrice } from "./styles";
import { observer } from "mobx-react";
import { TrashIcon } from "../buttons/styles";
import cartStore from "../../stores/CartStore";
const CartItem = ({ item }) => {
  return (
    <ListItem avatar>
      <Left>
        <Thumbnail small source={{ uri: item.image }} />
      </Left>
      <Body>
        <GameName>{item.name}</GameName>
        <GamePrice>
          {item.price} KWD x {item.quant}
        </GamePrice>
        <GameTotalPrice>{item.price * item.quant} KWD</GameTotalPrice>
      </Body>
      <Right>
        <TrashIcon
          name="trash-alt"
          type="FontAwesome5"
          onPress={() => cartStore.removeItemFromCart(item.id)}
        />
      </Right>
    </ListItem>
  );
};

export default observer(CartItem);
