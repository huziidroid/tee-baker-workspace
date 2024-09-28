import { StyleSheet } from 'react-native';

import { useStyles } from '@/styles';

export const useSiginStyles = () => {
  return useStyles(
    StyleSheet.create({
      helperText: { marginTop: 20 },
      contentSpacing: { marginTop: 30 },
      loginOptions: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    }),
  );
};
