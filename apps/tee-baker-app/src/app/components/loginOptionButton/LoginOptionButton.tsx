import { TouchableOpacity } from 'react-native';
import React from 'react';

import { useLoginOptionButtonStyles } from './LoginOptionButton.style';
import AppText from '../appText/AppText';
import Spacer from '../common/Spacer';

interface LoginOptionButtonProps {
  variant?: 'default' | 'only-icon';
  label?: string;
  icon: React.ReactNode;
  onPress?: () => void;
}

const LoginOptionButton = (props: LoginOptionButtonProps) => {
  const { icon, label, onPress, variant = 'default' } = props;

  const styles = useLoginOptionButtonStyles();

  if (variant === 'default')
    return (
      <TouchableOpacity style={styles.content} onPress={onPress} activeOpacity={0.6}>
        {icon && <Spacer right={16}>{icon}</Spacer>}
        <AppText variant="medium" size={14}>
          {label}
        </AppText>
      </TouchableOpacity>
    );

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (variant === 'only-icon') return <></>;
};

export default LoginOptionButton;
