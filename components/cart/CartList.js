import React from "react";

import { Spinner, List } from "native-base";

//stores
import cartStore from "../../stores/cartStore";
import cookieStore from "../../stores/cookieStore";

//component
import CartItem from "./CartItem";

//observer
import { observer } from "mobx-react";

const CartList = () => {
  if (cookieStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...cookieStore.getCookieById(item.cookieId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.id} />);
  return <List>{cartList}</List>;
};

export default observer(CartList);
