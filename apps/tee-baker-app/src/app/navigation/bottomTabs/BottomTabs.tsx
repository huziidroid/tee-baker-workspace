import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import VectorIcon from '@/icons';

import { isIOS } from '@/utils';

import AppHeader from '../appHeader/AppHeader';
import BottomTabBar from './components/BottomTabBar';
import { APP_BOTTOM_TABS } from './config';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ header: AppHeader }} safeAreaInsets={{ bottom: isIOS ? 8 : 0 }} tabBar={props => <BottomTabBar {...props} />}>
      {APP_BOTTOM_TABS.map((tab, index) => {
        return (
          <Tab.Screen
            key={index.toString() + tab.name}
            name={tab.name}
            component={tab.component}
            options={{
              title: tab.label,
              tabBarIcon: ({ size, color }) => <VectorIcon iconType={tab.icon.type} name={tab.icon.name} size={size} color={color} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTabs;
