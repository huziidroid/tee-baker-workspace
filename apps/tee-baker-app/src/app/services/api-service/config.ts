import { BASE_URL } from '@env';
import { AxiosClient } from 'shared-utils';

import { KeychainService } from '..';

export const ApiClient = Object.freeze(new AxiosClient(BASE_URL, KeychainService.getToken));
