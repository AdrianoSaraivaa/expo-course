import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  margin-top: 40px;
`;

export const HeaderImg = styled.Image`
  margin-top: 20px;
  margin-right: 10px;
  width: 36px;
  height: 24px;
`;

export const Titletext = styled.Text`
  margin-top: 20px;
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

export const TitleColored = styled.Text`
  font-size: 20px;
  color: #8FB2F5;  
  font-weight: bold;
`;

export const SubTitle = styled.Text`
margin-top: 20px;
  font-size: 14px;
  color: white;
  font-weight: normal;
`;
