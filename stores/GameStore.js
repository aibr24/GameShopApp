import { decorate, observable } from "mobx";
import instance from "./instance";

class GameStore {
  games = [];
  loading = true;

  getGameById = (gameId) => this.games.find((game) => game.id === gameId);

  fetchGames = async () => {
    try {
      const res = await instance.get("/games");
      this.games = res.data;
      this.loading = false;
    } catch (error) {
      console.log("ERROOOROROROROR", error);
    }
  };
}

decorate(GameStore, {
  games: observable,
  loading: observable,
});

const gameStore = new GameStore();
gameStore.fetchGames();
export default gameStore;
