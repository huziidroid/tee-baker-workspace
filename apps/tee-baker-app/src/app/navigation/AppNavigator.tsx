import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AppHeader from './appHeader/AppHeader';
import BottomTabs from './bottomTabs/BottomTabs';
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
