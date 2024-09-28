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
      icon: {
        width: '15%',
        alignItems: 'flex-end',
      },
      label: {
        width: '55%',
      },

      onlyIconView: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 80,
        borderWidth: 0.4,
        borderRadius: 50,
        borderColor: colors.outline,
      },
    }),
  );
};
