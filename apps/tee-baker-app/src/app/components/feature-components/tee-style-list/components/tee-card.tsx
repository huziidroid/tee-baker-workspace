import React, { useState } from 'react';
import { When } from 'react-if';
import { Image, TouchableOpacity, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { isEmptyOrNil } from 'shared-utils';

import AppText from '@/components/common/app-text/app-text';

import { DEFAULT_CARD_SIZE } from '../tee-style-list';
import { useTeeStyleListStyles } from '../tee-style-list.styles';
import { ITeeCardProps } from '../tee-style-list.types';

const TeeCard = (props: ITeeCardProps) => {
  const { image, label, cardSize = DEFAULT_CARD_SIZE, imageProps, onPress } = props;
  const [loading, setLoading] = useState(false);

  const styles = useTeeStyleListStyles(cardSize);

  return (
    <TouchableOpacity style={styles.teeCard} activeOpacity={0.7} disabled={isEmptyOrNil(onPress)} onPress={() => onPress?.(image)}>
      <When condition={loading}>
        <View style={styles.teeStyleImage}>
          <ActivityIndicator animating size="small" hidesWhenStopped />
        </View>
      </When>
      <Image
        source={{ uri: image.uri }}
        resizeMode="cover"
        style={styles.teeStyleImage}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        {...imageProps}
      />

      <When condition={!isEmptyOrNil(label)}>
        <AppText variant="medium" size={14}>
          {label}
        </AppText>
      </When>
    </TouchableOpacity>
  );
};

export default TeeCard;
