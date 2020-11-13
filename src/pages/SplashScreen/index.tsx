import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import IconSplash from '../../assets/IconSplash.svg';

import {Container} from './styles';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 1,
        routes: [{name: 'ListNotes'}],
      });
    }, 1400);
  }, [navigation]);

  return (
    <Container>
      <IconSplash />
    </Container>
  );
};

export default SplashScreen;
