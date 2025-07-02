
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';


import MessageBox from '../layouts/MessageBox';

import { setIsLoginSuccessFalse } from '../store/auth-store';

import Header from '../components/dashboard/Header';
import UserTitle from '../components/dashboard/UserTitle';
import Cards from '../components/dashboard/Cards';

function Dashboard() {

  const dispatch = useDispatch();

  const { login_success } = useSelector((state) => state.authSlice);

  const { language_pair_stats } = useSelector((state) => state.dashboardSlice);


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

      <Cards language_pair_stats={language_pair_stats} />


    </div>
  )
}

export default Dashboard