import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import toast from 'react-hot-toast';

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    toast.error('Authontication must required');
  }
  return context;
};

export default useAuth;
