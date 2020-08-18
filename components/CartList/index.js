import React from "react";
import { View, Text } from "react-native";
import cartStore from "../../stores/CartStore";
import gameStore from "../../stores/GameStore";
import CartItem from "./CartItem";
import { List } from "native-base";
import { observer } from "mobx-react";

const CartList = () => {
  const cartList = cartStore.items
    .map((item) => ({
      ...gameStore.getGameById(item.gameId),
      quant: item.quant,
    }))
    .map((item) => <CartItem item={item} key={item.name} />);

  return <List>{cartList}</List>;
};

export default observer(CartList);
