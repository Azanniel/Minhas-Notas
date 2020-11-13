import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../pages/SplashScreen';
import ListNotes from '../pages/ListNotes';
import Note from '../pages/Note';

import {useTheme} from '../contexts/ThemeContext';

const Stack = createStackNavigator();

const Routes = () => {
  const {theme} = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: theme.colors.background,
          },
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />

        <Stack.Screen name="ListNotes" component={ListNotes} />

        <Stack.Screen name="Note" component={Note} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
