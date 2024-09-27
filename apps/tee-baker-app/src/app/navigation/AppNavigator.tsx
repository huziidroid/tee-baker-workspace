import { NavigationContainer, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { HomeScreen, LandingScreen, SigninScreen, SignupScreen } from '@/screens';

import { NavigationService } from '@/services';

import { SCREENS } from './constants';

const Stack = createNativeStackNavigator();

interface IAppNavigatorProps {
  theme?: Theme;
}
const AppNavigator = (props: IAppNavigatorProps) => {
  const { theme } = props;

  return (
    <NavigationContainer ref={NavigationService.navigationRef} theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.LANDING} component={LandingScreen} />
        <Stack.Screen name={SCREENS.SIGN_UP} component={SignupScreen} />
        <Stack.Screen name={SCREENS.SING_IN} component={SigninScreen} />
        <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
