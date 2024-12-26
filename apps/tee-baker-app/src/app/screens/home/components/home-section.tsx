import React, { PropsWithChildren } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { isEmptyOrNil } from 'shared-utils';

import { useAppTheme } from '@/assets';

import { AppText } from '@/components';

import { ArrowRightIcon } from '@/icons';

import { useHomeStyles } from '../home.styles';

interface IHomeSectionProps {
  label: string;
  copyText?: string;
  onPress?: () => void;
  headerPadded?: boolean;
  sectionPadded?: boolean;
}

const HomeSection = (props: PropsWithChildren<IHomeSectionProps>) => {
  const { label, copyText, children, onPress, headerPadded = false, sectionPadded = false } = props;

  const styles = useHomeStyles();
  const { colors } = useAppTheme();

  return (
    <View style={[styles.subSection, sectionPadded && styles.horizontalGap]}>
      <View style={[styles.row, styles.justifyBetween, headerPadded && styles.horizontalGap]}>
        <AppText size={18} variant="medium">
          {label}
        </AppText>

        {!isEmptyOrNil(copyText) && (
          <AppText color="primary" size={12} variant="medium" rightAccessory={<ArrowRightIcon size={20} color={colors.primary} />} onPress={onPress}>
            {copyText}
          </AppText>
        )}

        {isEmptyOrNil(copyText) && (
          <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
            <ArrowRightIcon size={20} color={colors.primary} />
          </TouchableOpacity>
        )}
      </View>
      {children}
    </View>
  );
};

export default HomeSection;
