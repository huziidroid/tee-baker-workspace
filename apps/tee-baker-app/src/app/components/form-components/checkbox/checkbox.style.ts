import { StyleSheet } from 'react-native';

import { useStyles } from '@/styles';

export const useCheckboxStyles = () => {
  return useStyles(
    StyleSheet.create({
      content: {
        flexDirection: 'row',
        height: 45,
      },
      checboxContainer: { left: -9, position: 'absolute', alignSelf: 'center', right: 0 },
    }),
  );
};
