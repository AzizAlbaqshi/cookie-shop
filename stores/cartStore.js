import { makeAutoObservable } from "mobx";

class CartStore {
  items = [
    {
      cookieId: 7,
      quantity: 2,
    },
    {
      cookieId: 9,
      quantity: 3,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

const cartStore = new CartStore();
export default cartStore;
