import { StyleSheet } from 'react-native';

import { useStyles } from '@/styles';

export const useLandingStyles = () => {
  return useStyles(
    StyleSheet.create({
      content: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
        alignItems: 'center',
      },
      loginOptionContainer: {
        flex: 0.8,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',

        // backgroundColor: 'red',
      },
    }),
  );
};
