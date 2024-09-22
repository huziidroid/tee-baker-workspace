/* eslint-disable @typescript-eslint/no-empty-interface */

import { AppThemeType, ThemeColorsType } from '@/assets';

declare global {
  namespace ReactNativePaper {
    interface Theme extends AppThemeType {}
    interface ThemeColors extends ThemeColorsType {}
  }
}
