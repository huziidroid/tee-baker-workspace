import React from 'react';
import { When } from 'react-if';
import { View } from 'react-native';
import { DatePickerInput } from 'react-native-paper-dates';
import TextInputMask from 'react-native-text-input-mask';

import AppText from '@/components/common/app-text/app-text';

import { useAppDatePickerInputStyles } from './app-date-picker-input.style';
import { IAppDatePickerInputProps } from './app-date-picker-input.type';

const SupportedFormatsMapper = {
  'MM/DD/YYYY': '[00]/[00]/[0000]',
};

const AppDatePicker = (props: IAppDatePickerInputProps) => {
  const { flex, width, mode = 'flat', label, labelProps, required, placeholder = 'MM/DD/YYYY', supportedFormat = 'MM/DD/YYYY', ...rest } = props;

  const isFlat = mode === 'flat';

  const styles = useAppDatePickerInputStyles({ isFlat });

  return (
    <View style={{ width }}>
      <When condition={label}>
        <View style={[styles.row, { left: -3 }]}>
          <AppText {...labelProps} size={14} variant="medium" color="onBackground">
            {label}
          </AppText>

          <When condition={required}>
            <AppText variant="italic-regular" size={12} color="error">
              *
            </AppText>
          </When>
        </View>
      </When>

      <DatePickerInput
        contentStyle={styles.contentStyle}
        outlineStyle={styles.outlineStyle}
        style={styles.inputStyle}
        iconStyle={styles.iconStyle}
        locale="en"
        mode={mode}
        placeholder={placeholder}
        label={!isFlat ? label : null}
        withDateFormatInLabel={false}
        inputMode="start"
        render={renderProps => <TextInputMask {...renderProps} mask={SupportedFormatsMapper[supportedFormat]} />}
        {...rest}
      />
    </View>
  );
};

export default AppDatePicker;
