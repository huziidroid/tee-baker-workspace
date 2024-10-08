import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import AppText from '../common/app-text/app-text';
import Spacer from '../common/spacer';
import { useLoginOptionButtonStyles } from './login-option-button.style';

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
  if (variant === 'only-icon')
    return (
      <TouchableOpacity style={styles.onlyIconView} onPress={onPress} activeOpacity={0.6}>
        {icon && icon}
      </TouchableOpacity>
    );
};

export default LoginOptionButton;
