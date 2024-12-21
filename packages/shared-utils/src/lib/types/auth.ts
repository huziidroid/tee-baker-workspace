/* eslint-disable @typescript-eslint/no-empty-interface */
import { IUser } from './user';

export interface IRegisterUser extends Omit<IUser, 'id' | 'bio' | 'user_name' | 'gender' | 'dob' | 'phone_number'> {
  confirm_password: string;
}

export interface ILoginUser extends Omit<IUser, 'id' | 'full_name' | 'user_name' | 'gender' | 'dob' | 'bio' | 'phone_number'> {}
export interface IAccessTokenResponse {
  access_token: string;
}

export interface IAuthSessionResponse {
  user_meta: IUser;
}

export interface IUpdateUserPayload extends Partial<Omit<IUser, 'password' | 'id'>> {}
