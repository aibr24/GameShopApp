import React from "react";
import GameItem from "./GameItem";
import { View, Text } from "react-native";
import { observer } from "mobx-react";

//styles
import { List, Content, Spinner } from "native-base";

//stores
import gameStore from "../../stores/GameStore";

const GameList = () => {
  if (gameStore.loading) return <Spinner />;

  const gameList = gameStore.games.map((game) => (
    <GameItem game={game} key={game.id} />
  ));

  return (
    <Content>
      <List>{gameList}</List>
    </Content>
  );
};
export default observer(GameList);
