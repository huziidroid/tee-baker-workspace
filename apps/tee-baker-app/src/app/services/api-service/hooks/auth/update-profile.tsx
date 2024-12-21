import { API_URLS, QueryResponse, useAppMutation, useSessionHandler } from 'react-utils';
import { IUpdateUserPayload, IUser } from 'shared-utils';

import { showToast } from '@/utils';

import { ApiClient } from '../../config';

export const useUpdateProfile = () => {
  const { session, dispatch } = useSessionHandler();

  return useAppMutation<IUser, IUpdateUserPayload>({
    mutationKey: [API_URLS.updateUser, session?.id],
    showLoading: true,
    mutationFn: payload => ApiClient.patch<QueryResponse<IUser>>(`${API_URLS.updateUser}/${session?.id}`, payload),
    onSuccess: data => {
      const user = data.data;
      dispatch(user);
      if (Array.isArray(data.message)) showToast(data.message[0], 'success');
      else showToast(data.message, 'success');
    },
  });
};
