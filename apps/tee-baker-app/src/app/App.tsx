import React, { useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { adaptNavigationTheme, PaperProvider } from 'react-native-paper';
import { DefaultTheme as NavigationLightTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';

import { AppNavigator } from './navigation';
import { AppDarkTheme, AppLightTheme } from './assets';

const { DarkTheme, LightTheme } = adaptNavigationTheme({ reactNavigationDark: NavigationDarkTheme, reactNavigationLight: NavigationLightTheme });

const App = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const paperTheme = useMemo(() => (isDark ? AppDarkTheme : AppLightTheme), [isDark]);
  const navigationTheme = useMemo(() => (isDark ? DarkTheme : LightTheme), [isDark]);

  return (
    <PaperProvider theme={paperTheme}>
      <AppNavigator theme={navigationTheme} />
    </PaperProvider>
  );
};

export default App;
