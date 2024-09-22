import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, ButtonProps } from 'react-native-paper';

import { useButtonStyles } from './Button.style';

interface IAppButtonProps extends Omit<ButtonProps, 'children'> {
  title: string;
  alignIconToRight?: boolean;
}

const AppButton = (props: IAppButtonProps) => {
  const { title, contentStyle, style, labelStyle, alignIconToRight = false, ...rest } = props;
  const buttonStyles = useButtonStyles({ alignIconToRight });

  return (
    <Button
      {...rest}
      labelStyle={StyleSheet.flatten([buttonStyles.labelStyle, labelStyle])}
      contentStyle={StyleSheet.flatten([buttonStyles.contentStyles, contentStyle])}
      style={StyleSheet.flatten([buttonStyles.buttonStyles, style as object])}>
      {title}
    </Button>
  );
};

export default AppButton;
