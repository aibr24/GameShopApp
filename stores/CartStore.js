import { decorate, observable, computed } from "mobx";
import AsyncStorage from "@react-native-community/async-storage";

class CartStore {
  items = [
    {
      gameId: 2,
      quant: 2,
    },
    {
      gameId: 3,
      quant: 1,
    },
  ];

  addItemToCart = async (newItem) => {
    const foundItem = this.items.find((item) => item.gameId === newItem.gameId);
    if (foundItem) foundItem.quant += newItem.quant;
    else this.items.push(newItem);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  fetchCart = async () => {
    const items = await AsyncStorage.getItem("myCart");
    this.items = items ? JSON.parse(items) : [];
  };

  get totalQuant() {
    let total = 0;
    this.items.forEach((item) => (total += item.quant));
    return total;
  }

  removeItemFromCart = async (gameId) => {
    this.items = this.items.filter((item) => item.gameId !== gameId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };
}

decorate(CartStore, {
  items: observable,
  totalQuant: computed,
});

const cartStore = new CartStore();
cartStore.fetchCart();
export default cartStore;
