import { NavigationContainer, Theme } from '@react-navigation/native';
import React from 'react';

import { NavigationService } from '@/services';

import AppNavigator from './app-navigator';
import AuthNavigator from './auth-navigator';

interface AppNavigationContainerProps {
  theme?: Theme;
}

const AppNavigationContainer = (props: AppNavigationContainerProps) => {
  const { theme } = props;

  const isAuthenticated = false;

  return (
    <NavigationContainer ref={NavigationService.navigationRef} theme={theme}>
      {!isAuthenticated && <AuthNavigator />}
      {isAuthenticated && <AppNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
