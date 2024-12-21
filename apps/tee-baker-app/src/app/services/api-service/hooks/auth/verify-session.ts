import { API_URLS, QueryResponse, useAppQuery, useSessionHandler } from 'react-utils';
import { IAuthSessionResponse } from 'shared-utils';

import { ApiClient } from '../../config';

export const useVerifySession = () => {
  const { dispatch, isNewUser } = useSessionHandler();
  return useAppQuery<IAuthSessionResponse>({
    queryKey: [API_URLS.verifySession],
    showLoading: true,
    queryFn: async () => {
      const response = await ApiClient.get<QueryResponse<IAuthSessionResponse>>(API_URLS.verifySession);
      dispatch(response?.data?.data?.user_meta, isNewUser);
      return response;
    },
  });
};
