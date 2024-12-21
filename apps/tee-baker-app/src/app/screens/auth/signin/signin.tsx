import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Divider } from 'react-native-paper';
import { ILoginUser } from 'shared-utils';

import { AppButton, AppCheckboxFormInput, AppText, AuthenticationCTA, EmailTextInput, PasswordInput, ScreenWrapper, Spacer } from '@/components';

import { SCREENS } from '@/navigation/constants';

import { NavigationService, useLogin } from '@/services';

import { SigninSchema } from '@/utils';

import ContinueWithText from '../components/continue-with-text';
import GreetingText from '../components/greeting-text';
import LoginOptions from '../components/login-options';
import { useAuthStyles } from '../styles';

const SigninScreen = () => {
  const styles = useAuthStyles();

  const { mutate } = useLogin();

  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm({
    defaultValues: { email: '', password: '', rememberMe: { checked: false } },
    mode: 'onChange',
    resolver: yupResolver(SigninSchema),
  });

  const onSubmit = (payload: ILoginUser) => {
    mutate(payload);
  };

  const goToPasswordReset = () => {
    //
  };

  const goToSignupScreen = () => NavigationService.navigate(SCREENS.SIGN_UP);

  return (
    <ScreenWrapper horizontalSpacing={0}>
      <KeyboardAwareScrollView
        contentContainerStyle={[styles.scrollContent, styles.gapSm]}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled">
        <View style={[styles.gapLg, styles.spacingMd]}>
          <GreetingText description="Please enter your email & password to sign in." />

          {/* Form Inputs */}
          <View>
            <EmailTextInput name="email" control={control} isRequired />
            <PasswordInput control={control} name="password" isRequired />
            <AppCheckboxFormInput name="rememberMe" control={control} label="Remember me" />

            <Divider style={styles.spacingMd} />
          </View>
          <View style={[styles.alignCenter, styles.selfCenter, styles.gapMd]}>
            <AppText variant="medium" color="primary" onPress={goToPasswordReset}>
              Forgot password?
            </AppText>
            <AuthenticationCTA label="Don't have an account?" cta={{ label: 'Sign up', onPress: goToSignupScreen }} />
          </View>

          {/* Login Options */}
          <View style={styles.gapMd}>
            <ContinueWithText />
            <LoginOptions />
          </View>
        </View>
      </KeyboardAwareScrollView>

      {/* Sign in button */}
      <View style={[styles.buttonContainer, styles.gapMd]}>
        <AppButton title="Sign in" mode="contained" onPress={handleSubmit(onSubmit)} disabled={!isDirty || !isValid} />
      </View>
    </ScreenWrapper>
  );
};

export default SigninScreen;
