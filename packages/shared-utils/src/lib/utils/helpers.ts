import { anyPass, isEmpty, isNil } from 'ramda';
import { generateFromEmail } from 'unique-username-generator';

export const isEmptyOrNil = anyPass([isEmpty, isNil]);

export const generateRandomUsername = (email: string) => {
  const username = generateFromEmail(email, 3);
  return username;
};
