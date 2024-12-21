import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { isEmptyOrNil } from 'shared-utils';

import { useAppTheme } from '@/assets';

import { AppAvatar, Spacer } from '@/components';

import { PersonIcon } from '@/icons';

import { useAuthStyles } from '../styles';

const UserAvatar = ({ picker = false, source }: { picker?: boolean; source?: ImageSourcePropType }) => {
  const { colors } = useAppTheme();
  const styles = useAuthStyles();

  return (
    <Spacer style={styles.alignCenter}>
      <AppAvatar
        size={120}
        type="image"
        image={{
          source,
          picker,
          ...(isEmptyOrNil(source) && { placeholder: ({ size }) => <PersonIcon size={size} color={colors.surfaceVariant} /> }),
        }}
      />
    </Spacer>
  );
};

export default UserAvatar;
