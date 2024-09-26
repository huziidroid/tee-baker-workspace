import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React, { PropsWithChildren } from 'react';

import { useAppTheme } from '@/assets';

export interface ISpacerProps {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  horizontal?: number;
  vertical?: number;
  flex?: number;
  style?: StyleProp<ViewStyle>;
  color?: ReactNativePaper.ThemeColorsKeys;
}

const Spacer = (props: PropsWithChildren<ISpacerProps>) => {
  const { bottom, flex, horizontal, left, right, top, vertical, children, color = 'transparent', style } = props;

  const { colors } = useAppTheme();
  const backgroundColor = colors[color] as string;

  return (
    <View
      style={StyleSheet.flatten([
        {
          flex,
          marginBottom: bottom,
          marginTop: top,
          marginRight: right,
          marginLeft: left,
          marginHorizontal: horizontal,
          marginVertical: vertical,
          backgroundColor,
        },
        style,
      ])}>
      {children}
    </View>
  );
};

export default Spacer;
