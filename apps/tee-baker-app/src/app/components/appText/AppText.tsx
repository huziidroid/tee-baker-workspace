import React, { PropsWithChildren } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Else, If, Then } from 'react-if';
import { customText } from 'react-native-paper';

import { AppTextProps, AppTextVariants } from './AppText.type';
import Spacer from '../common/Spacer';
import { useAppTextStyles } from './AppText.style';

const PaperText = customText<AppTextVariants>();

const AppText = (props: PropsWithChildren<AppTextProps>) => {
  const {
    onPress,
    children,
    leftAccessory,
    rightAccessory,
    color = 'onBackground',
    numberOfLines,
    size = 16,
    textAlign = 'auto',
    textDecorationLine = 'none',
    textProps,
    textTransform = 'none',
    variant = 'regular',
    isLoading = false,
  } = props;
  const isDisabled = !onPress;

  const styles = useAppTextStyles({ color, size, textAlign, textDecorationLine, textTransform });

  return (
    <If condition={isLoading}>
      <Then>{/* <TextSkeleton /> */}</Then>
      <Else>
        <If condition={isDisabled}>
          <Then>
            <View style={styles.row}>
              <Spacer right={2}>{leftAccessory}</Spacer>
              <PaperText variant={variant} style={styles.appText} numberOfLines={numberOfLines} {...textProps}>
                {children}
              </PaperText>
              <Spacer left={2}>{rightAccessory}</Spacer>
            </View>
          </Then>

          <Else>
            <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={0.6}>
              <Spacer right={2}>{leftAccessory}</Spacer>
              <PaperText variant={variant} style={styles.appText} numberOfLines={numberOfLines} {...textProps}>
                {children}
              </PaperText>
              <Spacer left={2}>{rightAccessory}</Spacer>
            </TouchableOpacity>
          </Else>
        </If>
      </Else>
    </If>
  );
};

export default AppText;
