
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';


import MessageBox from '../layouts/MessageBox';

import { setIsLoginErrorFalse, setIsLoginSuccessFalse } from '../store/auth-store';
import Header from '../components/dashboard/Header';
import UserTitle from '../components/dashboard/UserTitle';
import Cards from '../components/dashboard/Cards';

function Dashboard() {

  const dispatch = useDispatch();

  const { is_login_error, login_success } = useSelector((state) => state.authSlice);


  useEffect(() => {
    if (login_success) {
      setTimeout(() => {
        dispatch(setIsLoginSuccessFalse());
      }, 2000);
    }
  }, [login_success]);


  return (
    <div className='flex flex-col p-4 '>


      {/* After login or Register */}
      {
        login_success && <MessageBox message={'Successfully logged in'} color={'bg-green-500'} />
      }

      <UserTitle />

      <Header />

      <Cards />


    </div>
  )
}

export default Dashboard