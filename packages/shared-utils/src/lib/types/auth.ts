/* eslint-disable @typescript-eslint/no-empty-interface */
export type IGender = 'male' | 'female' | 'other';

export interface IUser {
  full_name: string;
  email: string;
  user_name: string;
  gender: IGender;
  dob: Date;
  bio?: string;
  password?: string;
}

export interface IRegisterUser extends Omit<IUser, 'bio'> {
  confirmPassword: string;
}

export interface ILoginUser extends Omit<IUser, 'full_name' | 'user_name' | 'gender' | 'dob' | 'bio'> {}
