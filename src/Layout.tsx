import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {DefaultTheme} from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import {useTheme} from './contexts/ThemeContext';
import Routes from './routes/Routes';

const Layout = () => {
  const {theme, changeTheme} = useTheme();

  useEffect(() => {
    AsyncStorage.getItem('@theme')
      .then((storageValue) => {
        if (storageValue !== null) {
          const SchemaTheme: DefaultTheme = JSON.parse(storageValue);
          changeTheme(SchemaTheme);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    changeNavigationBarColor(theme.colors.background, false, true);
  }, [theme]);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
      />
      <Routes />
    </>
  );
};

export default Layout;
