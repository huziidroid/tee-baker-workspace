import { Appbar } from 'react-native-paper';

import { AppIcon } from '@/icons';

import { NavigationService } from '@/services';

import { isIOS } from '@/utils';

import { SCREENS } from '../constants';

type HeaderConfigType = { title: string; leftAccessory: React.ReactNode };

const BackAction = () => <Appbar.BackAction size={isIOS ? 18 : 20} onPress={NavigationService.goBack} />;

const AppIconForHeader = () => <Appbar.Action icon={() => <AppIcon style={{ height: 28, width: 28 }} />} />;

export const getHeaderConfig = (route: string): HeaderConfigType => {
  switch (route) {
    case SCREENS.HOME:
      return {
        leftAccessory: <AppIconForHeader />,
        title: 'Artify',
      };
    case SCREENS.SIGN_UP:
    case SCREENS.SING_IN:
      return {
        leftAccessory: <BackAction />,
        title: '',
      };
    default:
      return {
        leftAccessory: <BackAction />,
        title: route,
      };
  }
};
