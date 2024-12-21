import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { pickAll } from 'ramda';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useLoadingHandler, useSessionHandler } from 'react-utils';
import { GENDERS, IUpdateUserPayload, isEmptyOrNil } from 'shared-utils';

import { useAppTheme } from '@/assets';

import { AppButton, AppDatePickerFormInput, AppFormSelect, AppTextFormInput, PhoneInput, ScreenWrapper } from '@/components';

import { useUpdateProfile } from '@/services';

import { useIsDarkTheme } from '@/utils';

import GreetingText from './components/greeting-text';
import SignupStepper from './components/signup-stepper';
import UserAvatar from './components/user-avatar';
import { useAuthStyles } from './styles';

const PersonalInfo = ({ navigation }: NativeStackScreenProps<never>) => {
  const styles = useAuthStyles();
  const { colors } = useAppTheme();
  const isDark = useIsDarkTheme();
  const { mutate } = useUpdateProfile();
  const { startLoading, stopLoading } = useLoadingHandler();
  const { session, dispatch } = useSessionHandler();

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<IUpdateUserPayload>({
    defaultValues: { bio: '', dob: null, email: '', full_name: '', gender: 'other', user_name: '', phone_number: '' },
    ...(!isEmptyOrNil(session) && { values: pickAll(['dob', 'bio', 'email', 'full_name', 'genger', 'user_name', 'phone_number'], session) }),
  });

  useEffect(() => navigation.setOptions({ headerTitle: () => <SignupStepper currentStep={2} /> }), [navigation]);

  const onSkip = async () => {
    startLoading();
    dispatch({ ...session }, false); // marking user as false to indicate account is updated

    stopLoading();
  };

  const onSubmit = (data: IUpdateUserPayload) => {
    mutate(data, {
      onSuccess: onSkip,
    });
  };

  return (
    <ScreenWrapper horizontalSpacing={0}>
      <KeyboardAwareScrollView
        contentContainerStyle={[styles.scrollContent, styles.gapSm]}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled">
        <GreetingText
          icon="🗒️"
          label="Enter personal info"
          description="Please enter your profile. Don't worry, only you can see your personal data. No one else will be able to see it. Or you can skip it for now."
        />

        <UserAvatar picker />

        <AppTextFormInput name="user_name" control={control} label="Username" placeholder="Username" />

        <PhoneInput name="phone_number" control={control} />

        <AppFormSelect name="gender" control={control} label="Gender" items={GENDERS} />

        <AppTextFormInput name="bio" control={control} label="Bio" placeholder="Bio" multiline />

        <AppDatePickerFormInput name="dob" control={control} label="Date of Birth" />
      </KeyboardAwareScrollView>

      <View style={styles.buttonGroup}>
        <AppButton
          title="Skip"
          mode="contained"
          style={styles.flex1}
          textColor={isDark ? colors.white : colors.primary}
          buttonColor={isDark ? colors.surfaceVariant : colors.primaryContainer}
          onPress={onSkip}
        />
        <AppButton title="Finish" mode="contained" style={styles.flex1} onPress={handleSubmit(onSubmit)} disabled={!isValid || !isDirty} />
      </View>
    </ScreenWrapper>
  );
};

export default PersonalInfo;
