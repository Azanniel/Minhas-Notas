import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

import {INote} from '../storage/noteStorage';

const Container = styled.SafeAreaView.attrs({
  elevation: 2,
})`
  width: ${Dimensions.get('window').width / 2 - 30}px;
  height: 180px;

  margin: 10px;

  border-radius: 20px;
  background-color: #fff;
`;

const Touchable = styled.TouchableOpacity`
  flex: 1;
  padding: 10px;
`;

const Title = styled.Text`
  font-family: 'Quicksand-Bold';
  font-size: 18px;
  color: #333;
  margin-bottom: 5px;
`;

const Subtitle = styled.Text`
  font-family: 'Quicksand-Regular';
  font-size: 14px;
  color: #666;
  line-height: 20px;
`;

const CardNote = ({id, title, description}: INote) => {
  const navigation = useNavigation();

  const handleNavigateToNote = () => {
    navigation.navigate('Note', {
      id,
      title,
      description,
    });
  };

  return (
    <Container>
      <Touchable onPress={handleNavigateToNote}>
        {title ? (
          <Title numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Title>
        ) : null}
        <Subtitle numberOfLines={6} ellipsizeMode="tail">
          {description}
        </Subtitle>
      </Touchable>
    </Container>
  );
};

export default CardNote;
