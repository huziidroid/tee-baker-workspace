import { StyleSheet } from 'react-native';

import { useAppTheme } from '@/assets';

import { useStyles } from '@/styles';

export const useAppLoaderStyles = () => {
  const { colors } = useAppTheme();

  return useStyles(
    StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: colors.backdrop,
        position: 'absolute',
        zIndex: 1,
      },
    }),
  );
};
