import { StyleSheet } from 'react-native';

import { useAppTheme } from '@/assets';

import { useStyles } from '@/styles';

import { AppTextProps } from './AppText.type';

export const useAppTextStyles = (
  props: Omit<AppTextProps, 'onPress' | 'leftAccessory' | 'rightAccessory' | 'isLoading' | 'numberOfLines' | 'textProps' | 'variant'>,
) => {
  const { colors } = useAppTheme();
  return useStyles(
    StyleSheet.create({
      appText: {
        fontSize: props?.size,
        textAlign: props?.textAlign,
        textTransform: props.textTransform,
        textDecorationLine: props.textDecorationLine,
        color: colors[props.color] as string,
      },
    }),
  );
};
