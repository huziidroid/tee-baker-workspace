import React from 'react';
import { View } from 'react-native';

import { useAppTheme } from '@/assets';

import { AppTextInput, ScreenWrapper, TeeStyleList } from '@/components';

import HomeSection from './components/home-section';
import { useHomeStyles } from './home.styles';

const imagesList = [
  {
    label: 'Colorful',
    styleImage: {
      name: 'colorful-1',
      uri: 'https://xinva.ai/wp-content/uploads/2023/08/51.png',
    },
  },
  {
    label: 'Cyberpunk',
    styleImage: {
      name: 'colorful-2',
      uri: 'https://xinva.ai/wp-content/uploads/2023/08/51.png',
    },
  },
  {
    label: 'Realistic',
    styleImage: {
      name: 'colorful-3',
      uri: 'https://xinva.ai/wp-content/uploads/2023/08/51.png',
    },
  },
  {
    label: 'Fantasy',
    styleImage: {
      name: 'colorful-4',
      uri: 'https://xinva.ai/wp-content/uploads/2023/08/51.png',
    },
  },
];
const HomeScreen = () => {
  const styles = useHomeStyles();
  const { colors } = useAppTheme();

  const onExplorePrompt = () => {
    //
  };

  return (
    <ScreenWrapper type="scroll" scrollViewProps={{ contentContainerStyle: styles.section }}>
      <HomeSection label="Enter Prompt" copyText="Explore prompt" sectionPadded>
        <View style={[styles.row, styles.justifyBetween]}>
          <AppTextInput
            flex={1}
            mode="outlined"
            rows={8}
            multiline
            placeholder="Type anything..."
            style={styles.promptInput}
            outlineStyle={styles.promptInputOutline}
          />
        </View>
      </HomeSection>

      <HomeSection label="Art Style" headerPadded>
        <TeeStyleList teeStyles={imagesList} />
      </HomeSection>

      <HomeSection label="Upload Images" headerPadded>
        <TeeStyleList teeStyles={imagesList} createable />
      </HomeSection>
    </ScreenWrapper>
  );
};

export default HomeScreen;
