import React from 'react';

import { useStyles } from '@/styles';

import AppText from '../common/app-text/app-text';
import Spacer, { ISpacerProps } from '../common/spacer';

interface IAuthenticationCTA extends ISpacerProps {
  label: string;
  cta: { label: string; onPress: () => void };
}
const AuthenticationCTA = (props: IAuthenticationCTA) => {
  const { label, cta, ...rest } = props;

  const styles = useStyles();

  return (
    <Spacer style={[styles.row, styles.selfCenter]} {...rest}>
      <AppText size={14}>{label}</AppText>

      <AppText onPress={cta.onPress} size={14} color="primary" variant="medium">
        {cta.label}
      </AppText>
    </Spacer>
  );
};

export default AuthenticationCTA;
