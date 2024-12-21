import React from 'react';
import { View } from 'react-native';
import { Checkbox } from 'react-native-paper';

import AppText from '@/components/common/app-text/app-text';
import Spacer from '@/components/common/spacer';

import { useCheckboxStyles } from './checkbox.style';
import { AppCheckboxProps } from './checkbox.type';

const AppCheckbox = (props: AppCheckboxProps) => {
  const { label, prefixText, checked, indeterminate = false, onChange, labelProps, prefixTextProps, ...rest } = props;

  const styles = useCheckboxStyles();

  const status = checked ? 'checked' : indeterminate ? 'indeterminate' : 'unchecked';

  const onPressCheckbox = () => {
    onChange({
      checked: status !== 'checked',
      ...(indeterminate && { indeterminate: status === 'indeterminate' }),
    });
  };

  return (
    <View style={styles.content}>
      <View style={styles.checboxContainer}>
        <Checkbox.Android {...rest} status={status} onPress={onPressCheckbox} />
      </View>

      <Spacer style={styles.selfCenter} left={30}>
        <View style={styles.row}>
          {prefixText && (
            <AppText size={14} color="onBackground" {...prefixTextProps}>
              {prefixText}
            </AppText>
          )}
          <AppText size={14} {...labelProps}>
            {label}
          </AppText>
        </View>
      </Spacer>
    </View>
  );
};

export default AppCheckbox;
