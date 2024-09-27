import { StyleSheet } from 'react-native';

import { useAppTheme } from '@/assets';

import { useStyles } from '@/styles';

export const useLoginOptionButtonStyles = () => {
  const { colors } = useAppTheme();
  return useStyles(
    StyleSheet.create({
      content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50,
        borderWidth: 0.4,
        borderRadius: 50,
        borderColor: colors.outline,
      },
    }),
  );
};
