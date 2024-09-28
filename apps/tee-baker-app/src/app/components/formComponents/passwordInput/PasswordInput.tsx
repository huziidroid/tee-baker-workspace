import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';

import { useAppTheme } from '@/assets';

import AppTextFormInput from '../appTextInput/AppTextFormInput';
import { AppTextFormInputProps } from '../appTextInput/AppTextInput.type';

const PasswordInput = (props: Omit<AppTextFormInputProps, 'right' | 'keyboardType'>) => {
  const { mode = 'flat', ...rest } = props;

  const [secureText, setSecureText] = useState(true);
  const { colors } = useAppTheme();

  const togglePassword = () => {
    setSecureText(!secureText);
  };

  return (
    <AppTextFormInput
      autoCapitalize="none"
      mode={mode}
      label="Password"
      placeholder="Password"
      keyboardType="visible-password"
      secureTextEntry={secureText}
      right={
        <TextInput.Icon
          icon={secureText ? 'eye-off' : 'eye'}
          size={20}
          style={{ ...(mode === 'flat' && { right: -16 }) }}
          color={isFocused => (isFocused ? colors.primary : colors.onBackground)}
          onPress={togglePassword}
        />
      }
      {...rest}
    />
  );
};

export default PasswordInput;
