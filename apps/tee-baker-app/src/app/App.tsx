import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationLightTheme } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { PaperProvider, adaptNavigationTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppDarkTheme, AppLightTheme } from '@/assets';

import { AppNavigator } from '@/navigation';

const { DarkTheme, LightTheme } = adaptNavigationTheme({ reactNavigationDark: NavigationDarkTheme, reactNavigationLight: NavigationLightTheme });

const App = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const paperTheme = useMemo(() => (isDark ? AppDarkTheme : AppLightTheme), [isDark]);
  const navigationTheme = useMemo(() => (isDark ? DarkTheme : LightTheme), [isDark]);

  return (
    <SafeAreaProvider>
      <PaperProvider theme={paperTheme}>
        <AppNavigator theme={navigationTheme} />
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
