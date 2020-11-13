import React, {createContext, useContext, useState} from 'react';
import {useColorScheme} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DefaultTheme, ThemeProvider} from 'styled-components';

import themes from '../themes/index';

interface IThemeContext {
  theme: DefaultTheme;
  changeTheme(schema: DefaultTheme): void;
  toogleTheme(): void;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeAppProvider: React.FC = ({children}) => {
  const deviceTheme = useColorScheme();
  const [theme, setTheme] = useState(() =>
    deviceTheme ? themes[deviceTheme] : themes.light,
  );

  const toogleTheme = () => {
    theme.title === 'light'
      ? changeTheme(themes.dark)
      : changeTheme(themes.light);
  };

  const changeTheme = (schema: DefaultTheme) => {
    const storageValue = JSON.stringify(schema);
    AsyncStorage.setItem('@theme', storageValue).then(() => {
      setTheme(schema);
    });
  };

  return (
    <ThemeContext.Provider value={{theme, toogleTheme, changeTheme}}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeAppProvider');
  }

  return context;
};
