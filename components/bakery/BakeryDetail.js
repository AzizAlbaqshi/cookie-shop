import React from "react";

//stores
import bakeryStore from "../../stores/bakeryStore";
import cookieStore from "../../stores/cookieStore";

//observer
import { observer } from "mobx-react";
import CookieList from "../cookie/CookieList";

//styles
import {
  BakeryDetailTitle,
  BakeryDetailImage,
  BakeryDetailWrapper,
} from "./styles";

//native-base
import { Spinner } from "native-base";

const BakeryDetail = ({ navigation, route }) => {
  const { bakery } = route.params;
  if (bakeryStore.loading) return <Spinner />;

  const cookies = bakery.cookies.map((cookie) =>
    cookieStore.getCookieById(cookie.id)
  );
  return (
    <>
      <BakeryDetailWrapper>
        <BakeryDetailImage source={{ uri: bakery.image }} />
        <BakeryDetailTitle>{bakery.name}</BakeryDetailTitle>
      </BakeryDetailWrapper>
      <CookieList cookies={cookies} />
    </>
  );
};

export default observer(BakeryDetail);
