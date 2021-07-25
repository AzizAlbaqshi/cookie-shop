import React, { useState } from "react";
//react-native
import { Text, Image } from "react-native";

//native-base
import { List, Button } from "native-base";

import NumericInput from "react-native-numeric-input";

//stores
import cartStore from "../../stores/cartStore";

const CookieItem = ({ cookie }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    const newItem = { cookieId: cookie.id, quantity };
    cartStore.addToCart(newItem);
  };
  return (
    <List.Item>
      <Image
        source={{ uri: cookie.image }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{cookie.name}</Text>
      <NumericInput
        rounded
        totalWidth={80}
        totalHeight={40}
        initValue={quantity}
        minValue={1}
        onChange={setQuantity}
      />
      <Button onPress={handleAdd}>
        <Text>Add</Text>
      </Button>
    </List.Item>
  );
};

export default CookieItem;
