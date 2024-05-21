import React from "react";
import {
  Container,
  HeaderContainer,
  HeaderTitle,
  HeaderImg,
  Titletext,
  TitleColored,
  SubTitle,
} from "./styles";
import Background from "../../assets/images/Background.png";
import Cloud from "../../assets/images/Vector.png";

export default function Search() {
  return (
    <Container source={Background} resizeMode="cover">
      <HeaderContainer>
        <HeaderImg source={Cloud} />
        <Titletext>Adriano</Titletext>
      </HeaderContainer>
      <Titletext>
        Boas Vindas ao <TitleColored>TypeWeather</TitleColored>
      </Titletext>
      <SubTitle>Escolha um Local</SubTitle>
    </Container>
  );
}
