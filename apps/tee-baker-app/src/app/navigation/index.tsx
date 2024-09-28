import { NavigationContainer, Theme } from '@react-navigation/native';
import React from 'react';

import { NavigationService } from '@/services';

import AuthNavigator from './AuthNavigator';
import CommonNavigator from './CommonNavigator';

interface AppNavigationContainerProps {
  theme?: Theme;
}

const AppNavigationContainer = (props: AppNavigationContainerProps) => {
  const { theme } = props;

  const isAuthenticated = true;

  return (
    <NavigationContainer ref={NavigationService.navigationRef} theme={theme}>
      {!isAuthenticated && <AuthNavigator />}
      {isAuthenticated && <CommonNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
