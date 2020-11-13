import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.noteBackground};
`;

export const Scroller = styled.ScrollView`
  margin-top: 10px;
  padding: 10px;
`;

export const HeaderOptions = styled.View`
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const HeaderButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-family: 'Quicksand-Bold';
  font-size: 20px;
  color: ${(props) => props.theme.colors.noteInputText};
`;

export const NoteTitle = styled.TextInput`
  height: 60px;
  justify-content: flex-start;
  align-items: center;

  margin-top: 20px;
  padding: 10px;

  font-family: 'Quicksand-Bold';
  font-size: 26px;
  color: ${(props) => props.theme.colors.noteInputText};
`;

export const NoteDescription = styled.TextInput`
  margin-top: 20px;
  padding: 10px;

  font-family: 'Quicksand-Regular';
  font-size: 20px;
  color: ${(props) => props.theme.colors.noteInputText};
`;
