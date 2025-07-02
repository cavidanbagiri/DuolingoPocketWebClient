
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';


import MessageBox from '../layouts/MessageBox';

import { setIsLoginSuccessFalse } from '../store/auth-store';

import Header from '../components/dashboard/Header';
import UserTitle from '../components/dashboard/UserTitle';
import Cards from '../components/dashboard/Cards';
import UserProfile from '../components/dashboard/UserProfile';

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
    <div className='flex flex-row p-4 bg-gray-50 '>


      {/* After login or Register */}
      {
        login_success && <MessageBox message={'Successfully logged in'} color={'bg-green-500'} />
      }

      <div className='flex flex-col w-full h-screen mr-10'>
        <UserTitle />
        <Cards language_pair_stats={language_pair_stats} />
      </div>


      <div className='flex flex-row justify-between items-center w-1/3'>

        <UserProfile />

      </div>
      


    </div>
  )
}

export default Dashboard