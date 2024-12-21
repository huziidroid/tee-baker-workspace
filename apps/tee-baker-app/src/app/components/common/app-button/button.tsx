import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, ButtonProps } from 'react-native-paper';

import { useAppTheme } from '@/assets';

import { useButtonStyles } from './button.style';

interface IAppButtonProps extends Omit<ButtonProps, 'children'> {
  title: string;
  alignIconToRight?: boolean;
}

const AppButton = (props: IAppButtonProps) => {
  const { title, contentStyle, style, labelStyle, alignIconToRight = false, ...rest } = props;
  const { colors } = useAppTheme();
  const buttonStyles = useButtonStyles({ alignIconToRight });

  return (
    <Button
      textColor={colors.white}
      buttonColor={colors.primary}
      {...rest}
      labelStyle={StyleSheet.flatten([buttonStyles.labelStyle, labelStyle])}
      contentStyle={StyleSheet.flatten([buttonStyles.contentStyles, contentStyle])}
      style={StyleSheet.flatten([buttonStyles.buttonStyles, style as object])}>
      {title}
    </Button>
  );
};

export default AppButton;
