import { StyleSheet } from 'react-native';

import { useStyles } from '@/styles';
import { URBANIST_FONTS } from '@/assets/theme';

export const useButtonStyles = ({ alignIconToRight }: { alignIconToRight: boolean }) =>
  useStyles(
    StyleSheet.create({
      contentStyles: {
        height: 50,
        flexDirection: alignIconToRight ? 'row-reverse' : 'row',
      },
      buttonStyles: {
        borderRadius: 20,
      },
      labelStyle: {
        fontSize: 16,
        fontWeight: '700',
        fontFamily: URBANIST_FONTS.bold,
      },
    }),
  );
