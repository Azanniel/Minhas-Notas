import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Scroller = styled.ScrollView`
  margin-top: 10px;
  padding: 10px;
`;

export const Header = styled.View`
  height: 100px;
  padding: 0 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-family: 'Quicksand-Bold';
  font-size: 24px;
  color: ${(props) => props.theme.colors.text};
`;

export const ToogleThemeButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.Text`
  font-family: 'Quicksand-Light';
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
`;

export const CardArea = styled.View`
  margin-top: 50px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  padding-bottom: 20px;
`;

export const LoadingCards = styled.ActivityIndicator``;

export const Instructions = styled.Text`
  width: 100%;
  font-family: 'Quicksand-Regular';
  font-size: 18px;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
`;

export const ElevationFloatButton = styled.View.attrs({
  elevation: 2,
})`
  position: absolute;
  bottom: 50px;
  right: 30px;

  justify-content: center;
  align-items: center;

  width: 70px;
  height: 70px;

  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.floatButton};
`;

export const FloatButton = styled.TouchableOpacity`
  width: 70px;
  height: 70px;

  justify-content: center;
  align-items: center;

  border-radius: 50px;
`;
