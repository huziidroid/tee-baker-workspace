import React from 'react';
import { View } from 'react-native';

import { LoginOptionButton } from '@/components';

import { ILoginOptions } from '@/types/auth';

import { LOGIN_OPTIONS } from '@/utils';

import { useAuthStyles } from '../styles';

interface ILoginOptionsProps {
  onPressOption?: (option: ILoginOptions) => void;
}

const LoginOptions = (props: ILoginOptionsProps) => {
  const { onPressOption } = props;
  const styles = useAuthStyles();

  return (
    <View style={styles.loginOptions}>
      {LOGIN_OPTIONS.map((x, index) => {
        return (
          <LoginOptionButton key={x.label + index.toString()} icon={x.icon} variant="only-icon" onPress={() => onPressOption && onPressOption(x)} />
        );
      })}
    </View>
  );
};

export default LoginOptions;
