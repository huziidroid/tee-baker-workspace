import { BASE_URL } from '@env';
import { AxiosClient } from 'react-utils';

import { KeychainService } from '..';

export const ApiClient = Object.freeze(new AxiosClient(BASE_URL, KeychainService.getToken));
