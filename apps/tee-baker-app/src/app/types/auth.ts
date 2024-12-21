import { IRegisterUser } from 'shared-utils';

export type ILoginOptions = { icon: React.ReactNode; label: string };

export interface ISignupForm extends IRegisterUser {
  agreement: { checked: boolean };
}
