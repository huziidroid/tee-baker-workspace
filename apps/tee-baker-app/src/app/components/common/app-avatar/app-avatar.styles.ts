import { StyleSheet } from 'react-native';

import { useAppTheme } from '@/assets';

import { useStyles } from '@/styles';

export const useAvatarStyles = (size: number, pickerXOffset: number, pickerYOffset: number) => {
  const { colors } = useAppTheme();

  return useStyles(
    StyleSheet.create({
      pickerContainer: {
        position: 'absolute',
        zIndex: 1,
        height: 20,
        width: 20,
        backgroundColor: colors.primary,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: pickerYOffset || 3,
        right: pickerXOffset || 10,
      },
      avatar: { backgroundColor: colors.background, height: size, width: size, borderRadius: size / 2 },
    }),
  );
};
