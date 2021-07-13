import React from "react";

//native-base
import { List } from "native-base";

//components
import CookieItem from "./CookieItem";

//styles
import { ListWrapper } from "./styles";

const CookieList = ({ cookies }) => {
  const cookieList = cookies.map((cookie) => (
    <CookieItem cookie={cookie} key={cookie.id} />
  ));
  return (
    <ListWrapper>
      <List>{cookieList}</List>
    </ListWrapper>
  );
};

export default CookieList;
