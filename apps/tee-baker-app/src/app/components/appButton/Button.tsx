import React from 'react';
import { Button, ButtonProps } from 'react-native-paper';

import { useButtonStyles } from './Button.style';

interface IAppButtonProps extends Omit<ButtonProps, 'children'> {
  title: string;
}

const AppButton = (props: IAppButtonProps) => {
  const { title, ...rest } = props;
  const styles = useButtonStyles();

  return (
    <Button
      {...rest}
      onPress={() => {
        //
      }}>
      {title}
    </Button>
  );
};

export default AppButton;
