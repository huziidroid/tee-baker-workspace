import { View } from 'react-native';
import React from 'react';
import { TextInput as PaperTextInput } from 'react-native-paper';
import { Else, If, Then, When } from 'react-if';

import { AppTextInputProps } from './AppTextInput.type';
import AppText from '../../appText/AppText';
import { useAppTextInputStyles } from './AppTextInput.style';
import Spacer from '../../common/Spacer';

const AppTextInput = (props: AppTextInputProps) => {
  const { flex, width, mode = 'flat', label, isRequired, ...rest } = props;

  const isFlat = mode === 'flat';
  const styles = useAppTextInputStyles({ isFlat });

  return (
    <View style={{ flex, width }}>
      <When condition={isFlat}>
        <View style={[styles.row, { left: -3 }]}>
          <If condition={typeof label === 'string'}>
            <Then>
              <AppText variant="medium" size={14} color="onBackground">
                {label}
              </AppText>
            </Then>
            <Else>{label}</Else>
          </If>

          {/* Is Required */}
          <When condition={isRequired}>
            <Spacer top={4}>
              <AppText variant="italic-regular" size={12} color="error">
                *
              </AppText>
            </Spacer>
          </When>
        </View>
      </When>
      <PaperTextInput
        style={styles.inputStyle}
        mode={mode}
        contentStyle={styles.contentStyle}
        outlineStyle={styles.outlineStyle}
        label={!isFlat ? label : ''}
        {...rest}
      />
    </View>
  );
};

export default AppTextInput;
