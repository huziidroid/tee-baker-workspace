import * as yup from 'yup';

export const CheckboxSchema = yup.object().shape({
  checked: yup.bool(),
  //   indeterminate: yup.bool().optional(),
});

export const SigninSchema = yup.object().shape({
  email: yup.string().email().required('Please enter your email'),
  password: yup.string().required('Pleasee enter password'),
  rememberMe: yup
    .object()
    .shape({ checked: yup.bool().oneOf([true]) })
    .required(),
});

export const SignupSchema = yup.object().shape({
  full_name: yup.string().required('Fullname is a required field'),
  email: yup.string().email().required('Please enter your email'),
  password: yup.string().required('Pleasee enter password'),
  confirm_password: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  agreement: yup
    .object()
    .shape({ checked: yup.bool().oneOf([true]) })
    .required(),
});
