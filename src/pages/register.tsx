import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { postApi } from '../common/apis/main.api';
import { BACKEND_API } from '../config';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short!')
    .max(30, 'Name is too long!')
    .required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
    .required('Mobile number is required'),
});

export default function RegisterPage() {
  const navigate = useNavigate();
  const handleSubmit = async (values: {
    name: string;
    email: string;
    password: string;
    mobile: string;
  }) => {
    const res = await postApi({
      url: `${BACKEND_API}/user/register`,
      values,
      showToast: true,
    });

    // console.log('res', res.data);

    if (res.status === 200) {
      navigate('/login');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-2">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <Formik
          initialValues={{ name: '', email: '', password: '', mobile: '' }}
          validationSchema={RegisterSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="mobile"
                >
                  Mobile Number
                </label>
                <Field
                  id="mobile"
                  name="mobile"
                  type="tel"
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                >
                  Register
                </button>
              </div>
              <div className="text-center mt-4">
                <p className="text-sm text-black">
                  Already have an account?{' '}
                  <span className="text-blue-700 font-medium underline">
                    <Link to="/login">Login here</Link>
                  </span>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
