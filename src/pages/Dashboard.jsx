
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { motion } from "framer-motion"

import FilterSection from '../components/dashboard/FilterSection'
import CardLayout from '../components/card/CardLayout'

import MessageBox from '../layouts/MessageBox';

import { setIsLoginErrorFalse, setIsLoginSuccessFalse } from '../store/auth-store';

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


      <div className='w-full flex flex-col '>

        <div className='flex flex-col p-4'>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ fontFamily: "Open Sans" }}
            className='text-5xl font-bold text-sky-700'
          >
            Dashboard
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-4 text-lg text-gray-600"
          >
            Track your saved words, learn smarter with LinguaPocket
          </motion.p>
        </div>

        <FilterSection />

        <CardLayout />
      </div>

    </div>
  )
}

export default Dashboard