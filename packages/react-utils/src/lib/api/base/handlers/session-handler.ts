import { IUser } from 'shared-utils';
import { create } from 'zustand';

type SessionHandlerActions = { dispatch: (session: IUser | null, isNewUser?: boolean) => void };
type SessionHandlerState = { session: IUser | null; isNewUser: boolean };

export const useSessionHandler = create<SessionHandlerState & SessionHandlerActions>(set => ({
  session: null,
  isNewUser: false,
  dispatch: (session, isNewUser) => set(() => ({ session, isNewUser: isNewUser })),
}));
