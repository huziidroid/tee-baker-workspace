import React, { useMemo } from 'react';
import { LogBox, useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { en, registerTranslation } from 'react-native-paper-dates';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { ReactQueryProvider } from 'react-utils';

import { AppDarkTheme, AppLightTheme } from '@/assets';

import AppWrapper from './app-wrapper';

// registers translation for date picker
registerTranslation('en', en);
LogBox.ignoreLogs(['A props object containing a "key" prop is being spread into JSX']);

const App = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const paperTheme = useMemo(() => (isDark ? AppDarkTheme : AppLightTheme), [isDark]);

  return (
    <ReactQueryProvider>
      <SafeAreaProvider>
        <PaperProvider theme={paperTheme}>
          <AppWrapper />
          <Toast />
        </PaperProvider>
      </SafeAreaProvider>
    </ReactQueryProvider>
  );
};

export default App;
