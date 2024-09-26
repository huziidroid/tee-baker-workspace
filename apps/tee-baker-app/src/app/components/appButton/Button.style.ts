import { StyleSheet } from 'react-native';

import { useStyles } from '@/styles';

export const useButtonStyles = ({ alignIconToRight }: { alignIconToRight: boolean }) =>
  useStyles(
    StyleSheet.create({
      contentStyles: {
        height: 50,
        width: '100%',
        flexDirection: alignIconToRight ? 'row-reverse' : 'row',
      },
      buttonStyles: {
        borderRadius: 50,
      },
      labelStyle: {
        fontSize: 16,
        fontWeight: '600',
      },
    }),
  );
