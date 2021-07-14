import React from "react";

//styles
import {
  HomeBackground,
  OverLayContainter,
  BottomStyling,
  ButtonStyling,
  TopStyling,
  Title,
} from "../styles";

const Home = ({ navigation }) => {
  return (
    <HomeBackground
      source={{
        uri:
          "https://cdn.loveandlemons.com/wp-content/uploads/2020/02/vegan-chocolate-chip-cookies.jpg",
      }}
    >
      <OverLayContainter>
        <TopStyling>
          <Title>Cookies and Beyond</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyling onPress={() => navigation.navigate("BakeryList")}>
            Click here to skip
          </ButtonStyling>
        </BottomStyling>
      </OverLayContainter>
    </HomeBackground>
  );
};

export default Home;
