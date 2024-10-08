import React from 'react';
import { Pressable, View } from 'react-native';
import { Checkbox } from 'react-native-paper';

import AppText from '@/components/common/app-text/app-text';
import Spacer from '@/components/common/spacer';

import { useCheckboxStyles } from './checkbox.style';
import { AppCheckboxProps } from './checkbox.type';

const AppCheckbox = (props: AppCheckboxProps) => {
  const { label, checked, indeterminate = false, onChange, appTextProps, ...rest } = props;

  const styles = useCheckboxStyles();

  const status = checked ? 'checked' : indeterminate ? 'indeterminate' : 'unchecked';

  const onPressCheckbox = () => {
    onChange({
      checked: status !== 'checked',
      ...(indeterminate && { indeterminate: status === 'indeterminate' }),
    });
  };

  return (
    <Pressable style={styles.content} onPress={onPressCheckbox}>
      <View style={styles.checboxContainer}>
        <Checkbox.Android {...rest} status={status} onPress={onPressCheckbox} />
      </View>

      <Spacer style={styles.selfCenter} left={30}>
        <AppText size={14} {...appTextProps}>
          {label}
        </AppText>
      </Spacer>
    </Pressable>
  );
};

export default AppCheckbox;
