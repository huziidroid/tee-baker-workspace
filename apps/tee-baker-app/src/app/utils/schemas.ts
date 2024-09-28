import * as yup from 'yup';

export const CheckboxSchema = yup.object().shape({
  checked: yup.bool(),
  //   indeterminate: yup.bool().optional(),
});

export const SigninSchema = yup.object().shape({
  email: yup.string().email().required('Please enter your email'),
  password: yup.string().required('Pleasee enter password'),
  rememberMe: yup.mixed().notRequired(),
});
