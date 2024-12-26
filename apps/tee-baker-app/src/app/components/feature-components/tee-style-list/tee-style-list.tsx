import React, { useCallback } from 'react';
import { FlatList } from 'react-native';

import Spacer from '@/components/common/spacer';

import { TeeStyleType } from '@/types';

import TeeCard from './components/tee-card';
import UploadTeeStyleButton from './components/upload-button';
import { useTeeStyleListStyles } from './tee-style-list.styles';
import { ITeeStyleListProps } from './tee-style-list.types';

export const DEFAULT_CARD_SIZE = { size: 130, heightOffset: 20 };

const TeeStyleList = (props: ITeeStyleListProps) => {
  const { teeStyles = [], cardSize = DEFAULT_CARD_SIZE, createable = false } = props;

  const styles = useTeeStyleListStyles(cardSize);

  const renderItem = useCallback(
    ({ item }: { item: TeeStyleType }) => {
      const { styleImage, label } = item;

      return <TeeCard image={styleImage} label={label} cardSize={cardSize} />;
    },
    [cardSize],
  );

  return (
    <FlatList<TeeStyleType>
      data={teeStyles}
      contentContainerStyle={styles.listContent}
      keyExtractor={(item, index) => item?.label + index.toString()}
      renderItem={renderItem}
      horizontal
      ItemSeparatorComponent={() => <Spacer right={12} />}
      showsHorizontalScrollIndicator={false}
      ListHeaderComponent={() => createable && <UploadTeeStyleButton cardSize={cardSize} />}
      ListHeaderComponentStyle={[createable && styles.listHeaderStyle]}
    />
  );
};

export default TeeStyleList;
