import { anyPass, isEmpty, isNil } from 'ramda';

export const isEmptyOrNil = anyPass([isEmpty, isNil]);
