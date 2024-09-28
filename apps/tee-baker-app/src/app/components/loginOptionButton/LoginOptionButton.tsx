import React from 'react';
import { TouchableOpacity } from 'react-native';

import Spacer from '../common/Spacer';
import AppText from '../common/appText/AppText';
import { useLoginOptionButtonStyles } from './LoginOptionButton.style';

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
        {icon && (
          <Spacer right={16} style={styles.icon}>
            {icon}
          </Spacer>
        )}
        <Spacer style={styles.label}>
          <AppText variant="medium" size={14} textAlign="center">
            {label}
          </AppText>
        </Spacer>
      </TouchableOpacity>
    );

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (variant === 'only-icon') return <></>;
};

export default LoginOptionButton;
