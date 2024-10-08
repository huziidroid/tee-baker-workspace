import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AppHeader from './app-header/app-header';
import BottomTabs from './bottom-tabs/bottom-tabs';
import { SCREENS } from './constants';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ header: AppHeader }}>
      <Stack.Screen name={SCREENS.BOTTOM_TABS} component={BottomTabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
