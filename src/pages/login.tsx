import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { postApi } from '../common/apis/main.api';
import { BACKEND_API } from '../config';
import { ELocalStorageKeys } from '../common/enums';

interface ILogin {
  email: string;
  password: string;
}

const InitialValue: ILogin = {
  email: '',
  password: '',
};

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = async (values: ILogin) => {
    try {
      const res = await postApi({
        url: `${BACKEND_API}/user/login`,
        values,
        showToast: true,
      });

      if (!res.data) {
        return;
      }

      localStorage.setItem(
        ELocalStorageKeys.ACCESS_TOKEN,
        res?.data?.user?.token
      );
      navigate('/');
    } catch (error) {
      console.error(error);
    }

    // if (res.status === 200) {
    //
    // }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-2">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Login
        </h2>
        <Formik
          initialValues={InitialValue}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <Field
                  id="password"
                  type="password"
                  name="password"
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                  // disabled={isSubmitting}
                >
                  Login
                </button>
              </div>
              <div className="text-center mt-4">
                <p className="text-sm text-black">
                  Don't have an account? {''}
                  <span className="text-blue-700 font-medium underline">
                    <Link to="/register">Register here</Link>
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
