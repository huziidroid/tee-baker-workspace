import { StyleSheet } from 'react-native';

import { useAppTheme } from '@/assets';
import { URBANIST_FONTS } from '@/assets/theme';

import { useStyles } from '@/styles';

const ROW_HEIGHT = 20;

export const useAppTextInputStyles = ({ isFlat, multiline, rows }: { isFlat: boolean; multiline: boolean; rows: number }) => {
  const { colors } = useAppTheme();

  return useStyles(
    StyleSheet.create({
      inputStyle: { ...(isFlat && { height: 45 }), backgroundColor: colors.background },
      contentStyle: {
        ...(multiline && rows > 0 && { height: ROW_HEIGHT * rows }),
        ...(isFlat && { paddingLeft: 0, paddingRight: 0 }),
        fontSize: 14,
        fontFamily: URBANIST_FONTS.regular,
      },
      outlineStyle: { borderRadius: 6, borderWidth: 1 },
      helperText: { paddingVertical: 0, fontFamily: URBANIST_FONTS.regular },
    }),
  );
};
