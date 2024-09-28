/* eslint-disable jsx-a11y/accessible-emoji */
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { Divider } from 'react-native-paper';

import { AppButton, AppCheckboxFormInput, AppText, EmailTextInput, LoginOptionButton, PasswordInput, ScreenWrapper, Spacer } from '@/components';

import { LOGIN_OPTIONS, SigninSchema } from '@/utils';

import { useSiginStyles } from './Signin.style';
import { SigninFormType } from './Signin.type';
import ContinueWithLabel from './components/ContinueWithLabel';
import ForgotPasswordText from './components/ForgotPasswordText';

const SigninScreen = () => {
  const styles = useSiginStyles();

  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: { checked: false },
    },
    mode: 'onChange',
    resolver: yupResolver(SigninSchema),
  });

  const onSubmit = (payload: SigninFormType) => {
    console.log(payload);
  };

  return (
    <ScreenWrapper type="scroll">
      <View>
        <AppText size={25} variant="medium">
          Welcome back 👋
        </AppText>

        <AppText textProps={{ style: styles.helperText }} size={14}>
          Please enter your email & password to sign in.
        </AppText>

        <View style={styles.contentSpacing}>
          {/* Signin form */}

          <EmailTextInput name="email" control={control} isRequired />
          <PasswordInput control={control} name="password" isRequired />
          <AppCheckboxFormInput name="rememberMe" control={control} label="Remember me" />
          <Spacer top={20} />
          <Divider />
          <ForgotPasswordText />
          <ContinueWithLabel />

          {/* Login Options */}
          <View style={[styles.loginOptions, styles.contentSpacing]}>
            {LOGIN_OPTIONS.map((x, index) => {
              return <LoginOptionButton key={x.label + index.toString()} icon={x.icon} variant="only-icon" />;
            })}
          </View>

          {/* Sign in button */}
          <Spacer vertical={30}>
            <Divider />
          </Spacer>
          <AppButton title="Sign in" mode="contained" onPress={handleSubmit(onSubmit)} disabled={!isDirty || !isValid} />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SigninScreen;
