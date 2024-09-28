import { DiscoverScreen, HomeScreen, ProfileScreen } from '@/screens';

import { BottomTabConfigType } from '@/types';

import { SCREENS } from '../constants';

export const APP_BOTTOM_TABS: BottomTabConfigType[] = [
  {
    label: 'Home',
    component: HomeScreen,
    name: SCREENS.HOME,
    icon: { type: 'Feather', name: 'home' },
  },
  {
    label: 'Discover',
    component: DiscoverScreen,
    name: SCREENS.DISCOVER,
    icon: { type: 'Feather', name: 'compass' },
  },
  {
    label: 'Profile',
    component: ProfileScreen,
    name: SCREENS.PROFILE,
    icon: { type: 'Ionicons', name: 'person-outline' },
  },
];
