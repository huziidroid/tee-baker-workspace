import React, { useCallback } from 'react';
import { FlatList } from 'react-native';

import { Spacer, TeeCard } from '@/components';

import { StandardPhotoType } from '@/types';

type ArtStyleType = { label: string; artStyle: StandardPhotoType };

interface IArtStyleListProps {
  artStyles: ArtStyleType[];
}

const ArtStyleList = (props: IArtStyleListProps) => {
  const { artStyles = [] } = props;

  const renderItem = useCallback(({ item }: { item: ArtStyleType }) => {
    const { artStyle, label } = item;

    return <TeeCard image={artStyle} label={label} />;
  }, []);

  return (
    <FlatList<ArtStyleType>
      data={artStyles}
      keyExtractor={(item, index) => item?.label + index.toString()}
      renderItem={renderItem}
      horizontal
      ItemSeparatorComponent={() => <Spacer right={12} />}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ArtStyleList;
