import React from "react";

//native-base
import { List, Spinner } from "native-base";

//components
import CookieItem from "./CookieItem";

//styles
import { ListWrapper } from "./styles";

//stores
import cookieStore from "../../stores/cookieStore";

const CookieList = ({ cookies }) => {
  if (cookieStore.loading) return <Spinner />;
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
