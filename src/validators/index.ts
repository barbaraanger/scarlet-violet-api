import * as yup from 'yup';

const UserSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Must be a valid email').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

const validateUser = async (data: any) => {
  try {
    await UserSchema.validate(data);
    return true;
  } catch (error) {
    return false;
  }
};

export default validateUser;