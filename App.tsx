import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { AppNavigator } from './src/presentation/routes/AppNavigator';

export const App = ()  => {
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  )
}