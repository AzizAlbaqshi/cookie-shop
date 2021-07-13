import React from "react";
//react-native
import { Text, Image } from "react-native";

//native-base
import { List } from "native-base";

const CookieItem = ({ cookie }) => {
  return (
    <List.Item>
      <Image
        source={{ uri: cookie.image }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{cookie.name}</Text>
    </List.Item>
  );
};

export default CookieItem;
