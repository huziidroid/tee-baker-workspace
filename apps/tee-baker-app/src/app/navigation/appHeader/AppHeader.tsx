import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { Appbar } from 'react-native-paper';

import { AppText } from '@/components';

import { getHeaderConfig } from './config';

const AppHeader = (props: BottomTabHeaderProps | NativeStackHeaderProps) => {
  const { options, route } = props;

  const { leftAccessory, title } = getHeaderConfig(route.name);

  return (
    <>
      <StatusBar barStyle={'dark-content'} translucent />
      <Appbar.Header mode="center-aligned">
        {options.headerLeft ? options.headerLeft({ canGoBack: false }) : leftAccessory}
        <Appbar.Content
          title={
            typeof title === 'string' ? (
              <AppText size={18} variant="bold" color="onSurfaceVariant">
                {title}
              </AppText>
            ) : (
              title
            )
          }
        />
        {options.headerRight && options.headerRight({ canGoBack: false })}
      </Appbar.Header>
    </>
  );
};

export default AppHeader;
