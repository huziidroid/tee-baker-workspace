import { HomeScreen } from '@/screens';

import { BottomTabConfigType } from '@/types';

import { SCREENS } from '../constants';

export const APP_BOTTOM_TABS: BottomTabConfigType[] = [
  {
    label: 'Home',
    component: HomeScreen,
    name: SCREENS.HOME,
    icon: { type: 'Feather', name: 'home' },
  },
];
