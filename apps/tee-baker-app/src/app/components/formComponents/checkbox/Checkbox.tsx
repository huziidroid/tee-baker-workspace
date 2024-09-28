import React from 'react';
import { Pressable, View } from 'react-native';
import { Checkbox } from 'react-native-paper';

import Spacer from '@/components/common/Spacer';
import AppText from '@/components/common/appText/AppText';

import { useCheckboxStyles } from './Checkbox.style';
import { AppCheckboxProps } from './Checkbox.type';

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
