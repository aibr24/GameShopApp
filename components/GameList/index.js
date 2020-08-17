import React from "react";
import GameItem from "./GameItem";
import { View, Text } from "react-native";
import { observer } from "mobx-react";

//styles
import { List, Content, Spinner } from "native-base";

//stores
import gameStore from "../../stores/GameStore";

const GameList = ({ navigation, route }) => {
  if (gameStore.loading) return <Spinner />;
  const publisher = route.params?.publisher;

  const gameList = publisher
    ? publisher.games
        .map((game) => gameStore.getGameById(game.id))
        .map((game) => <GameItem game={game} key={game.id} />)
    : gameStore.games.map((game) => <GameItem game={game} key={game.id} />);

  return (
    <Content>
      <List>{gameList}</List>
    </Content>
  );
};
export default observer(GameList);
